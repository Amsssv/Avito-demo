import React from "react";
import Post from "./post";
import {useSelector} from "react-redux";


export default function Posts() {
    const cards = useSelector((state) => state.items);
    // const cards = [...state.items];
     return (
        <>
            {cards.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}