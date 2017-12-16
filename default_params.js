// Default params
// allow you define a default argument value for a function

// spread operator takes an array and transforms it into single values
// rest params accepts single values and transforms them into an array

// ES5
function isFullAge5(limit) {
  // each execution context has access to the 'this' and 'arguments' variable
  console.log(arguments);

  // to use arguments as an array it will need to be transformed
  // the first value of the arguments will be the limit
  // slice the remaining argument values to the years
  var argsArr = Array.prototype.slice.call(arguments, 1);

  console.log(argsArr);
  console.log(limit);

  argsArr.forEach(function(cur) {
    console.log((2017 - cur) > limit);
  })
}

isFullAge5(21, 1990, 1999, 1995, 2010, 2000);

// ES6
// function args transformed into an array when the function is called
function isFullAge6(limit, ...years) {
  console.log(limit);
  console.log(years);
  years.forEach(cur => console.log((2017 - cur) >= limit));
}

isFullAge6(21, 1979, 1981, 2000, 2011);

// Function constructor
function SmithPerson(firstName, yob, lastName) {
  lastName == undefined ? lastName = 'Smith' : lastName = lastName;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yob = yob;
}

// not all the args need to be provided when the function is called
// JS assigns their value as undefined
var mojo = new SmithPerson('Mojo', 1979);
console.log(mojo);

// overwrite property value
var fuzzy = new SmithPerson('Fuzzy', 1981, 'Lumpkin')
console.log(fuzzy);

// ES6
function PuffPerson(firstName, lastName, yob = 2000) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yob = yob;
}

let bubbles = new PuffPerson('Bubbles', 'Puff');
console.log(bubbles);
