import PageResturantEdit from "../../model/restaurant/pageModel.js";
import StoreOwner from "../../model/main/storeOwnerModel.js";

export const createPage = async (req, res) => {
  const { store_id , logo, title1, deatil1, image1, title2, detail2, image2 } = req.body;
  try {
    const createPage = await PageResturantEdit.create({
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

export const editPage = async (req, res) => {
  const { id } = req.params;
  const {logo, template, title1, deatil1, image1, title2, detail2, image2 , category, detail_footer , link_facebook , link_instragram , link_line } = req.body;
  try {
    const page = await PageResturantEdit.findByPk(id);

    if (!page) {
      return res.status(404).json({ message: "found" });
    }

    await page.update({  template ,logo, title1, deatil1, image1, title2, detail2, image2 , category ,detail_footer , link_facebook , link_instragram , link_line });

    res.status(200).json(page);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};




export const getPage = async (req, res) => {
  const nameStore = req.params.nameStore
  try {
    const pageData = await PageResturantEdit.findOne({
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