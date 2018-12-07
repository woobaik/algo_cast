// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, line = '') {
  if (row === n) {
    return;
  }

  if (line.length === 2 * n - 1) {
    console.log(line);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor( (2 * n - 1) / 2)
  let add;

  if (mid - row <= line.length && mid + row >= line.legnth) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, line + add);





  // pyramid(n, row + 1)
}

module.exports = pyramid;


// function pyramid(n) {
//   const size = 2 * n - 1
//   const mid = Math.floor(size / 2)
//
//   for (let row = 0; row < n ; row++) {
//     let level = ''
//
//     for ( let col = 0; col < size; col++) {
//       if ( mid - row <= col && mid + row >= col) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }
