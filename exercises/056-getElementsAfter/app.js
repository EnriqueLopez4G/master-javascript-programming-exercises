function getElementsAfter(array, n) {
  // your code here
  let na = array.slice(n+1,array.length);
  return na
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
