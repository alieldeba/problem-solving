function find_element(elements_array, element) {
  for (let number of elements_array) {
    if (number == element) return true;
  }
  return false;
}

