function unique(arr) {
  let uniqueNumbers = [];
  let freqNumber = [];
  for (let i of arr) {
    if (uniqueNumbers.includes(i)) {
      freqNumber.push(i);
    } else {
      uniqueNumbers.push(i);
    }
  }
  freqNumber = [...new Set(freqNumber)];
  for (let j of freqNumber) {
    uniqueNumbers.splice(uniqueNumbers.indexOf(j), 1);
  }
  return uniqueNumbers;
}

console.log(unique([2, 3, 2, 6, 2]));
