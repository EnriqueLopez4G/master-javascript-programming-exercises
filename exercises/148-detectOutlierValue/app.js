function detectOutlierValue(string) {
    // your code here
      let numbers = [];
   let na ='';

    for (let c of string) {
        if (c !==' ') {
            na +=c;
        } else if (na) {
            numbers.push(Number(na));
            na ='';
        }
    }
    if (na) numbers.push(Number(na));

    console.log("Numbers...",numbers)
    let statusNumbers =[];

  // Contar cuántos son pares e impares
  let oddCount = 0;
  let evenCount = 0;
  let lastOddIndex = -1;
  let lastEvenIndex = -1;

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          evenCount++;
          lastEvenIndex = i;
      } else {
          oddCount++;
          lastOddIndex = i;
      }
  }
   console.log("lastEvenIndex:",lastEvenIndex)
   console.log("lastOddIndex:",lastOddIndex)
   console.log("StatusNumbers: ",statusNumbers);
   return (oddCount === 1 ? lastOddIndex : lastEvenIndex)+1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 
//console.log(detectOutlierValue("1 2 8 4")); // --> 3 


// Second number is even, while the rest of the numbers are odd
//console.log(detectOutlierValue("1 10 1 1"))  // --> 2
