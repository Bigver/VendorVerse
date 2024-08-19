import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './userRoutes.js';
import packageRoutes from './packageRoutes.js';
import storeOwnerRoutes from './storeOwnerRoutes.js';
import uploadRoutes from './uploadRoutes.js';

import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// กำหนดเส้นทาง
app.use('/api', packageRoutes);
app.use('/api/users', userRoutes);
app.use('/api/user', storeOwnerRoutes);
app.use('/api/upload', uploadRoutes);



export default app;