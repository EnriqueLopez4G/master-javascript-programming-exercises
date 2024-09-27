function computePower(num, exponent) {
  // your code here
  let myPow =1;
  for (let i=0;i<exponent;i++) {
    console.log(myPow)
    myPow *=num;
    
  }
  return myPow
}

let output = computePower(2, 3);
console.log(output); // --> 8
