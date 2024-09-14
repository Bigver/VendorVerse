import ShoppingStore from "../../model/main/shopping_stores/shoppingStoreModel";
import ShoppingDetail from "../../model/main/shopping_stores/shoppingDetailModel";

export const createShoppingStore = async (req, res) => {
  const { store_id, user_id, template } = req.body;
  try {
    const createShoppingStore = await ShoppingStore.create({
      store_id,
      user_id,
      template,
    });
    res.status(201).json(createShoppingStore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getShoppingStore = async (req, res) => {
  try {
    const ShoppingStoreData = await ShoppingStore.findAll();
    res.status(201).json(ShoppingStoreData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editShoppingStore = async (req, res) => {
  const { id } = req.params;
  const { store_id, user_id, template } = req.body;

  try {
    const shoppingStore = await ShoppingStore.findByPk(id);

    if (!shoppingStore) {
      return res.status(404).json({ message: "Shopping store not found" });
    }

    await shoppingStore.update({ store_id, user_id, template });

    res.status(200).json(shoppingStore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteShoppingStore = async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingStore = await ShoppingStore.findByPk(id);

    if (!shoppingStore) {
      return res.status(404).json({ message: "Shopping store not found" });
    }

    await shoppingStore.destroy();

    res.status(200).json({ message: "Shopping store deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
