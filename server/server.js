const express = require('express');
const app = express();
const itemRouter = require('./routes');

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static("../dist"));

app.use('/items', itemRouter);



app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));