function computeSummationToN(n) {
  // your code here
  let suma =0;

  for (let i=1; i <=n; i++) {
    suma+=i;
  }
  return suma;
  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

