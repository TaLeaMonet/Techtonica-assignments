function printVacations(Tammy, Erin, Janet) {
  var vacayArray = Array.prototype.join.call(arguments);
  console.log(vacayArray);
}
printVacations(
  ["Tammy", " Tahiti"],
  [" Erin", " Banff, Alberta, Canada"],
  [" Janet", " London"]
);
