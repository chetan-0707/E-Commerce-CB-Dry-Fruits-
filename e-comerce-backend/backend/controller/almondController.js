const Almonds = require("../models/Almonds");


const getAlmonds = async (req, res) => {
  try {
    const almonds = await Almonds.find({});
    res.json(almonds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAlmondsById = async (req, res) => {
  try {
    const almonds = await Almonds.findById(req.params.id);

    res.json(almonds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteAlmond = ()=>{
  
}

module.exports = {
  getAlmonds,
  getAlmondsById,
};
