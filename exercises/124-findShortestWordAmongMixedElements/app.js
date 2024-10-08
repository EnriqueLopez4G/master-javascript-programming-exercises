function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length<=0) return '';
    let as = arr.filter( (e)=> typeof e==='string');
    if (as.length<=0) return '';

    let sshort = as[0];
    
    for (let s of as) 
        if (s.length< sshort.length) 
            sshort = s;

    return sshort;
}

//let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
let output = findShortestWordAmongMixedElements([4, 3, 2, 10]);
console.log(output); // --> 'two'
