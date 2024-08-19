import express from 'express';
import { createPackage , getPackage } from '../../controller/main/packageController.js';

const router = express.Router();

router.post('/create/package', createPackage);
router.get('/package', getPackage);

export default router;
