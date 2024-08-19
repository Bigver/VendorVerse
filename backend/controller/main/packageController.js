import Package from "../../model/main/packageModel.js";

export const createPackage = async (req, res) => {
  const { name, detail, price, order, product , permission } = req.body;
  try {
    const createPackage = await Package.create({
      name,
      detail,
      price,
      order,
      product,
      permission
    });
    res.status(201).json(createPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPackage = async (req, res) => {
    try {
      const packageData = await Package.findAll();
      res.status(201).json(packageData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
