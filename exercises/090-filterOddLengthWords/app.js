function filterOddLengthWords(words) {
    // your code here
    let nw = words.filter((e)=> e.length%2!==0)
    return nw;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
