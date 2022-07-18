import  express from 'express';
import rootRouter from './routers';
import path from 'path';
const app = express();

app.set('view engine', 'html');
app.set('views', './');
app.use(express.static('../dist'));
app.use(express.urlencoded({extended: false }), express.json({limit: '25mb'}));

app.use(rootRouter);

app.get('*', (req, res) => res.sendFile(path.resolve('..','dist', 'index.html')));

app.listen(3000, () => console.log(`Example app listening on port http://localhost:3000`));