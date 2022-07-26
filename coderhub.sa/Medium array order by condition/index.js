function sort_array(my_array, typeParam) {
  if (typeParam == "B") {
    return my_array.sort((a, b) => b - a);
  } else {
    return my_array.sort((a, b) => a - b);
  }
}
