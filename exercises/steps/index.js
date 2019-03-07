// --- Directions Write a function that accepts a positive number N. The
// function should console log a step shape with N levels using the # character.
//  Make sure the step has spaces on the right hand side! --- Examples steps(2)
//      '# '       '##'   steps(3)       '#  '       '## '       '###'
// steps(4)       '#   '       '##  '       '### '       '####'


function steps(n, row=0, stair = '') {
  if(n === row){
    return;
  } 
  if(n === stair.length){
    console.log(stair)
    return steps(n, row+1)
  }
  if(stair.length <= row){
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}


// for(let r=0;r<n;r++){
//   let stair = '';
//   for(let c=0;c<n;c++){
//     if(c<=r){
//       stair += '#'
//     } else {
//       stair += ' '
//     }
//   }
//   console.log(stair);
// }
module.exports = steps;
