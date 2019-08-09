function matchString(stringSet) {
  let x = [];

  function getLetter(string) {
    x = string.slice(0, 1);
    return x;
  }

  getLetter("anchor");

  for (let i = 0; i <= stringSet.length; i++) {
    if (x.match(stringSet[i])) {
      return x.toUpperCase();
    }
  }
}

console.log(matchString(["a", "b", "c", "d", "e"]));
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
