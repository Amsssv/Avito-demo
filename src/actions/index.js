import {FILTER_PRICE, SORT, PAGINATE} from "./types"

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


