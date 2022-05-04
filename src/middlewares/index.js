import {FILTER_PRICE, PAGINATE, SORT} from "../actions/types";
import {getItems, getTotalPages} from "../actions";
import {initialState} from "../reducers";

export const fetchItems = store => next => action => {
    if (action.type === FILTER_PRICE) {
        fetch(`/items?page=${initialState.page}&minPrice=${action.payload.minPrice}&maxPrice=${action.payload.maxPrice}&sort=${store.state.sort}`)
            .then(res => res.json())
            .then(items => {
                store.dispatch(getItems(items.items));
                store.dispatch(getTotalPages(items.pages))
            })
    }
    if (action.type === SORT) {
        fetch(`/items?page=${store.state.page}&minPrice=${store.state.minPrice}&maxPrice=${store.state.maxPrice}&sort=${action.payload.sort}`)
            .then(res => res.json())
            .then(items => store.dispatch(getItems(items.items)))
    }
    if (action.type === PAGINATE) {
        fetch(`/items?page=${action.payload.page}&minPrice=${store.state.minPrice}&maxPrice=${store.state.maxPrice}&sort=${store.state.sort}`)
            .then(res => res.json())
            .then(items => store.dispatch(getItems(items.items)))
    }

    return next(action);
}

