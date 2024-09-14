import { DataTypes } from "sequelize";
import sequelize from "../../database.js";


const ShoppingDetail = sequelize.define("shopping_details", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  shopping_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default ShoppingDetail;
