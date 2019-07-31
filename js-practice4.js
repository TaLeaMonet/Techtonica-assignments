// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzbuzz(num) {
  i = 0;
  while (i <= num) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzbuzz(20);
