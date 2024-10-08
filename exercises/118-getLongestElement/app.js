function getLongestElement(arr) {
    // your code here
    if (arr.length<=0) return '';

    let wlargest = arr[0];
    for (let e of arr) {
        if (e.length > wlargest.length) {
            wlargest = e;
        }
    }
    return wlargest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
