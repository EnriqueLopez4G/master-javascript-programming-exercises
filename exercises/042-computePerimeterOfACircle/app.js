function computePerimeterOfACircle(radius) {
  // your code here
  let diameter = radius*2;
  return (Math.PI*diameter);
}

let output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
