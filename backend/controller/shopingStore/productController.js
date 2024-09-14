import Product from "../../model/shopingStore/productModel.js";
import { Op } from "sequelize";


export const createProduct = async (req, res) => {
  const { store_id, name, detail, product_img, price, stock, sale,category_id } = req.body;
  try {
    const createProduct = await Product.create({
      store_id,
      name,
      detail,
      product_img,
      price,
      stock,
      sale,
      category_id
    });
    res.status(201).json(createProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getProduct = async (res) => {
//   try {
//     const productData = await Product.findAll();
//     res.status(201).json(productData);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


export const findById = async (req, res) => {
  const { id } = req.params; 
  try {
    const product = await Product.findByPk(id); 
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { store_id, name, detail, product_img, price, stock, sale,category_id } = req.body;

  try {
    const editProduct = await Product.findByPk(id);

    if (!editProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    await editProduct.update({
      store_id,
      name,
      detail,
      product_img,
      price,
      stock,
      sale,
      category_id
    });

    res.status(200).json(editProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      await product.destroy();
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const filterProduct = async (req, res) => {
    const { keyword } = req.params;
    try {
      let products;
      if (!keyword || keyword === "") {
        products = await Product.findAll();
      } else {
        console.log(keyword);
        products = await Product.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.like]: `%${keyword}%` } },
              { id: { [Op.like]: `%${keyword}%` } }
            ]
          }
        });
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };