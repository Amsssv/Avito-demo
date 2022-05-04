import {FILTER_PRICE, SORT} from "../actions/types";
import { getItems} from "../actions";

export const fetchItems = ({dispatch}) => next => action => {
    if (action.type === FILTER_PRICE) {
        fetch("/items?page=2&minPrice=0&maxPrice=99999&sort=asc_price")
            .then(res => res.json())
            .then(card => dispatch(getItems(card)))
    }

    if (action.type === SORT) {
        fetch("/items?page=3&minPrice=0&maxPrice=99999&sort=asc_price")
            .then(res => res.json())
            .then(card => dispatch(getItems(card)))
    }

    return next(action);
}

