import {UPDATE_FILTER} from "../actions";

const items = [{
    id: 1,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: "1200",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 2,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: "500",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}, {
    id: 3,
    image: "https://68.img.avito.st/208x156/13363088268.jpg",
    title: "Longboard",
    isFavorite: false,
    price: "800",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
}];

export const initialState = {
    items: items,
    filtered: items.map((item) => item.id),
}

const reducers = (state, action) => {
    switch (action.type){
        case UPDATE_FILTER: return {
            ...state,
            filtered: state.items
                .filter(({price}) =>
                    parseInt(price) >= parseInt(action.payload.minPrice) && parseInt(action.payload.maxPrice) >= parseInt(price)
                ).map(({id}) => id)
        };

        default: return state;
    }
}

export default reducers;