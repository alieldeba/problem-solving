function find_prefix(words, text) {
  let result = [];
  for (let word of words) {
    if (word.toLowerCase().startsWith(text.toLowerCase())) result.push(word);
  }
  if (result.length === 0) result.push("No matches found");
  return result;
}
