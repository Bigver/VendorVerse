import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/main/userRoutes.js';
import packageRoutes from './routes/main/packageRoutes.js';
import storeOwnerRoutes from './routes/main/storeOwnerRoutes.js';
import uploadRoutes from './routes/main/uploadRoutes.js';
import pageRoutes from './routes/shopingStore/pageRoute.js';
import productRoutes from './routes/shopingStore/productRoute.js';
import orderRoutes from './routes/shopingStore/orderRoute.js';

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


//storeShop
app.use('/api/store', pageRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);



export default app;