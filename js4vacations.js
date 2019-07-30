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
