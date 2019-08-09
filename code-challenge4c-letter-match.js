function matchString(stringSet1, stringSet2, stringSet3, stringSet4) {
  let x = [];

  function getLetter(string) {
    x = string.slice(0, 1);
    return x;
  }

  getLetter("anchor");
  getLetter("quail");

  switch (matchString) {
    case stringSet1:
      for (let i = 0; i <= stringSet1.length; i++) {
        if (x.match(stringSet1[i])) {
          return "A";
        }
      }
      break;

    case stringSet2:
      for (let i = 0; i <= stringSet2.length; i++) {
        if (x.match(stringSet2[i])) {
          return "B";
        }
      }
      break;

    case stringSet3:
      for (let i = 0; i <= stringSet3.length; i++) {
        if (x.match(stringSet3[i])) {
          return "C";
        }
      }
      break;

    case stringSet4:
      for (let i = 0; i <= stringSet4.length; i++) {
        if (x.match(stringSet4[i])) {
          return "C";
        }
      }
      break;
  }
}

console.log(
  matchString(
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "j", "k"],
    ["l", "m", "n", "o", "p", "q"],
    ["r", "s", "t", "u", "v", "w", "x", "y", "z"]
  )
);

/*
FIRST SOLUTION TO TEST FOR RETURNING 1ST LETTER IN CAPS WITH ONE STRINGSET:

function getLetter(string) {
  let x = [];
  x = string.slice(0, 1);

  let stringSet = ["a", "b", "c", "d", "e"];

  for (let i = 0; i <= stringSet.length; i++) {
    if (x.match(stringSet[i])) {
      return x.toUpperCase();
    }
  }
}

getLetter("anchor");
*/
