export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (minPrice, maxPrice) => {
    return {
        type: UPDATE_FILTER,
        payload:{minPrice, maxPrice}
    }
}