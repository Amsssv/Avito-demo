import {filterPrice, getItems, sort} from "../actions";

const request = (page, minPrice, maxPrice, sort) => {
    return new Promise((resolve) => {
        const url = new URL("http://localhost:3000/items");
        url.searchParams.append("page", page);
        url.searchParams.append("minPrice", minPrice);
        url.searchParams.append("maxPrice", maxPrice);
        url.searchParams.append("sort", sort);
        fetch(url)
            .then(res => resolve(res.json()))
    })
}

// export const fetchItems = store => next => action => {
//
//     const {page, minPrice, maxPrice, sort} = store.getState();
//
//     const dispatchItems = (data) => store.dispatch(getItems(data.items, data.pages, data.page));
//
//     if (action.type === FILTER_PRICE) {
//         request(1, action.payload.minPrice, action.payload.maxPrice, sort)
//             .then(data => dispatchItems(data));
//     }
//     if (action.type === SORT) {
//         request(1, minPrice, maxPrice, action.payload.sort)
//             .then(data => dispatchItems(data));
//     }
//     return next(action);
// }


export function initItems(dispatch, getState) {
    const {page, minPrice, maxPrice, sort} = getState();
    request(page, minPrice, maxPrice, sort)
        .then(data => dispatch(getItems(data.items, data.pages, data.page)))
}

export function Paginate(page) {
    return function savePaginatePage(dispatch, getState) {
        const {minPrice, maxPrice, sort} = getState();
        request(page, minPrice, maxPrice, sort)
            .then(data => dispatch(getItems(data.items, data.pages, data.page)))
    }
}

export function Sort(sortValue) {
    return function saveSelectedSort(dispatch, getState) {
        const {minPrice, maxPrice} = getState();
        dispatch(sort(sortValue))
        request(1, minPrice, maxPrice, sortValue)
            .then(data => dispatch(getItems(data.items, data.pages, data.page)))
    }
}

export function FilterPrice (minPrice, maxPrice) {
    return function saveMinMaxPrices(dispatch, getState) {
        const { sort} = getState();
        dispatch(filterPrice(minPrice, maxPrice))
        request(1, minPrice, maxPrice, sort)
            .then(data => dispatch(getItems(data.items, data.pages, data.page)))
    }
}