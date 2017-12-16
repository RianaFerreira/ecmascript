// Classes and subclasses
// syntactic sugar for the way inheritance is handled in JS
// ES5 function constructor written as a function expression
var Person5 = function(name, yob, job) {
  this.name = name;
  this.yob = yob;
  this.job = job;
};

// add function that is inherited by all instances of the constructor
Person5.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.yob;
  console.log(age);
};

var mojo = new Person5('Mojo', 1979, 'Proffessor');

// ES6
// class definitions are not hoisted
// they need to be defined and only then can they be used
// you can only add methods to classes not properties
// best practice is not to allow class instances to inherit properties
 class Person6 {
   // every class declaration must have a constructor
   constructor (name, yob, job) {
     this.name = name;
     this.yob = yob;
     this.job = job;
   }

   calcAge() {
     let age = new Date().getFullYear() = this.yob;
     console.log(age);
   }

   static greeting() {
     // static methods are attached to the class
     // not inherited by the class instances
     console.log('Hey there!');
   }
 }

let fuzzy = new Person6('Fuzzy', 1981, 'Farmer');
Person6.greeting();
