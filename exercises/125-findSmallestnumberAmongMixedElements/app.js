function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let an = arr.filter( (e) => typeof e==='number');
  if (an.length <=0) return 0;
  return (Math.min(...an));
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
