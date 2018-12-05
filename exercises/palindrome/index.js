// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   if (str === str.split('').reverse().join('')){
//     return true
//   }
//   return false
// }


// function palindrome(str) {
//
//   if (str === str.split('').reduce((rev, char) => char + rev ,'')) {
//       return true
//   }
//   return false
// }
/*
[1,2,3,4,5] ======> array.length = 5, last element index 4
[1,2,3,4]
*/
function palindrome(str) {
  return str.split('').every((char,i) => {
     return char === str[str.length - i - 1]
  })
}



module.exports = palindrome;
