// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let refinedStringA = refine(stringA)
//   let refinedStringB = refine(stringB)
//   return refinedStringA === refinedStringB
// }
//
// function refine(str) {
//   return str.replace(/[^\w]/g,"").split('').sort().join('')
// }

function anagrams(stringA, stringB) {
  const objA = objectify(stringA)
  const objB = objectify(stringB)

  arrayA = Object.getOwnPropertyNames(objA)
  arrayB = Object.getOwnPropertyNames(objB)

  if (arrayA.length !== arrayB.length) {
    return false
  }

  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false
    }
  }
  return true

}

function objectify(str) {

  const textstr = str.replace(/[^\w]/g, "")
  
  let obj = {}
  for (let chr of textstr) {
    if (!obj[chr]) {
      obj[chr] = 0
    } else {
      obj[chr] += 1
    }
  }
  return obj
}

module.exports = anagrams;
