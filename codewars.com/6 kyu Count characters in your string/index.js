function count(string) {
  let obj = {};
  for (i of string) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}
