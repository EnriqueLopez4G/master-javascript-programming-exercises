function computeFactorialOfN(n) {
    // your code here
    let f=1;
    for (let i=1; i<=n; i++) {
        f*=i;
    }
    return f;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
