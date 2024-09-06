import sequelize from  "../database.js";
// import User from './main/userModel.js';
// import Package from './main/packageModel.js';
import StoreOwner from './main/storeOwnerModel.js';
import Page from './shopingStore/pageModel.js';

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create table : ', err);
  });
  