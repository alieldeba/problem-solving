function cap_space(txt) {
  let text = txt.split("");
  let result = [];
  for (i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result.push(" ");
      result.push(text[i].toLowerCase());
    } else {
      result.push(text[i]);
    }
  }
  return result.join("");
}
