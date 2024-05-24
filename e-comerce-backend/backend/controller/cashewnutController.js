const Cashewnuts = require("../models/Cashewnuts");

const getCashewnuts = async (req, res) => {
    try {
      const cashewnuts = await Cashewnuts.find({});
      res.json(cashewnuts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getCashewnutsById = async (req, res) => {
    try {
      const cashewnuts = await Cashewnuts.findById(req.params.id);
  
      res.json(cashewnuts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    getCashewnuts,
    getCashewnutsById,
  };
  