import express from 'express';
import Controller from './controllers/index.js';
const app = express();
const controller = new Controller();

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("../dist"));

app.get('/items', controller.getItems);

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));