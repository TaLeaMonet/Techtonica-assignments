/*Ex. 1 A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.*/

function compareTwoNumbers(num1, num2) {
    if (num1>num2){
    return true;
    }
    else {
    return false;
    }
}

compareTwoNumbers(3, 5);

//Ex. 2 A function that takes in an array of numbers, and returns the third number in the array.

function thirdInArray(numArray) {
    return numArray.index(2);
}

thirdInArray([1, 2, 4, 9,]);

/*Ex. 3 A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).*/
function targetInBetween(min, max, target){
    if (target>min && target<max){
        return true;
    }

    else {
        return false;
    }
}

targetInBetween(1, 10, 9);


//Ex. 4 A function that takes in a number, and prints the word "Hello" that many times.
function echoHello(number){
  for (i=1; i<=number; i++){
    var string = "Hello";
    console.log(string);
  }
}

echoHello(9);

//Alternate solution

function repMessage(mess, rep){
    return mess.repeat(rep);
}

repMessage("Hello", 10);

