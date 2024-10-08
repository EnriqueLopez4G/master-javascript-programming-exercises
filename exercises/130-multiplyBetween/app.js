function multiplyBetween(num1, num2) {
    // your code here
    if (num2<=num1) return 0;
    let mul = 1;
    for (let n = num1; n<num2; n++) {
        mul*=n;
    }   
    return mul;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
