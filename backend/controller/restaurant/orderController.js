import OrderResturant from "../../model/restaurant/orderModel.js";
import Menu from "../../model/restaurant/menuModel.js";

export const createOrder = async (req, res) => {
  const { store_id, item_detail, price, table_id } = req.body;
  item_detail.forEach(async (menu) => {
    const existingMenu = await Menu.findOne({ where: { id: menu.id } });
    if (existingMenu) {
      const newSale = existingMenu.sale + menu.quantity;
      // อัปเดตในฐานข้อมูล
      await existingMenu.update({ sale: newSale });
    } else {
      return res.status(500).json({ error: error.message });
    }
  });
  try {
    const order = await OrderResturant.findOne({
      where: {
        table_id: table_id,
        payment_status: "กำลังตรวจสอบ", // สมมติว่าคุณมีฟิลด์นี้
      },
      order: [["createdAt", "DESC"]], // ดึงข้อมูลตามลำดับเวลาล่าสุด
      limit: 1, // ดึงข้อมูลล่าสุดเพียงรายการเดียว
    });

    let createOrder
   
    if (!order) {
      createOrder = await OrderResturant.create({
        store_id,
        item_detail,
        price,
        table_id,
      });
    } else {
      const newPrice = order.price  + price
      const itemDetail = JSON.parse(order.item_detail)
      item_detail.forEach(item => {
        itemDetail.push(item);
      })
      await order.update({
        item_detail : itemDetail,
        price : newPrice,
      });
    }

    res.status(201).json(createOrder);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

export const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderResturant.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const findOrderLast = async (req, res) => {
  const { table_id } = req.params; // สมมติว่าใช้ table_id เป็นพารามิเตอร์
  try {
    const order = await OrderResturant.findOne({
      where: {
        table_id: table_id,
        payment_status: "กำลังตรวจสอบ", // สมมติว่าคุณมีฟิลด์นี้
      },
      order: [["createdAt", "DESC"]], // ดึงข้อมูลตามลำดับเวลาล่าสุด
      limit: 1, // ดึงข้อมูลล่าสุดเพียงรายการเดียว
    });

    if (!order) {
      return res
        .status(404)
        .json({ message: "ไม่มีรายการสั่งอาหาร" });
    }
    

    res.status(200).json(order); // คืนข้อมูลออเดอร์ล่าสุดที่ยังไม่ได้ชำระ
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await OrderResturant.findByPk(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.destroy();

    res.status(200).json({ message: "Oder deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const filterOrder = async (req, res) => {
//   const { keyword } = req.params;
//   try {
//     let orders;
//     if (!keyword || keyword === "") {
//       orders = await Order.findAll();
//     } else {
//       console.log(keyword);
//       orders = await Order.findAll({
//         where: {
//           [Op.or]: [
//             { name: { [Op.like]: `%${keyword}%` } },
//             { id: { [Op.like]: `%${keyword}%` } },
//           ],
//         },
//       });
//     }
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const editOrder = async (req, res) => {
//   const { id } = req.params;
//   const { store_id, user_detail, payment } = req.body;

//   try {
//     const editOrder = await Order.findByPk(id);

//     if (!editOrder) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     await editOrder.update({
//       store_id,
//       user_detail,
//       payment,
//     });

//     res.status(200).json(editOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteOrder = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const order = await Order.findByPk(id);

//     if (!order) {
//       return res.status(404).json({ message: "Order not found" });
//     }

//     await order.destroy();

//     res.status(200).json({ message: "Oder deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
