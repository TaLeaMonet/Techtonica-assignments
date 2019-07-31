// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// Results
// sleep_in(False, False) → True

// sleep_in(True, False) → False

// sleep_in(False, True) → True

let vacation;
let weekday;

if (weekday === Boolean && vacation === Boolean) {
  function sleepIn(weekday, vacation) {
    switch (weekday) {
      case true:
        console.log("False");
        break;

      case false:
        console.log("True");
    }
  }
}

console.log(sleepIn(false, false));

///
// var weekday;
// var vacation;

// function sleep_in(weekday, vacation){

//     var weekendVacation = "";

//     switch(sleep_in(false, fasle)){

//         case Boolean: false, false;
//             weekendVacation.push("True");

//     }
// console.log(weekendVacation);
// }

// sleep_in(false, false);
