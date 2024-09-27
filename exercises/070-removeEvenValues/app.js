function removeEvenValues(obj) {
    // your code here
    for (let k in obj)  {
      if ( typeof obj[k] === 'number') {
        if (obj[k] % 2 === 0) 
          delete obj[k];
      }
      

    }
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }