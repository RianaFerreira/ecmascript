// Maps
// Hash map object were used up until ES6
// simple string keys mapped to values


// ES6
// objects keys are limited to strings
// map keys can be any data type, function or object
const question = new Map();

// Setting values for a map
question.set('question', 'What day is it?');
question.set(1, 'Wednesday');
question.set(2, 'Monday');
question.set(3, 'Friday');
question.set('correct', 1);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, try again');
console.log(question);

// Getting the values for a map
console.log(question.get('question'));
console.log(question.size);

// Removing a key value pair from a map
if (question.has(2)) {
  // question.delete(2);
  console.log("removed key 2");
}
console.log(question);

// Remove all the map values
question.clear();
console.log(question);

// Looping over maps which you can't do with objects
question.forEach((value, key) => console.log(`This is ${key} set to ${value}`));

for (let [key, value] of question.entries()) {
  // access key and value using destructuring
  // works for arrays as well
  console.log(`This is ${key} set to ${value}`);

  // only print answers
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }

  // compare response to the accepted answers
  const ans = parseInt(prompt('Write the answer'));
  console.log(question.get(ans === question.get('correct')));
}
