import Model from '../models/index.js';

const model = new Model();

class Controller {

    constructor() {
        this.model = new Model();
    }

    getItems(req, res) {
        const {page, minPrice, maxPrice, sort} = req.query;
        model.getItems(page, minPrice, maxPrice, sort).then((data) => {
            res.send(data)
        })
    }
}

export default Controller;

