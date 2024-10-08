function joinArrayOfArrays(arr) {
  // your code here
  let vector =[];
  for (let ea1 of arr) {
    for (let ea2 of ea1) {
      vector.push(ea2);
    }
  }
  return vector;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
