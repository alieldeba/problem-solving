function accum(s) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < s.length; i++) {
    let char = 0;
    for (let j = 0; j < counter; j++) {
      char++;
      if (char === 1) {
        // First letter in letters loop
        result.push(s[i].toUpperCase());
      } else {
        result.push(s[i].toLowerCase());
      }
    }
    // Starting the next letters section
    counter++;
    result.push("-");
  }

  // Removing the "-" from the end of our result
  result.pop();

  return result.join("");
}
