const {
  addition,
  subtraction,
  multiplication,
} = require("../utils/arithmetic");

const apiCalculator = (req, res) => {
  const { operation_type, x, y } = req.body;

  // Convert the operation_type(String) into an array
  // So we can easily search for arithmetic words(e.g Addition, Substration e.t.c) from the array
  const formatedOperation_type = operation_type.split(" ");
  let operator;
  let operationResult;

  // Check to see operation_type(String) that was converted to array
  // has an arithmetic words("add" or "addition")
  if (
    formatedOperation_type.includes("add") ||
    formatedOperation_type.includes("addition")
  ) {
    // If it contains addition or add then we can add the values
    // sent along side the request
    operationResult = addition(x, y);
    operator = "addition";

    // Check to see operation_type(String) that was converted to array
    // has an arithmetic words("subtract", "subtraction" or "minus")
  } else if (
    formatedOperation_type.includes("subtract") ||
    formatedOperation_type.includes("subtraction") ||
    formatedOperation_type.includes("minus")
  ) {
    // If it contains "subtract","subtraction" or "minus" then we can subtract the values
    // sent along side the request
    operationResult = subtraction(x, y);
    operator = "subtraction";

    // Check to see operation_type(String) that was converted to array
    // has an arithmetic words("multiply" or "multiplication")
  } else if (
    formatedOperation_type.includes("multiply") ||
    formatedOperation_type.includes("multiplication")
  ) {
    // If it contains multiply or multiplication then we can multiply the values
    // sent along side the request
    operationResult = multiplication(x, y);
    operator = "multiplication";
  }

  res.status(200).send({
    slackUsername: "@godwinopara",
    result: Number(operationResult),
    operation_type: operator,
  });
};

module.exports = apiCalculator;
