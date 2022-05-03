import React from "react";
import Post from "./post";
import {useSelector} from "../../../redux";


export default function Posts() {
    const state = useSelector();
    const cards = [...state.items];
     return (
        <>
            {cards.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}