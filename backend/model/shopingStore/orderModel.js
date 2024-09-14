import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_detail: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  payment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Order;