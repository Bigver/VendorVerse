import express from 'express';
import { createStoreOwner , getStoreOwner } from '../../controller/main/storeOwnerController.js';

const router = express.Router();

router.post('/create/store', createStoreOwner);
router.get('/store/:user_id', getStoreOwner);

export default router;