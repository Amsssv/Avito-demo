const express = require("express");
const items = require('./data.json');
const app = express();

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("dist"));

const filterByPrice = (minPrice, maxPrice) => items.filter(({price}) => price >= minPrice && maxPrice >= price);
const filterByPage = (items, pageNumber) => items.slice(((pageNumber * 3) - 3), (pageNumber * 3));
const getSortFunction = (value) => {
    switch (value) {
        case "ASC_PRICE":return (a, b) => {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        };
        case "DESC_PRICE": return  (a, b) => {
            if (b.price < a.price) {
                return -1;
            }
            if (b.price > a.price) {
                return 1;
            }
            return 0;
        };
    }
};
const sortBy = (items, sortValue) => items.sort(getSortFunction(sortValue));
const filterItems = (items, pageNumber , minPrice, maxPrice, sort) => filterByPage(sortBy(filterByPrice(minPrice, maxPrice), sort), pageNumber)

app.get('/items', (req, res) => {
    return res.send({items: filterItems(items, req.query.page, req.query.minPrice, req.query.maxPrice, req.query.sort), pages: Math.ceil(items.length/3) })
})

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));