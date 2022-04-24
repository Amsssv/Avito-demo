import React from "react";
import Post from "./post";
import { useRedux } from "../../../provider";

export default function Posts() {

    const { state } = useRedux();
    const sort = state.items.filter((item) => state.filtered.includes(item.id));

    const items = [];

    (function filter() {
        for (let a = 0; a < sort.length; a++) {
            for (let i = 0; i < sort.length; i++) {
                if (sort[i].id === state.filtered[a]) {
                    items.push(sort[i])
                }
            }
        }
    })()

    return (
        <>
            {items.map(({ id, ...rest }) => <Post key={id} {...rest} />)}
        </>
    )
}