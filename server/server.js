const express = require("express");
// const path = require("path");
const items = require('./data.json');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("dist"));

const config = require('../webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('/items', (req, res) => res.send(items))

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));