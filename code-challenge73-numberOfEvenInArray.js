// Code Challenge #73, July 31st
//Return the number of even integers in the given array.

// Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// count_evens([2, 1, 2, 3, 4]) → 3
// count_evens([2, 2, 0]) → 3
// count_evens([1, 3, 5]) → 0

function count_evens(int_array) {
  var valueIndex = [];

  for (i = 0; i < int_array.length; i++) {
    if (int_array[i] % 2 === 0) {
      valueIndex.push(int_array[i]);
    }
  }
  return valueIndex.length;
}

count_evens([2, 1, 2, 3, 4]);

//////////////////////////////////////////
//Solution with comments:

function count_evens(int_array) {
  var valueIndex = []; //declare empty var for even numbers returned from loop

  for (i = 0; i < int_array.length; i++) {
    //for loop to run through the length of the array
    if (int_array[i] % 2 === 0) {
      //if statement to test whether numbers in array are even
      valueIndex.push(int_array[i]); //if they are, push the numbers to var valueIndex to create a new array
    }
  }
  return valueIndex.length; //return the length of the array to get the total number of even numbers in int_array
}

count_evens([2, 1, 2, 3, 4]); //input for var int_array

//Previous attempts:

// function count_evens(int_array) {
//   i = 0;
//   while (i <= int_array.length - 1)
//     if (int_array[i] % 2 === 0) {
//       return int_array[i];
//     }
//   i++;
// }
// console.log(count_evens([2, 1, 2, 3, 4]));

////////////////////////////////////////////////////

// function count_evens(int_array){

//     let iterable = int_array;

//     for (let i of iterable) {
//       if(i%2 === 0){
//       return i;
//       }
//     }

// }
// count_evens([2, 1, 2, 3, 4]);
