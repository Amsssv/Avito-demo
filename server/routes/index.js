
const express = require('express');
const router = express.Router();
const {getItems} = require('../controllers')

router.get('/', function (req, res, next) {
    const {page, minPrice, maxPrice, sort} = req.query;
    try {
        getItems(page, minPrice, maxPrice, sort).then(result => res.send(result));
    }catch (err) {
        next(err);
    }
});


module.exports = router;