const Raisin = require("../models/Raisin");

const getRaisins = async (req, res) => {
    try {
      const raisins = await Raisin.find({});
      res.json(raisins);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getRaisinsById = async (req, res) => {
    try {
      const raisins = await Raisin.findById(req.params.id);
  
      res.json(raisins);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    getRaisins,
    getRaisinsById,
  };
  