function findSmallestElement(arr) {
    // your code here
    return (arr.length<=0 ? 0: (Math.min(...arr)) );

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1