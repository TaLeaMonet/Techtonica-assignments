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
