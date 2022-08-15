/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arrayS = s.split("");
  let arrayT = t.split("");

  if (arrayS.length !== arrayT.length) return false;

  for (let i = 0; i < arrayT.length; i++) {
    if (arrayS.includes(arrayT[i])) {
      arrayS.splice(arrayS.indexOf(arrayT[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};
