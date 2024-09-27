function getElementsUpTo(array, n) {
  // your code here
  let na = array.slice(0,n);
  return na
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
