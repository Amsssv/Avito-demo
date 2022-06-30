import express, {Router} from "express";
import ListRouter from "./ListRouter";
const rootRouter = Router();

rootRouter.use('/items', ListRouter, express.static('./images'));

export default rootRouter;