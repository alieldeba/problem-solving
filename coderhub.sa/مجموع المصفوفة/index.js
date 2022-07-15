function calculate_sum(lst) {
  let result = 0;
  for (i = 0; i < lst.length; i++) {
    if (lst[i] === 7) {
      break;
    } else {
      result += lst[i];
    }
  }
  return result;
}

console.log(calculate_sum([84,469]));
