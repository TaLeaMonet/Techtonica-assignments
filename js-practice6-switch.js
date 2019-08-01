// // Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

function sleep_in(weekday, vacation) {
  switch (true) {
    case weekday !== true || vacation === true:
      console.log("True");
      break;
    default:
      console.log("False");
  }
}

sleep_in(false, false);
sleep_in(true, false);
sleep_in(false, true);
