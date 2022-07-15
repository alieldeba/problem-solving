function similarOrdered(word1, word2) {
  let similar = [];
  let looping = [];

  let splitWord1 = word1.split("").sort();
  let uniqeWord1 = [...new Set(splitWord1)];

  let splitWord2 = word2.split("").sort();
  let uniqeWord2 = [...new Set(splitWord2)];

  for (i = 0; i < uniqeWord1.length; i++) {
    for (j = i; j < uniqeWord2.length; j++) {
      // [[a,b,c,d,w,x], [c,d,e,f,w,x]],
      if (uniqeWord1[i] == uniqeWord2[j]) {
        looping.push(uniqeWord1[i]);
        break;
      } else {
        break;
      }
    }
    if (uniqeWord1[i] == uniqeWord1[uniqeWord1.length - 1]) {
      if (looping.length > similar.length) {
        similar = looping;
        looping = [];
      } else {
        looping = [];
      }
    }
  }

  if (similar.length === 0) similar.push("No matches found");

  return similar.join("");
}

console.log(similarOrdered("abcdwx", "cdefwx"));
