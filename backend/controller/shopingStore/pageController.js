import PageEdit from "../../model/shopingStore/pageModel.js";
import StoreOwner from "../../model/main/storeOwnerModel.js";

export const createPage = async (req, res) => {
  const { store_id , logo, title1, deatil1, image1, title2, detail2, image2 } = req.body;
  try {
    const createPage = await PageEdit.create({
      store_id,
      logo,
      title1,
      deatil1,
      image1,
      title2,
      detail2,
      image2,
    });
    res.status(201).json(createPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




export const getPage = async (req, res) => {
  const nameStore = req.params.nameStore
  try {
    const pageData = await PageEdit.findOne({
      where: { name_store: nameStore },
      // include: {
      //   model: StoreOwner,  // รวมข้อมูล StoreOwner
      //   as: 'storeOwner',   // ใช้ชื่อที่ตั้งไว้ในความสัมพันธ์ (alias)
      // },
    });
    res.status(201).json(pageData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};