import {filterPrice, getItems, paginate, sort} from '../actions';

const request = (page, minPrice, maxPrice, sort) => {
    return new Promise((resolve) => {
        const url = new URL('http://localhost:3000/items');
        url.searchParams.append('page', page);
        url.searchParams.append('minPrice', minPrice);
        url.searchParams.append('maxPrice', maxPrice);
        url.searchParams.append('sort', sort);
        fetch(url)
            .then(res => resolve(res.json()))
            .catch(error => console.error(error))
    })
}

const fetchItems = (data, dispatch) => {
    const {items, pages, page} = data;
    let totalPages = Math.ceil(pages/3);
    dispatch(getItems(items, totalPages, page))
}

export function initItems(dispatch, getState) {
    const {page, minPrice, maxPrice, sort} = getState();
    request(page, minPrice, maxPrice, sort)
        .then(data => fetchItems(data, dispatch))
}

export function Paginate(page) {
    return ((dispatch, getState) => {
        const {minPrice, maxPrice, sort} = getState();
        request(page, minPrice, maxPrice, sort)
            .then(data => fetchItems(data, dispatch))
    })
}

export function Sort(sortValue) {
    return ((dispatch, getState) => {
        const {minPrice, maxPrice} = getState();
        dispatch(sort(sortValue))
        request(1, minPrice, maxPrice, sortValue)
            .then(data => fetchItems(data, dispatch))
    })
}

export function FilterPrice(minPrice, maxPrice) {
    return ((dispatch, getState) => {
        const {sort} = getState();
        dispatch(filterPrice(minPrice, maxPrice))
        request(1, minPrice, maxPrice, sort)
            .then(data => fetchItems(data, dispatch))
    })
}