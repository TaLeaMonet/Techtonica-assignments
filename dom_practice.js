/* Write a function canIVote() that takes in a number, representing the person’s age, and returns
 * the boolean true if they are 18 years old or older, and the boolean false if they are not.
 */

const outputElement1 = document.createElement("p");
document.body.appendChild(outputElement1);

//Creates the html element within the js file.

function canIVote(age) {
  if (age >= 18) {
    return true;
  }
}
outputElement1.innerHTML = canIVote(20);

/* Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’
 * if the two strings are the same and ‘You disagree!’ if the two strings are different.
 */

const outputElement2 = document.createElement("p");
document.body.appendChild(outputElement2);

function agreeOrDisagree() {
  if ("" === "") {
    return "agree";
  } else {
    return "disagree";
  }
}

outputElement2.innerHTML = agreeOrDisagree("hello", "hello");

/* Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
 * and returns a string in the following format: ‘rank lastName reporting for duty!’
 */
//reportingForDuty('Private', 'Fido');  // Should return 'Private Fido reporting for duty!'

const outputElement3 = document.createElement("p");
document.body.appendChild(outputElement3);

function reportingForDuty(rank, lastName) {
  var string = rank + " " + lastName + " reporting for duty!";
  return string;
}

outputElement3.innerHTML = reportingForDuty("Private", "Fido");

/* Write a function, truthyOrFalsy(), that takes in any value and returns true if that value
 * is truthy and false if that value is falsy.
 */
//truthyOrFalsy(0);  // Should print false

const outputElement4 = document.createElement("p");
document.body.appendChild(outputElement4);

function truthyOrFalsy(value) {
  if (value) {
    return true;
  }
  if (!value) {
    return false;
  }
}

outputElement4.innerHTML = truthyOrFalsy(" ");

/* A person’s number of imaginary friends are always 33% of their total friends.
 * Write a function, numImaginaryFriends(), that takes in the total number of friends a person has
 * and returns the number of imaginary friends they have.
 * Since friends can only come in whole numbers, be sure to round your result before returning it.
 */
//numImaginaryFriends(18);  // Should print 6

const outputElement5 = document.createElement("p");
document.body.appendChild(outputElement5);

function numImaginaryFriends(num) {
  var percent = num * 0.33;
  var rounded = Math.round(percent);

  return rounded;
}

outputElement5.innerHTML = numImaginaryFriends(18);

/* Create a function, tipCalculator(), that has two parameters, a string representing the quality of
 * the service received and a number representing the total cost.
 * Return the tip, as a number, based on the following:
 * ‘bad’ should return a 5% tip
 * ‘ok’ should return a 15% tip
 * ‘good’ should return a 20% tip
 * ‘excellent’ should return a 30% tip
 * all other inputs should default to 18%
 */
//tipCalculator("good", 100); //should return 20

const outputElement6 = document.createElement("p");
document.body.appendChild(outputElement6);

function tipCalculator(service, cost) {
  switch (service) {
    case "bad": {
      return cost * 0.05;
      break;
    }

    case "ok": {
      return cost * 0.15;
      break;
    }

    case "good": {
      return cost * 0.2;
      break;
    }

    case "excellent": {
      return cost * 0.3;
    }

    default: {
      return cost * 0.18;
    }
  }
}

outputElement6.innerHTML = tipCalculator("excellent", 100);

// Create a HTML button and when clicked, it will execute the following function:
// reverseArray( ['sense.','make', 'all', 'will', 'This'] );
// reverseArray() takes in an array as an argument and returns a new array with the elements
// in the reverse order.  Do not use built-in method for this exercise.

var btn = document.createElement("button"); // Create a <button> element
btn.innerHTML = "Hello, I am a button!"; // Insert text
document.body.appendChild(btn);
btn.addEventListener("click", function(event) {
  alert(reverseArray(["sense!", "make", "all", "will", "This"]));
});

function reverseArray(array) {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray.join(" ");
}

//document.getElementByElement("button").innerText = reverseArray();
