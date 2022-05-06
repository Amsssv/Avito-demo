import {FILTER_PRICE, INIT, PAGINATE, SORT} from "../actions/types";
import {getItems} from "../actions";

const request = (page, minPrice, maxPrice, sort) => {
    return new Promise((resolve, reject) => {
        const url = new URL("http://localhost:3000/items");
        url.searchParams.append("page", page);
        url.searchParams.append("minPrice", minPrice);
        url.searchParams.append("maxPrice", maxPrice);
        url.searchParams.append("sort", sort);
        fetch(url)
            .then(res => resolve(res.json()))
    })
}

export const fetchItems = store => next => action => {

    const {page, minPrice, maxPrice, sort} = store.getState();

    const dispatchItems = (data) => store.dispatch(getItems(data.items, data.pages, data.page));

    if (action.type === INIT) {
        request(page, minPrice, maxPrice, sort)
            .then(data => dispatchItems(data))
    }
    if (action.type === FILTER_PRICE) {
        request(1, action.payload.minPrice, action.payload.maxPrice, sort)
            .then(data => dispatchItems(data));
    }
    if (action.type === SORT) {
        request(1, minPrice, maxPrice, action.payload.sort)
            .then(data => dispatchItems(data));
    }
    if (action.type === PAGINATE) {
        request(action.payload.page, minPrice, maxPrice, sort)
            .then(data => dispatchItems(data))
    }

    return next(action);
}

