const express = require("express");
const router = express.Router();
const {
getRaisins,
  getRaisinsById,
} = require("../controller/raisinController");

router.get("/", getRaisins);
router.get("/:id", getRaisinsById);

module.exports = router;
