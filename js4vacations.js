// Activity 1 - Vacation Time!

// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

function printVacations(vacayArray) {
  let finalVacayList = "";
  for (i = 0; i < vacayArray.length; i++) {
    finalVacayList += `${vacayArray[i][0]} really wants to go to ${
      vacayArray[i][1]
    }.`;
  }

  return finalVacayList;
}
vacayList = [
  ["Tammy", "Tahiti"],
  [" Erin", "Banff, Alberta, Canada"],
  [" Janet", "London"]
];

console.log(printVacations(vacayList));

// Activity 2 - Vacation Choices

// Follow the prompt for Activity #1, but use this format for the input array instead:

// [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

function printVacations2(vacayArray2) {
  let finalVacayList2 = "";
  for (i = 0; i < vacayArray2.length; i++) {
    var insertion = vacayArray2[i][1][vacayArray2[i][1].length - 1];
    finalVacayList2 += `${vacayArray2[i][0]} is willing to go to ${vacayArray2[
      i
    ][1].slice(0, -1)} or ${insertion}.`;
  }

  return finalVacayList2;
}

vacayList2 = [
  ["Tammy", ["Tahiti", " Bali", "Hawaii"]],
  [" Erin", ["Banff, Alberta, Canada", "Iceland"]],
  [" Janet", ["London", "Hogwarts"]]
];

console.log(printVacations2(vacayList2));
