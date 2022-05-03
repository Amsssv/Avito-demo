import {FETCH, FILTER_PRICE, PAGINATE, SORT} from "../actions/types";
import {sort} from "../constants";

export const initialState = {
    items: [],
    sort: sort.ASC_PRICE,
    minPrice: 0,
    maxPrice: 999999,
    page: 1,
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRICE:
            return {
                ...state,
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
            };
        case SORT:
            return {
                ...state,
                sort: action.payload.sort
            };
        case PAGINATE:
            return {
                ...state,
                page: action.payload.page
            };
        case FETCH:
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return state;
    }
}

export default reducers;