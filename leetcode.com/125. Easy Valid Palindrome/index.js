/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return (
    s.replace(/[^0-9a-z]/gi, "").toLowerCase() ===
    s
      .replace(/[^0-9a-z]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
};
