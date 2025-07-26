const {
  add,
  subtract,
  multiply,
  divide,
} = require("../models/calculatorModel");

const addNumbers = (req, res) => {
  const result = add(parseInt(req.query.num1), parseInt(req.query.num2));
  res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
  const result = subtract(parseInt(req.query.num1), parseInt(req.query.num2));
  res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
  const result = multiply(parseInt(req.query.num1), parseInt(req.query.num2));
  res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
  try {
    const result = divide(parseInt(req.query.num1), parseInt(req.query.num2));
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
