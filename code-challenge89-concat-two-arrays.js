// Create a function that will print a statement about animals and their young.  The function animals() should accept two array arguments of equal length, so that calling:

// animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]);

// should return this string:

// `Young dogs are called pups Young cats are called kittens Young horses are called foals `

// Example 1:

// animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]);
// --->
//  `Young dogs are called pups Young cats are called kittens Young horses are called foals `

function animals(animalArray, youngArray) {
  let finalAnswer = "";

  for (i = 0; i < animalArray.length; i++) {
    finalAnswer +=
      "Young " + animalArray[i] + "s " + "are called " + youngArray[i] + " ";
  }
  return finalAnswer;
}

console.log(animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]));

//With template literals:

function animals(animalArray, youngArray) {
  let finalAnswer = "";

  for (i = 0; i < animalArray.length; i++) {
    finalAnswer += `${animalArray[i]}s are called ${youngArray[i]}`;
  }
  return finalAnswer;
}

console.log(animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]));
