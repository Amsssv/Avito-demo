
const Model = require('../models');
const model = new Model();

async function getItems(page, minPrice, maxPrice, sort) {
    let cardsQuery = `SELECT * FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice} ORDER BY price ${sort} offset ${(page * 3) - 3} rows fetch next 3 rows only `;
    let pagesQuery = `SELECT COUNT(*) FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;

    const items = await model.pool.query(cardsQuery);
    const pages = await model.pool.query(pagesQuery);
    return {
        items: items.rows,
        pages: Math.ceil(pages.rows[0].count / 3),
        page: page,
    }
}

module.exports = {
    getItems,
}