function findPairForSum(array, number) {
  // your code here
  for (let i1=0; i1< array.length-1;i1++) 
    for (let i2= i1+1; i2 < array.length; i2++) {
    let n1 = array[i1];
    let n2 = array[i2];
    console.log("n1:", n1,"  n2:",n2)
      let posiblePar = n1+n2;
      if ( posiblePar === number) 
        return [...[n1,n2] ];
  }
     
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
