function computeSumBetween(num1, num2) {
    // your code here
    console.log(num1)
    let sum = 0;
    for (let n = num1; n<num2; n++) {
        console.log(n)
        sum+=n;
    }   
    return sum;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
