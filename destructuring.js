// Destructuring
// convenient way to extract data from a data structure like an object or an array

// ES5
var fuzzy = ['Fuzzy', 38];
var name = 'Fuzzy'
var age = fuzzy[1];

// ES6
const [name6, age6] = ['Fuzzy', 38];
console.log(name6);
console.log(age6);

const obj = {
  firstName: 'Fuzzy',
  lastName: 'Lumpkin'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
