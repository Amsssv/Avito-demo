import {sort} from './constants';

export const getSortFunction = (value) => {
    debugger;
    switch (value) {
        case sort.ASC_DATE:return () => {};
        case sort.DESC_DATE:return () => {};
        case sort.ASC_PRICE:return (a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
        };
        case sort.DESC_PRICE: return  (a, b) => {
            if (b.price < a.price) {
                return -1;
            }
            if (b.price > a.price) {
                return 1;
            }
            return 0;
        };
    }
}

export const filterItemsByPrice = (items, minPrice, maxPrice) => items.filter(({price}) =>
    price >= minPrice && maxPrice >= price);