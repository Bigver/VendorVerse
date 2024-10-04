import express from 'express';
import { createTable , deleteTable } from '../../controller/restaurant/tableController.js';

const router = express.Router();

router.post('/create', createTable);
router.delete('/delete', deleteTable);

export default router;
