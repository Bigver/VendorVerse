import StoreOwner from "../../model/main/storeOwnerModel.js";
import PageEdit from "../../model/shopingStore/pageModel.js";
import Payment from "../../model/main/paymentModel.js";
import PageResturantEdit from "../../model/restaurant/pageModel.js";

export const createStoreOwner = async (req, res) => {
  const {
    user_id,
    name_store,
    select_store,
    package_id,
    start_date,
    end_date,
    permission,
    image,
    price
  } = req.body;
  try {
    if (price > 0){
      const createPayment =  await Payment.create({
        user_id,
        price,
        image,
      });
    }
    const createStoreOwner = await StoreOwner.create({
      user_id,
      name_store,
      select_store,
      package_id,
      start_date,
      end_date,
      permission,
    });
   
    if (select_store === "store") {
      await PageEdit.create({
        store_id : createStoreOwner.id,
        name_store : name_store
      });
    }else if(select_store === "resturant"){
      await PageResturantEdit.create({
        store_id : createStoreOwner.id,
        name_store : name_store
      });
    }
    res.status(201).json(createStoreOwner);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};


export const getStoreOwner = async (req, res) => {
  const user_id = req.params.user_id
    try {
      const StoreOwnerData = await StoreOwner.findAll(
        {
          where : { user_id: user_id }, 
        }
      );
      res.status(201).json(StoreOwnerData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };