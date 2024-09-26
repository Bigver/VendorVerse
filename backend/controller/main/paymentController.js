import StoreOwner from "../../model/main/storeOwnerModel.js";
import Payment from "../../model/main/paymentModel.js";

export const createPayment = async (req, res) => {
  const {
    user_id,
    price,
    image,
    status,
  } = req.body;
  try {
    const createPayment = await Payment.create({
        user_id,
        price,
        image,
        status,
    });
    res.status(201).json(createPayment);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};


export const getPayment = async (req, res) => {
  const user_id = req.params.user_id
    try {
      const paymentData = await Payment.findAll(
        {
          where : { user_id: user_id }, 
        }
      );
      res.status(201).json(paymentData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };