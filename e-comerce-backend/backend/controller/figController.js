const Figs = require("../models/Figs");

const getFigs = async (req, res) => {
    try {
      const figs = await Figs.find({});
      res.json(figs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getFigsById = async (req, res) => {
    try {
      const figs = await Figs.findById(req.params.id);
  
      res.json(figs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    getFigs,
    getFigsById,
  };
  