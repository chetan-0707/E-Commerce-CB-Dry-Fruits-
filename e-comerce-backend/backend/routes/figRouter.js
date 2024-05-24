const express = require("express");
const router = express.Router();
const {
  getFigs,
  getFigsById,
} = require("../controller/figController");

router.get("/", getFigs);
router.get("/:id", getFigsById);

module.exports = router;
