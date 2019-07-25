let myPets = [ ];

function printCuteAnimals(){
  var pet1 = "dogs";
  var pet2 = "cats";

  myPets = [pet1, pet2];
  let cuteAnimals = myPets.concat(myPets.length);

  var pet3 = "turtle";
  var pet4 = "lizard";
  myNewPets = [pet3, pet4];

  let newCuteAnimals = myPets.concat(myNewPets);


  return newCuteAnimals.concat(newCuteAnimals.length)

}

console.log(printCuteAnimals());