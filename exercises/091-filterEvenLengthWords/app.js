function filterEvenLengthWords(words) {
    // your code here
    let nw = words.filter((e)=> e.length %2===0);
    return nw;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
