// Write a function that takes a word and returns true if the word ends with tonica

function containsTonica(input_string) {
  if (input_string.match(/tonica/)) {
    return true;
  } else {
    return false;
  }
}

console.log(containsTonica("Techtonica"));
console.log(containsTonica("sonic"));

// Write a function expression that takes a string replaces all instances of symantec with semantic?

function replaceSymantec(input_string) {
  var sym = "symantec";
  var sem = "semantic";

  if (input_string.match(/sym/)) {
    var newString = input_string.replace(sym, sem);
  }

  return newString;
}

console.log(replaceSymantec("This function replaces symantec."));

// Write a function that takes a string and deletes all words that end in ing?
// Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
// Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
