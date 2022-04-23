import React from "react";
import Post from "./post";
import {useRedux} from "../../../provider";

export default function Posts() {
    const {state} = useRedux();
    const items = state.items.filter((item) => state.filtered.includes(item.id));
    return (
        <>
            {items.map(({id, ...rest}) => <Post key={id} {...rest}/>)}
        </>
    )
}