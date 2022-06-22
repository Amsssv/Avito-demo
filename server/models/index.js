const pg = require('pg');

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
}

module.exports = Model;
