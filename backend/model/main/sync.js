import sequelize from  "../../database.js";
// import User from './userModel.js';
// import Package from './packageModel.js';
import StoreOwner from './storeOwnerModel.js';

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to create table : ', err);
  });
  