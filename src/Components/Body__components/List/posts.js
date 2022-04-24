import React from "react";
import Post from "./post";
import {useRedux} from "../../../provider";
import {getSortFunction, filterItemsByPrice} from "../../../utils";

export default function Posts() {
    const {state} = useRedux();
    const items = filterItemsByPrice([...state.items].sort(getSortFunction(state.sort)), state.minPrice, state.maxPrice);
    return (
        <>
            {items.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}