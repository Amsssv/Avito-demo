import {FAVORITE, FILTER_PRICE, PAGINATE, SORT} from "../actions";
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
}, {
    id: 4,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 990,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 5,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 3700,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 6,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 750,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 7,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: 400,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 8,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: true,
    price: 4500,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 9,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: true,
    price: 700,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 10,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: true,
    price: 1800,
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}];

// const Fetchitems = () => {fetch("http://localhost:3000/items")
//     .then((response) => response.json())
//     .then((result) => console.log(result))
// };
//
// const items = Fetchitems()

export const initialState = {
    items: items,
    sort: sort.ASC_PRICE,
    minPrice: 0,
    maxPrice: 999999,
    filtered: items.map((item) => item.id),
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
        case FAVORITE:
            return {
                ...state,
                favorite: action.payload.like
            };
        default:
            return state;
    }
}

export default reducers;