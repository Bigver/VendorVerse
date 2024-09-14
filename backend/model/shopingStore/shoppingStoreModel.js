import { DataTypes } from "sequelize";
import sequelize from "../../database.js";


const ShoppingStore = sequelize.define('shopping_stores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

export default ShoppingStore;