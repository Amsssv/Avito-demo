import React from "react";
import Post from "./post";
import {getSortFunction, filterItemsByPrice} from "../../../utils";
import {useSelector} from "../../../redux";


export const filtredItems = () => {
    const state = useSelector();
    const items = filterItemsByPrice([...state.items].sort(getSortFunction(state.sort)), state.minPrice, state.maxPrice);
    return items
}

export default function Posts() {
    const state = useSelector();
    const cards = filtredItems().slice(((state.page * 3) - 3), (state.page * 3));
     return (
        <>
            {cards.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}