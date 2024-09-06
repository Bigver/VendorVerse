import express from 'express';
import { createPage , getPage } from '../../controller/shopingStore/pageController.js';

const router = express.Router();

router.post('/create/page', createPage);
router.get('/page/:nameStore', getPage);

export default router;
