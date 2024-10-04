import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const Table = sequelize.define('tables', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  table_number : {
    type: DataTypes.INTEGER,
    allowNull: false,
  } ,
  status : {
    type: DataTypes.ENUM("ยังไม่ได้ชำระเงิน", "ชำระเงินแล้ว"),
    allowNull: false,
    defaultValue: "ยังไม่ได้ชำระเงิน", // กำหนดค่าเริ่มต้นเป็น 'pending'
  }
});

export default Table;