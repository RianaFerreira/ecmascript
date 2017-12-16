// Blocks and IIFEs
// IIFEs are no longer need the data is already scoped to the block in ES6

// ES5
(function() {
    var c = 3;
    console.log(c);
})();
// console.log(c);  // will fail with a not defined error

// ES6
{
  // block
  const a = 1;
  let b = 2;
  var c = 3;
  console.log(c);
}
// console.log(a + b); // will fail with a not defined error
// console.log(c);     // will fail with a not defined error
