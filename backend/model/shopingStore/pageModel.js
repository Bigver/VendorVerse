import { DataTypes } from "sequelize";
import sequelize from "../../database.js";
import StoreOwner from '../main/storeOwnerModel.js'

const PageEdit = sequelize.define('page_edits', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: StoreOwner, // เชื่อมกับตาราง Store
      key: 'id',    // เชื่อมกับคอลัมน์ id ของตาราง Store
    },
  },
  name_store: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  template: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSCmEHIwIqAuTIPx7EfJEb6s3RToY8YQEng&s",
  },
  title1: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "SHOPPING STORE",
  },
  detail1: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet recusandae quo, perferendis illum, praesentium aspernatur cupiditate facere hic a voluptatem. Quasi facilis autem cupiditate natus sequi iure, et exercitationem.",
  },
  image1: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: ["https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMHdvbWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D" , "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb24lMjBtZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D" ,"https://plus.unsplash.com/premium_photo-1673758910970-781406b35c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGhhdCUyMG1vZGVsfGVufDB8fDB8fHww"],
  },
  title2: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "What We Do",
  },
  detail2: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium, eius, laudantium laboriosam obcaecati earum et adipisci quos tenetur ducimus non nobis quam, magni pariatur natus rem modi animi. Dolore.",
  },
  image2: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "https://img.freepik.com/free-psd/beautiful-pieces-woman-modeling_23-2150115449.jpg?size=626&ext=jpg&ga=GA1.1.753019484.1708109519&semt=ais_hybrid",
  },
  categoty: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: ['women' , 'men' , 'hat & grasses'],
  },
  detail_footer: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum veniam quos fugiat maiores fuga quam consectetur omnis quis! Sequi iusto qui dignissimos nostrum beatae. Neque accusamus temporibus at cum.",
  },
  link_facebook: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "/",
  },
  link_instragram: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "/",
  },
  link_line: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "/",
  },
});

StoreOwner.hasOne(PageEdit, { foreignKey: 'store_id' });  // ร้านค้าหนึ่งมีหนึ่งเพจ
PageEdit.belongsTo(StoreOwner, { foreignKey: 'store_id' , as: 'storeOwner' }); // หน้าเพจเชื่อมกับร้านค้า

export default PageEdit;