function average(arr) {
  // your code here
  return (sum(arr)/arr.length);
}

function sum(arr) {
  // your code here
  return (arr.reduce( (ac,va)=> {
    return ac+va
  }))
  
}

console.log(average([1, 2])); // --> 1.5
