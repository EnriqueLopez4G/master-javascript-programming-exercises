function listAllValues(obj) {
  // your code here
  let arr = [];
  for (let k in obj) {
    arr.push(obj[k])
  }
  return arr
  
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
