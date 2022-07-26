function addStrNums(num1, num2) {
  return isNaN(num1) || isNaN(num2) ? -1 : (+num1 + +num2).toString();
}
