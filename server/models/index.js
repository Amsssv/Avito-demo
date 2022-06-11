
import pg from 'pg';

class Model {

    constructor() {
        this.pool = new pg.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'avito_cards',
            password: '1234',
            port: 3030,
        })
    }

    async getItems(page, minPrice, maxPrice, sort) {
        let cardsQuery = `SELECT * FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice} ORDER BY price ${sort} offset ${(page * 3) - 3} rows fetch next 3 rows only `;
        let pagesQuery = `SELECT COUNT(*) FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;

        const items = await this.pool.query(cardsQuery);
        const pages = await this.pool.query(pagesQuery);
        return {
            items: items.rows,
            pages: Math.ceil(pages.rows[0].count / 3),
            page: page,
        }
    }

}

export default Model