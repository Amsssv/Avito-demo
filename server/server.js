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
    let query = `SELECT * FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice} ORDER BY price ${sort} `;

    return (pool.query(query, (error, result) =>  res.send({
            items: result.rows.slice((page * 3) - 3, (page * 3)),
            pages: Math.ceil(result.rowCount / 3),
            page: page,
        })))
})

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));