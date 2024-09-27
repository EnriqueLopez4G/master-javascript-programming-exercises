function removeOddValues(obj) {
    // your code here
  for (let k in obj) 
    if (typeof obj[k]==='number' && obj[k] %2 !==0) delete obj[k];
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
