import {FILTER_PRICE, SORT} from "../actions";
import {sort} from "../constants";

const items = [{
    id: 1,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 1200,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 2,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 500,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 3,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 800,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}];

export const initialState = {
    items: items,
    sort: sort.ASC_PRICE,
    minPrice: 0,
    maxPrice: 999999,
    filtered: items.map((item) => item.id),
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_PRICE:
            return {
                ...state,
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
            };
        case SORT: return {
            ...state,
            sort: action.payload.sort
        }
        default:
            return state;
    }
}

export default reducers;