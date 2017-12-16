// The spread operator
// expand elements of an array in args and function calls

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 54);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 32];
// bind, call and apply methods
// apply receives array and calls the addFourAges with the elements of the array as the function args
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
// expand array into it's components
const sum3 = addFourAges(...ages);
console.log(sum3);

const familyPowerPuff = ['Bubbles', 'Blossom', 'Buttercup'];
const familyMiller = ['Mojo', 'Johnny', 'Fuzzy'];
const bigFamily = [...familyPowerPuff, ...familyMiller];
console.log(bigFamily);

const anotherFamily = [...familyPowerPuff, 'Riana', ...familyMiller];
console.log(anotherFamily);

// node list example
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color =  'purple');
