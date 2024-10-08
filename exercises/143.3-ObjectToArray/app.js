function convertObjectToList(obj) {
  // your code here
  let arrayOfArrays=[];
  for (let k in obj) {
    let a = [];
    a.push(k)
    a.push(obj[k]);
    arrayOfArrays.push(a);
  }
  return arrayOfArrays;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
