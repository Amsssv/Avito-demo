import {Router} from 'express';
import {ListController} from '../controllers';
const router = Router();
const controller = new ListController();

router.get('/', controller.getItems);
router.post('/', controller.addItem);

export default router;