//Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.

function calculateSum(num) {
  for (i = 0; i <= num; i++) {
    var sum = i + num;
    i++;
  }
  console.log(sum);
}

calculateSum(7);
