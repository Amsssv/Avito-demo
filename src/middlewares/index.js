import {addCard, filterPrice, getItems, sort} from "../actions";

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


const response = (title, imageUrl, isFavorite, price, description) => {
    return new Promise((resolve) => {
        const url = new URL("http://localhost:3000/items");
        url.searchParams.append("title", title);
        url.searchParams.append("imageUrl", imageUrl);
        url.searchParams.append("isFavorite", isFavorite);
        url.searchParams.append("price", price);
        url.searchParams.append("description", description);
        fetch(url, {
            method: "POST",
        })
            .then(res => resolve(res.json()))
    })
}

export function addItem(title, imageUrl, price, description) {
    return ((dispatch) => {
        response(title, imageUrl,false, price, description)
            .then(data => {
                dispatch(addCard(data.item))
            })
    })
}


export function addImage(data) { (async() => {
    let url = 'http://localhost:3000/image';

    console.log(data);

    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let result = await response.json();
} )()

}