function towerBuilder(nFloors) {
    let result = [];
    let spaces = nFloors - 1;
    let counter = 1;
    for (let i = 0; i < nFloors; i++) {
      if (i === 0) {
        result.push(`${" ".repeat(spaces)}${"*".repeat(counter)}${" ".repeat(spaces)}`);
      } else {
        result.push(`${" ".repeat(spaces)}${"*".repeat(counter)}${" ".repeat(spaces)}`);
      }
      spaces--;
      counter += 2
    }
    return result;
  }