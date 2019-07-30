// Write a function that deletes the cohortNumber property from the following object. Also print the object after deleting the property.

// Sample object:

// let Techtonica = {
// studentName : "Your Name",
// favoriteLanguage : "Your favorite language",
// cohortNumber : 3 };

// Example:
//  sampleObject() → {
// studentName : "Your Name",
// favoriteLanguage : "Your favorite language",
// };

let Techtonica = {
  studentName: "Shauna",
  favoriteLanguage: "JavaScript",
  cohortNumber: 3
};

function sampleObject() {
  delete Techtonica.cohortNumber;
  return Techtonica;
}

console.log(sampleObject());
