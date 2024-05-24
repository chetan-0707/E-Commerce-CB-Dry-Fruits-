const Pista = require("../models/Pista");

const getPistas = async (req, res) => {
    try {
      const Pistas = await Pista.find({});
      res.json(Pistas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getPistasById = async (req, res) => {
    try {
      const Pistas = await Pista.findById(req.params.id);
  
      res.json(Pistas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    getPistas,
    getPistasById,
  };
  