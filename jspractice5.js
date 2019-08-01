// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

// For example, the value of 3 factorial, is 6, which can be calculated by:

// 3 * 2 * 1
// The value of 10 factorial, for example, can be calculated by:

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

//recursive function will evaluates the input, and based on the condition, calls itself with a modified input

//gets input from called function, and function decides does the input fall into recursive statement, does something, then calls again, until it can't do it anymore, then will exit function.

function calculateFactorial(x) {
  if (x === -1) {
    return 1;
  }

  return x * calculateFactorial(x - 1);
}

console.log(calculateFactorial(10));
