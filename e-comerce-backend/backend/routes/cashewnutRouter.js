const express = require("express");
const router = express.Router();
const {
  getCashewnuts,
  getCashewnutsById,
} = require("../controller/cashewnutController");

router.get("/", getCashewnuts);
router.get("/:id", getCashewnutsById);

module.exports = router;
