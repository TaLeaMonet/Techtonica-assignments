function calculate(num1, operator, num2) {
  var equation = "";

  switch (operator) {
    case "*":
      equation = num1 * num2;
      break;

    case "+":
      equation = num1 + num2;
      break;

    case "-":
      equation = num1 - num2;
      break;

    case "/":
      equation = num1 / num2;
      break;

    default:
      equation = "Please insert an operator.";
  }

  return equation;
}

console.log(calculate(5, "*", 5));
