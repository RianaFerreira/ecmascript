// Rest params
// allow you pass an arbitary number of args into a function and use them

// spread operator takes an array and transforms it into single values
// rest params accepts single values and transforms them into an array

// ES5
function isFullAge5() {
  // each execution context has access to the 'this' and 'arguments' variable
  console.log(arguments);

  // to use arguments as an array it will need to be transformed
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(cur) {
    console.log((2017 - cur) > 18);
  })
}

isFullAge5(1990, 1999, 1995, 2010, 2000);

// ES6
// function args transformed into an array when the function is called
function isFullAge6(...years) {
  console.log(years);
  years.forEach(cur => console.log((2017 - cur) >= 18));
}

isFullAge6(1979, 1981, 2000, 2011);
