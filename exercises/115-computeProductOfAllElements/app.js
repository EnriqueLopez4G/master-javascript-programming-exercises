function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length<=0) return 0;
  let product = arr.reduce( (ac,va)=> {
    return ac*va;
  })
  return product;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
