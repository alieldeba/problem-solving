function countdown(num) {
  let decrease = [];
  let even = [];
  if (num <= 3) {
    return [0];
  }
  for (i = num - 3; i > 0; i -= 3) {
    decrease.push(i);
  }
  for (j = 0; j < decrease.length; j++) {
    if (decrease[j] % 2 === 0) {
      even.push(decrease[j]);
    }
  }
  if (!even) {
    return 0;
  } else {
    return even.reverse();
  }
}
