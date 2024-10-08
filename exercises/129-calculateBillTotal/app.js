function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tx = preTaxAndTipAmount*9.5/100;
    let tips = preTaxAndTipAmount*15/100;
    return (preTaxAndTipAmount+tx+tips);
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
