function first_n_vowels(phrase, n) {
  let numberOfChars = n;
  let result = [];
  for (let char of phrase) {
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "u" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "e"
    ) {
      result.push(char);
      numberOfChars -= 1;
    }
  }
  if (numberOfChars > 0) {
    return "invalid";
  } else {
    result.length = n;
    return result.join("");
  }
}

console.log(first_n_vowels('aAe', 2));
