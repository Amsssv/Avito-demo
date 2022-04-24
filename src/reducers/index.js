import { UPDATE_FILTER } from "../actions";

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

function sort(state) {
    const cheapest = []
    function compareNumbers(a, b) {
        return a - b;
    };
    const prices = (state.items.map((item) => item.price)).sort(compareNumbers);
    (function filter() {
        for (let a = 0; a < state.items.length; a++) {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].price === prices[a]) {
                    cheapest.push(state.items[i].id)
                }
            }
        }
    })()
    return cheapest
}


const reducers = (state, action) => {
    switch (action.type) {
        case UPDATE_FILTER: return {
            ...state,
            filtered:
                state.items
                    .filter(({ price }) =>
                        parseInt(price) >= parseInt(action.payload.minPrice) && parseInt(action.payload.maxPrice) >= parseInt(price)
                    ).map(({ id }) => id)
        };
        case "By default":
            return initialState;
        case "Cheaper": return {
            ...state,
            filtered: sort(state)
        };
        case "Expensive": return {
            ...state,
            filtered: sort(state).reverse()
        };
        default: return state;
    }
}

export default reducers;