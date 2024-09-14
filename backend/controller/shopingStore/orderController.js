import Order from "../../model/shopingStore/orderModel.js";

export const createOrder = async (req,res) =>{
    const { store_id , user_detail, payment} = req.body;
    try{
        const createOrder = await Order.create({
            store_id,
            user_detail,
            payment
        });
        res.status(201).json(createOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const findById = async (req, res) => {
    const { id } = req.params; 
    try {
      const order = await Order.findByPk(id); 
      if (!order) {
        return res.status(404).json({ message: "order not found" });
      }
      res.status(200).json(order); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const filterOrder = async (req, res) => {
    const { keyword } = req.params;
    try {
      let orders;
      if (!keyword || keyword === "") {
        orders = await Order.findAll();
      } else {
        console.log(keyword);
        orders = await Order.findAll({
          where: {
            [Op.or]: [
              { name: { [Op.like]: `%${keyword}%` } },
              { id: { [Op.like]: `%${keyword}%` } }
            ]
          }
        });
      }
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const editOrder = async (req, res) => {
    const { id } = req.params;
    const { store_id , user_detail, payment} = req.body;
  
    try {
      const editOrder = await Order.findByPk(id);
  
      if (!editOrder) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      await editOrder.update({
        store_id,
        user_detail,
        payment
      });
  
      res.status(200).json(editOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteOrder = async (req, res) => {
    const { id } = req.params;
  
    try {
      const order = await Order.findByPk(id);
  
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      await order.destroy();
  
      res.status(200).json({ message: "Oder deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

