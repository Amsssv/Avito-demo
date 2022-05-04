import {FILTER_PRICE, PAGINATE, SORT} from "../actions/types";
import { getItems} from "../actions";

export const fetchItems = store => next => action => {
    if (action.type === FILTER_PRICE) {
        fetch(`/items?page=${store.state.page}&minPrice=${action.payload.minPrice}&maxPrice=${action.payload.maxPrice}&sort=${store.state.sort}`)
            .then(res => res.json())
            .then(card => store.dispatch(getItems(card.items)))
    }
    if (action.type === SORT) {
        fetch(`/items?page=${store.state.page}&minPrice=${store.state.minPrice}&maxPrice=${store.state.maxPrice}&sort=${action.payload.sort}`)
            .then(res => res.json())
            .then(card => store.dispatch(getItems(card.items)))
    }
    if (action.type === PAGINATE) {
        fetch(`/items?page=${action.payload.page}&minPrice=${store.state.minPrice}&maxPrice=${store.state.maxPrice}&sort=${store.state.sort}`)
            .then(res => res.json())
            .then(card => store.dispatch(getItems(card.items)))
    }

    return next(action);
}

