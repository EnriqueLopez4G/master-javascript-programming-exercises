function getAllKeys(obj) {
  // your code here
  let arr = [];
  for (let k in obj) {
    arr.push(k)
  }
  return arr
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
