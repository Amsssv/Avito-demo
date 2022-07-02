import  express from 'express';
import rootRouter from './routers';
const app = express();

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static('../dist'));
app.use(express.urlencoded({extended: false }), express.json({limit: '25mb'}));

app.use(rootRouter);

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));