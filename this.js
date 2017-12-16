// The 'this' keyword
// arrow functions use the 'this' keyword of the function they are written in
// arrows have a lexical this variable

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // in the function call this refers to the Global object
    // in the context of the browser this is the window
    // document.querySelector('.green').addEventListener('click', function() {
    //   var str = 'This is box number ' + this.position + ' it is ' + this.color;
    //   alert(str);
    // });

    // work around to set self to represent the object's this context
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' it is ' + self.color;
      alert(str);
    });
  }
}

box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    // arrow function uses the lexical keyword of it's surroundings
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This is box ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
}

box6.clickMe();


// ES5 function constructor
function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  // this keyword points to the constructor instance
  // var arr = friends.map(function(el) {
  //   // this keyword points to the Global context
  //   return this.name + ' is friends with ' + el;
  // })

  // work around to pass the constructor instance this object into the
  // a copy of the nested function
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Karlene', 'Carla'];
new Person('Mojo').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  // lexical this keyword is shared with the parent function
  let arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

new Person('Fuzzy').myFriends6(friends);
