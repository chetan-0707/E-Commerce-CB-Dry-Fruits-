const express = require("express");
const router = express.Router();
const {
  getPistas,
  getPistasById,
} = require("../controller/pistaController");

router.get("/", getPistas);
router.get("/:id", getPistasById);

module.exports = router;
