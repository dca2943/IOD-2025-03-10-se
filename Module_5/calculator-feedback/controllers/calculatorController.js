const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200).json({ result: sum });
};

const subtractNumbers = (req, res) => {
  console.log("subtract number controller hit");
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  try {
    let difference = number1 - number2;
    console.log(difference);
    res.status(200).json({ result: difference });
  } catch (err) {
    console.error(`Error in subtractNumbers: ${err}`);
    res
      .status(400)
      .json({ error: "calculator controller subtractNumbers failed" });
  }
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = number1 * number2;
  console.log(product);
  res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  if (number2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }

  let quotient = number1 / number2;
  console.log(quotient);
  res.status(200).json({ result: quotient });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};
