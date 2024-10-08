function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let tn = (compoundingFrequency*timeInYears);
  let rentren = interestRate/compoundingFrequency;
  let preP = Math.pow( (1 + rentren),tn);
  let A = (principal*preP) - principal;
  return A
}

let output = computeCompoundInterest(1500, .043, 4, 6);
//let output = computeCompoundInterest(600,0.021,2,4);
console.log(output); // --> 438.83682213410543
