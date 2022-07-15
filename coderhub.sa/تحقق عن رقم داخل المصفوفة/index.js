function find_element(elements_array, element) {
  for (let number of elements_array) {
    if (number == element) return true;
  }
  return false;
}

console.log(find_element([2, 12, 34, 2, 3, 4, 5], 4));
