function countSmileys(arr) {
  let smiles = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i].length === 3 || arr[i].length === 2) &&
      (arr[i].includes(":") || arr[i].includes(";"))
    ) {
      if (arr[i].includes(")") || arr[i].includes("D")) {
        if (arr[i].includes("-") || arr[i].includes("~")) {
          smiles++;
        } else if (arr[i].length > 2) {
          continue;
        } else {
          smiles++;
        }
      }
    }
  }
  return smiles;
}
