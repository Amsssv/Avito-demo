import {FILTER_PRICE, SORT } from "../actions/types";

export const fetchItems = ({dispatch}) => next => action => {
    if (action.type === FILTER_PRICE) {
        fetch("/url", {method: "GET"}).then(data => {
            dispatch();
        });
    }

    if (action.type === SORT) {
        fetch("/url", {method: "GET"}).then(data => {
            dispatch()
        })
    }

    return next(action);
}

