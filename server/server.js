const express = require("express");
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

app.get('/items', (req, res) => {
    const {page, minPrice, maxPrice, sort} = req.query;
    let cardsQuery = `SELECT * FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice} ORDER BY price ${sort} offset ${(page * 3) - 3} rows fetch next 3 rows only `;
    let pagesQuery = `SELECT COUNT(*) FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;

    Promise.all([
        pool.query(cardsQuery), pool.query(pagesQuery)
    ]).then(function ([items, pages]) {
        res.send({
            items: items.rows,
            pages: Math.ceil(pages.rows[0].count/3),
            page: page,
        })
    })
})

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));