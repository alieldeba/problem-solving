function compare_two_words(s1, s2) {
  return (
    s1[s1.length - 1] === s2[s2.length - 1] &&
    s1[s1.length - 2] === s2[s2.length - 2]
  );
}
