const express = require("express");
// const items = require('./data.json');
const app = express();
const  {Pool} = require('pg')


app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("dist"));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'avito_cards',
    password: '1234',
    port: 3030,
})

const filterByPrice = (minPrice, maxPrice, items) => items.filter(({price}) => price >= minPrice && maxPrice >= price);
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
const filterItems = (items, pageNumber , minPrice, maxPrice, sort) => filterByPage(sortBy(filterByPrice(minPrice, maxPrice, items), sort), pageNumber)

// app.get('/items', (req, res) => {
//
//     const {page, minPrice, maxPrice, sort} = req.query;
//
//     return res.send({
//         items: filterItems(items, page, minPrice, maxPrice, sort),
//         pages: Math.ceil(filterByPrice(minPrice, maxPrice).length/3),
//         page: page
//     })
// })

app.get('/items', (req, res) => {
    const {page, minPrice, maxPrice, sort} = req.query;

    return (pool.query('SELECT * FROM card', (error, result) => res.send({
        items: filterItems(result.rows, page, minPrice, maxPrice, sort),
        pages: Math.ceil(filterByPrice(minPrice, maxPrice, result.rows).length/3),
        page: page
    })))
})

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));