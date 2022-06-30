import pg from 'pg';

class ListModel {
    constructor() {
        this.pool = new pg.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'avito_cards',
            password: '1234',
            port: 3030,
        })
    }

    async getItems({minPrice, maxPrice, sort, page}) {
        let cardsQuery = `SELECT * FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice} ORDER BY price ${sort} offset ${(page * 3) - 3} rows fetch next 3 rows only `;
        let pagesQuery = `SELECT COUNT(*) FROM card WHERE price BETWEEN ${minPrice} AND ${maxPrice}`;

        const items = await this.pool.query(cardsQuery);
        const pages = await this.pool.query(pagesQuery);

        return {items, pages};
    }

    async addItem(title, imageUrl, isFavorite, price, description) {
        let sqlQuery = `INSERT INTO card (image, title, isfavorite, price, description) VALUES ($2, $1, $3, $4, $5) RETURNING *`;

        return await this.pool.query(sqlQuery, [title, imageUrl, isFavorite, price, description]);
    }
}

export default ListModel;
