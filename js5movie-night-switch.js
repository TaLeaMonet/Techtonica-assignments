function movieNight(names) {
  var attendingList = [];

  switch (names.includes("David")) {
    case true:
      attendingList.push("David");
  }

  switch (names.includes("Alex") && attendingList.includes("David")) {
    case true:
      attendingList.push("Alex");
  }

  switch (
    names.includes("Ming") &&
      names.includes("Priya") &&
      attendingList.includes("David") === false
  ) {
    case true:
      attendingList.push("Ming");
  }

  switch (names.includes("Priya") && attendingList.includes("Ming")) {
    case true:
      attendingList.push("Priya");
  }

  switch (names.includes("Breanna") && attendingList.length >= 2) {
    case true:
      attendingList.push("Breanna");
  }

  console.log(attendingList);
}

movieNight(["David", "Alex", "Ming", "Priya", "Breanna"]);
