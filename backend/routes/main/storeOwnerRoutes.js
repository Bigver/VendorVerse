import express from 'express';
import { createStoreOwner } from '../../controller/main/storeOwnerController.js';

const router = express.Router();

router.post('/create/store', createStoreOwner);

export default router;
