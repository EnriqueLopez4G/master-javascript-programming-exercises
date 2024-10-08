function squareElements(arr) {
  // your code here
  const sq = arr.map((e) => {
    return Math.pow(e,2);
  });
  return sq;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
