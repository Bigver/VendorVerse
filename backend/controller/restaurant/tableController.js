import Table from "../../model/restaurant/tableModel.js";

export const createTable = async (req, res) => {
  const {
    table_number,
  } = req.body;
  try {
    const createTable = await Table.create({
        table_number,
    });
    res.status(201).json(createTable);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};


  
  export const deleteTable = async (req, res) => {
    const { id } = req.params;
    try {
      const table = await Table.findByPk(id);
      if (!table) {
        return res.status(404).json({ message: "table not found" });
      }
      await table.destroy();
      res.status(200).json({ message: "table deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  