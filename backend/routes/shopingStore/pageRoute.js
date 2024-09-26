import express from 'express';
import { createPage , getPage , editPage } from '../../controller/shopingStore/pageController.js';

const router = express.Router();

router.post('/create/page', createPage);
router.get('/page/:nameStore', getPage);
router.put('/page/edit/:id', editPage);

export default router;
