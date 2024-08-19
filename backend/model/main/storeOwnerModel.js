import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const StoreOwner = sequelize.define('store_owner', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name_store: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  select_store: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  permission: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

export default StoreOwner;