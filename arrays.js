// Arrays

//querySelectorAll does not return an array, it returns a node list
const boxes = document.querySelectorAll('.box');

// ES5 transform node list into array
// var boxesArr5 = Array.prototype.slice.call(boxes);
//
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });

// ES6 transform node list into array
var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// Loops
// You can't use continue or break statements in forEach or map

// ES5
// for(var i = 0; i < boxesArr5.length; i++) {
//   if(boxesArr5[i].className === 'boxblue') {
//     // skip iteration and go to next array element
//     continue;
//   }
//
//   boxesArr5[i].textContent = 'I changed to blue!';
// }

// ES6
for (const cur of boxesArr6) {
  // if (cur.className === 'boxblue') {
  //   continue;
  // }

  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue!';
}

// Find elements in an array
// previous you could use indexOf
// ES 5
var ages = [12, 18, 21, 15, 11];

var fullAge = ages.map(function(cur){
  return cur >= 18;
});

console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6
// pass a callback function into findIndex
// it will return the index of the array element that returns true
// cur >= 18 is the callback function
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
