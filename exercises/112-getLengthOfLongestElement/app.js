function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length<=0) return 0;

    let longs=[];
    for (let e of arr) {
        longs.push(e.length);
    }
    return Math.max(...longs);
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
