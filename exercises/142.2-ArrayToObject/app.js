function fromListToObject(array) {
  // your code here
  let newObj = {};
  for (let ea1 of array) {
      newObj[ea1[0]]= ea1[1];
  }
  return newObj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
