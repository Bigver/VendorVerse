import StoreOwner from "../../model/main/storeOwnerModel.js";

export const createStoreOwner = async (req, res) => {
  const {
    user_id,
    name_store,
    select_store,
    package_id,
    start_date,
    end_date,
    permission,
  } = req.body;
  try {
    const createPackage = await StoreOwner.create({
      user_id,
      name_store,
      select_store,
      package_id,
      start_date,
      end_date,
      permission,
    });
    res.status(201).json(createPackage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const getPackage = async (req, res) => {
//     try {
//       const packageData = await Package.findAll();
//       res.status(201).json(packageData);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
