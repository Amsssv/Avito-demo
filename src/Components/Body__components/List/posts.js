import React from "react";
import Post from "./post";
import {getSortFunction, filterItemsByPrice} from "../../../utils";
import {useSelector} from "../../../redux";

export default function Posts() {
    const state = useSelector();
    const items = filterItemsByPrice([...state.items].sort(getSortFunction(state.sort)), state.minPrice, state.maxPrice);
    return (
        <>
            {items.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}