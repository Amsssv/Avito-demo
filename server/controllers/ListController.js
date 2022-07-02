import {ListModel} from '../models';
import fs from "fs";

class ListController {
    constructor() {
        this.model = new ListModel();
        this.getItems = this.getItems.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    async getItems(req, res) {
        try {
            const {page, minPrice, maxPrice, sort} = req.query;
            const {items, pages} = await this.model.getItems({minPrice, maxPrice, sort, page});
            res.send({
                items: items.rows,
                pages: pages.rows[0].count,
                page: page,
            })
        } catch (err) {
            console.log(err)
        }
    }

    async addItem(req, res) {
        try {
            const {title, imageUrl, isFavorite, price, description} = req.query;
            const base64Data = req.body.img.replace(/^data:image\/jpeg+;base64,/, "");
            let imageName = req.body.name;

            fs.writeFile(`./images/${imageName}`, base64Data, 'base64', (err) => console.log(err));

            res.send(await this.model.addItem(title, imageUrl, isFavorite, price, description))
        } catch (err) {
            console.log(err)
        }
    }
}

export default ListController;