import express from 'express';
import { createPage , getPage , editPage } from '../../controller/restaurant/pageController.js';

const router = express.Router();

router.post('/create', createPage);
router.get('/:nameStore', getPage);
router.put('/edit/:id', editPage);

export default router;
