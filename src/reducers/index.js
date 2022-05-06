import {FILTER_PRICE, GETITEMS, PAGINATE, SORT} from "../actions/types";
import {sort} from "../constants";

export const initialState = {
    items: [],
    sort: sort.ASC_PRICE,
    minPrice: 0,
    maxPrice: 999999,
    page: 1,
    pages: 1,
}

const filterPrice = (state, action) => { return {
    ...state,
    minPrice: action.payload.minPrice,
    maxPrice: action.payload.maxPrice,
}};

const sortFunc = (state, action) => { return {
    ...state,
    sort: action.payload.sort,
}};

const paginate = (state, action) => { return {
    ...state,
    page: action.payload.page
}};

const getItems = (state, action) => { return {
    ...state,
    items: action.payload.items,
    pages: action.payload.pages,
    page: action.payload.page
}};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRICE: return filterPrice(state, action);
        case SORT: return sortFunc(state, action);
        case PAGINATE: return paginate(state, action);
        case GETITEMS: return getItems(state, action);
        default:
            return state;
    }
}

export default reducers;