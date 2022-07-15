function str_len_comparison(words) {
  if (words.length <= 1) return false;
  let len = 0;
  for (let word of words) {
    if (word === words[0]) {
      len = word.length;
    } else {
      if (word.length !== len) return false;
    }
  }
  return true;
}

console.log(str_len_comparison([]));
