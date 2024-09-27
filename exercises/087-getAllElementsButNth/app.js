function getAllElementsButNth(array, n) {
    // your code here
    let na = [];
    for (let i=0; i<array.length; i++) {
        if (i!==n) na.push(array[i]);
    }
    return na;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
