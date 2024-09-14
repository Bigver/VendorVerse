import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detail: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  product_img: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue:"",
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  sale: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  category_id: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('category_ids');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('category_ids', JSON.stringify(value));
    }
  }
});

export default Product;