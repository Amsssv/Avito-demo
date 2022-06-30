import  express from 'express';
import rootRouter from './routers';
import fs from "fs";
const app = express();

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static('../dist'));
app.use(express.urlencoded({extended: false }))
app.use(express.json({limit: '25mb'}))

app.use(rootRouter);

app.use('/image', (req, res) => {
    const base64Data = req.body.img.replace(/^data:image\/jpeg+;base64,/, "");

    fs.writeFile(`./images/${req.body.name.replaceAll(" ", "")}`, base64Data, 'base64', (err) => console.log(err));
})

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));