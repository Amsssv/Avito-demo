export const FILTER_PRICE = "FILTER_PRICE";
export const SORT = "SORT";
export const PAGINATE = "PAGINATE";
export const FAVORITE = "FAVORITE"


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
export const setFavorite = (like = true) => {
    return {
        type: FAVORITE,
        payload: {like},
    }
}

