import sequelize from  "../database.js";
import User from './main/userModel.js';
import Package from './main/packageModel.js';
import StoreOwner from './main/storeOwnerModel.js';
import Page from './shopingStore/pageModel.js';
import Order from "./shopingStore/orderModel.js";
import Product from "./shopingStore/productModel.js";
import Category from "./shopingStore/categoryModel.js";
import ShoppingDetail from "./shopingStore/shoppingDetailModel.js";
import ShoppingStore from "./shopingStore/shoppingStoreModel.js";

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create table : ', err);
  });
  