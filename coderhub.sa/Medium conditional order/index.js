function namesSort(namesArray, order) {
  if (order == "ASC") {
    return namesArray.sort();
  } else {
    return namesArray.sort().reverse();
  }
}
