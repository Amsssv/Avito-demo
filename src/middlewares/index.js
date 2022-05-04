import {FILTER_PRICE, PAGINATE, SORT} from "../actions/types";
import { getItems} from "../actions";


export const fetchItems = ({dispatch}) => next => action => {

    if (action.type === FILTER_PRICE) {
        fetch(`/items?page=1&minPrice=${action.payload.minPrice}&maxPrice=${action.payload.maxPrice}&sort=ASC_PRICE`)
            .then(res => res.json())
            .then(card => dispatch(getItems(card.items)))
    }
    if (action.type === SORT) {
        fetch(`/items?page=1&minPrice=0&maxPrice=99999&sort=${action.payload.sort}`)
            .then(res => res.json())
            .then(card => dispatch(getItems(card.items)))
    }
    if (action.type === PAGINATE) {
        fetch(`/items?page=${action.payload.page}&minPrice=${0}&maxPrice=99999&sort=ASC_PRICE`)
            .then(res => res.json())
            .then(card => dispatch(getItems(card.items)))
    }

    return next(action);
}

