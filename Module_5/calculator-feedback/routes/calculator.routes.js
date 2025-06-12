const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();

router.get("/add", calculatorController.addNumbers);
router.get("/subtract", calculatorController.subtractNumbers);
router.get("/multiply", calculatorController.multiplyNumbers);
router.get("/divide", calculatorController.divideNumbers);

module.exports = router;
