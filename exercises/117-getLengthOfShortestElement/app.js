function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length<=0) return 0;
    let longs=  [];
    for (let e of arr) {
        longs.push(e.length);
    }
    return Math.min(...longs);
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
