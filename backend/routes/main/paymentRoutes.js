import express from 'express';
import { createPayment , getPayment } from '../../controller/main/paymentController.js';

const router = express.Router();

router.post('/create', createPayment);
router.get('/:id', getPayment);

export default router;
