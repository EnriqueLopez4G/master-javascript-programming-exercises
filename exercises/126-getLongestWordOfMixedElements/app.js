function getLongestWordOfMixedElements(arr) {
    // your code here
    let as = arr.filter ( (e)=> typeof e ==='string');
    if (as.length<=0) return '';
    let sl = as[0];

    for (let w of as) {
        if (w.length > sl.length) sl = w;
    }
    return sl;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
