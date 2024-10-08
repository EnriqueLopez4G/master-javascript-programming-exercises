function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce( (ac,va)=> {
    return ac+=va
  });
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
