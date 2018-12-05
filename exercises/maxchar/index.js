// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0
  let maxChar = ''
  let result = {};
  for ( let char of str) {
    if (!result[char]) {
      result[char] = 1
    } else {
      result[char] += 1
    }
  }

  for ( let char in result ) {
    if ( result[char] > max ) {
      max = result[char];
      maxChar = char;
    }
  }
  return maxChar
}

module.exports = maxChar;
