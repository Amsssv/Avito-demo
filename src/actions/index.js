import {FILTER_PRICE, SORT, PAGINATE, GETITEMS, GETTOTALPAGES} from "./types"

export const filterPrice = (minPrice = null, maxPrice = null) => {
    return {
        type: FILTER_PRICE,
        payload:{minPrice, maxPrice},
    }
}

export const sort = (sort = null) => {
    return {
        type: SORT,
        payload: {sort},
    }
}

export const paginate = (page = null) => {
    return {
        type: PAGINATE,
        payload: {page},
    }
}

export const getItems = (items = null) => {
    return {
        type: GETITEMS,
        payload: {items}
    }
}

export const getTotalPages = (pages = null) => {
    return {
        type: GETTOTALPAGES,
        payload: {pages}
    }
}

