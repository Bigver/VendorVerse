import Menu from "../../model/restaurant/menuModel.js";

export const createMenu = async (req, res) => {
  const {
    store_id,
    name,
    detail,
    product_img,
    product_more,
    product_special,
    price,
    category,
  } = req.body;
  try {
    const createMenu = await Menu.create({
      store_id,
      name,
      detail,
      product_img,
      product_more,
      price,
      category,
      product_special,
    });
    res.status(201).json(createMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMenu = async (req, res) => {
  const { store_id, category } = req.params;
  try {
    let menuData;
    if (category === "all") {
      menuData = await Menu.findAll({
        where: { store_id: store_id },
      });
    } else {
      menuData = await Menu.findAll({
        where: { store_id: store_id, category: category },
      });
    }

    if (!menuData) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editMenu = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    detail,
    product_img,
    product_more,
    product_special,
    price,
    status,
    category,
  } = req.body;

  try {
    const editMenu = await Menu.findByPk(id);

    if (!editMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    await editMenu.update({
      name,
      detail,
      product_img,
      product_more,
      product_special,
      price,
      status,
      category,
    });

    res.status(200).json(editMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ message: "menu not found" });
    }
    await menu.destroy();
    res.status(200).json({ message: "menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getProductList = async (req, res) => {
//   const { store_id } = req.params;
//   try {
//     const productData = await Product.findAll({
//       where: { store_id: store_id },
//     });
//     if (!productData) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json(productData);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const filterProduct = async (req, res) => {
//   const { keyword } = req.params;
//   try {
//     let products;
//     if (!keyword || keyword === "") {
//       products = await Product.findAll();
//     } else {
//       console.log(keyword);
//       products = await Product.findAll({
//         where: {
//           [Op.or]: [
//             { name: { [Op.like]: `%${keyword}%` } },
//             { id: { [Op.like]: `%${keyword}%` } },
//           ],
//         },
//       });
//     }
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
