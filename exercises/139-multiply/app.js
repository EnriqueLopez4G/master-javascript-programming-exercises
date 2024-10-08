function multiply(num1, num2) {
    // your code here
    let m=0;
    for (let i=0; i<Math.abs(num1); i++) {
        m+=Math.abs(num2);
    }
    let output=m.toString();
    if (m!==0) {
        if (num1 < 0 && num2 >= 0) {
            let s = '-'+output;
            m = parseInt(s)
        }
        if (num2 < 0 && num1>= 0) {
            let s = '-'+output;
            m = parseInt(s);
        }
    }
    
    return m;
}

let output = multiply(4, 7);

console.log(output); // --> 28
