// variable declarations

// ES5
// var is function scoped
var name5 = 'Mojo Jojo';
var age5 = 23;
name5 = 'Jojo Mojo';
console.log(name5);

function driversLicence5(passedTest) {
  if (passedTest) {
    console.log('Hosting? ' + firstName); // hoisting assigns value of undefined before the code is executed
    var firstName = 'Mojo';
    var yob = 1979;

    // console.log(firstName + ' born in ' + yob);
  }
  // function scoped
  console.log(firstName + ' born in ' + yob);
}

driversLicence5(true);

var i5 = 23;

for(var i5 = 0; i5 < 5; i5++) {
  console.log(i5);  // changes with every iteration
}

console.log(i5); // set to final value set in the for loop - function scoped

// ES6
// const - values that don't change
// let - values that mutate; block scope; data privacy
const name6 = 'Fuzzy Lumpkin';
let age6 = 23;
// name6 = 'Lumpkin Fuzzy'; // assignment to constant variable error
age6 = 30;
console.log(name6);


function driversLicence6(passedTest) {
  if (passedTest) {
    // block scope
    // variables are still hoisted but can't be accessed before being declared
    // console.log('Hosting? ' + firstName);  // temporal deadzone
    let firstName = 'Mojo';
    const yob = 1979;

    console.log(firstName + ' born in ' + yob);
  }
  // block scoped raises Uncaught ReferenceError: firstName is not defined
  // console.log(firstName + ' born in ' + yob);
}

driversLicence6(true);

let i6 = 23;

for(let i6 = 0; i6 < 5; i6++) {
  console.log(i6); // changes with every iteration
}

console.log(i6); // still set to 23 - block scoped
