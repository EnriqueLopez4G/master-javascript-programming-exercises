function findShortestElement(arr) {
    // your code here
    if (arr.length<=0) return '';

    let wshortest = arr[0];
    for (let e of arr) {
        if (e.length < wshortest.length) {
            wshortest = e;
        }
    }
    return wshortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'