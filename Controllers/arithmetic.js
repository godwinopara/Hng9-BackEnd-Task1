const {
  addition,
  subtraction,
  multiplication,
} = require("../utils/arithmetic");

const apiCalculator = (req, res) => {
  const { operation_type, x, y } = req.body;

  let operationResult;

  if (operation_type === "addition") {
    operationResult = addition(x, y);
  } else if (operation_type === "subtraction") {
    operationResult = subtraction(x, y);
  } else if (operation_type === "multiplication") {
    operationResult = multiplication(x, y);
  }

  res.status(201).json({
    slackUsername: "@godwinopara",
    result: operationResult,
    operation_type,
  });
};

module.exports = apiCalculator;
