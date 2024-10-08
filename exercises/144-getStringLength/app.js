function getStringLength(string) {
    // your code here
    let counterChars =0;
    for (let c in string) {
        counterChars++;
    }
    return counterChars;
}

let output = getStringLength('hello');
console.log(output); // --> 5
