// Strings

// ES6
let firstName = 'Mojo';
let lastName = 'Jojo';
const yob = 1989;

function calcAge(year) {
  return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + ' they are ' + calcAge(yob) + ' years old.');

// ES6 uses template literals replace '' with backticks ``
console.log(`This is ${firstName} ${lastName} they are ${calcAge(yob)} years old.`)

//ES6 new string methods
const n = `${firstName} ${lastName}`
console.log(n.startsWith('M'));
console.log(n.startsWith('m'));

console.log(n.endsWith('o'));
console.log(n.endsWith('O'));

console.log(n.includes('j'));
console.log(n.includes('mo'));

console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
