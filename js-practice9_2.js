// Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

// Create a function that accepts the array of objects as an argument.

// Print the value of the second key in each object to the console. Use dot-notation to access the values.

// After printing the values in step 3, change the values of the second key in every object to something new.

// Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.

//Using dot notation:
function printObjectKeys() {
  var arrayObjects = {
    fruits: ["avocado", "cherries", "raspberries"],
    vegetables: ["asparagus", "cauliflower", "broccoli"]
  };

  console.log(arrayObjects.fruits[1], arrayObjects.vegetables[1]);

  arrayObjects.fruits.splice(1, 1, "strawberries");

  console.log(arrayObjects.fruits);
}

printObjectKeys();

//Using bracket notation:

function printObjectKeys() {
  var arrayObjects = {
    fruits: ["avocado", "cherries", "raspberries"],
    vegetables: ["asparagus", "cauliflower", "broccoli"]
  };

  console.log(arrayObjects[fruits][1], arrayObjects[vegetables][1]);

  arrayObjects[vegetables].splice(1, 1, "kale");

  console.log(arrayObjects[vegetables]);
}

printObjectKeys();
