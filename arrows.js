// Arrow Functions

// ES6
const years = [1981, 2000, 1945, 1979, 2011];


// ES5
var ages5 = years.map(function(el){
  return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index +1}: ${2017 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  // multiple lines of code
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
