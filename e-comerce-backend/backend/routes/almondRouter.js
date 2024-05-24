const express = require("express");
const router = express.Router();
const {
  getAlmonds,
  getAlmondsById,
} = require("../controller/almondController");

router.get("/", getAlmonds);
router.get("/:id", getAlmondsById);

module.exports = router;
