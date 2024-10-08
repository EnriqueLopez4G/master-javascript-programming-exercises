function getLargestElement(arr) {
  // your code here
  return ( (arr.length<=0) ? 0: (Math.max(...arr)) );
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;