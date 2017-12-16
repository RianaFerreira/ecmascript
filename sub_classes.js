// Subclasses
// Inheritance between classes
// allow Athlete class inherit from Person class

// ES5
// Super class
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

var Athlete5 = function(name, yob, job, olympicGames, medals) {
  // when creating a new athlete object
  // new returns an empty object, calls the athlete function constructor,
  // set the this keyword to the empty object
  Person5.call(this, name, yob, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

// create the correct prototype chain by
// connecting two function constructors
// Object.create() allow you to manually set the prototype of an object
Athlete5.prototype = Object.create(Person5.prototype);

// methods must be defined after the sub class is linked to the super class
Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}

var mojoAthlete = new Athlete5('Mojo', 1981, 'swimmer', 3, 10);
mojoAthlete.calcAge();
mojoAthlete.wonMedal();

// ES6
class Person6 {
  // every class declaration must have a constructor
  constructor (name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
  }

  calcAge() {
    let age = new Date().getFullYear() - this.yob;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yob, job, olympicGames, medals) {
    super(name, yob, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

let fuzzyAthlete = new Athlete6('Fuzzy', 1979, 'swimmer', 5, 4);
fuzzyAthlete.wonMedal();
fuzzyAthlete.calcAge();
