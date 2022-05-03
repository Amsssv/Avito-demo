import {FETCH, FILTER_PRICE, SORT} from "../actions/types";
import {fetchsomething} from "../actions";

export const fetchItems = ({dispatch}) => next => action => {
    if (action.type === FETCH ) {
        fetch('/items?page=2&minPrice=0&maxPrice=99999&sort=asc_price')
            .then(responce => responce.json())
            .then(json => dispatch(fetchsomething(json)))
    }
    if (action.type === FILTER_PRICE) {
        fetch("/items", {method: "GET"}).then(data => {
            dispatch()
        })
    }

    if (action.type === SORT) {
        fetch("/items", {method: "GET"}).then(data => {
            dispatch()
        })
    }

    return next(action);
}

