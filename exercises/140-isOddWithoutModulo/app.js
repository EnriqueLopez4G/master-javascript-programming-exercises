function isOddWithoutModulo(num) {
    // your code here
 let cociente = Math.floor(num/2); 
 let num2 = cociente *2;
 if (num2-num !==0) return true;

 return false;

}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
