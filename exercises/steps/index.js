// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let progressArray = spaceGenerator(n).split('')
//   for (let i = 0; i < n; i++) {
//     progressArray[i] = '#'
//     console.log(progressArray.join(''));
//   }
//
// }
//
// function spaceGenerator(n) {
//
//   let space = '';
//
//   for (let i = 0; i < n; i++) {
//     space += ' '
//   }
//   return space
// }


function steps(n) {
  for (let row = 0; row < n; row++) {
    let line = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        line += '#'
      } else {
        line += ' '
      }

    }
    console.log(line);
  }

}




module.exports = steps;
