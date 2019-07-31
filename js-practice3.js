//Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.

function caluculateSum(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

caluculateSum(7);
