import sequelize from  "../database.js";
// import User from './main/userModel.js';
// import Package from './main/packageModel.js';
// import StoreOwner from './main/storeOwnerModel.js';
// import Page from './shopingStore/pageModel.js';
// import Order from "./shopingStore/orderModel.js";
// import Product from "./shopingStore/productModel.js";
// import Category from "./shopingStore/categoryModel.js";
// import Payment from "./main/paymentModel.js";
// import Table from "./restaurant/tableModel.js";
import OrderResturant from "./restaurant/orderModel.js";
// import Menu from "./restaurant/menuModel.js";
// import PageResturantEditt from "./restaurant/pageModel.js";

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create table : ', err);
  });
  