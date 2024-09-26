import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item_detail: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  user_detail: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shipping_status: {
    type: DataTypes.ENUM("กำลังตรวจสอบ", "กำลังจัดส่ง", "อยู่ระหว่างการจัดส่ง", "จัดส่งแล้ว" , "ยกเลิก"),
    allowNull: false,
    defaultValue: "กำลังตรวจสอบ", // กำหนดค่าเริ่มต้นเป็น 'pending'
  },
  payment_status: {
    type: DataTypes.ENUM("กำลังตรวจสอบ", "ชำระเงินแล้ว"),
    allowNull: false,
    defaultValue: "กำลังตรวจสอบ", // กำหนดค่าเริ่มต้นเป็น 'pending'
  },
  payment_img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Order;
