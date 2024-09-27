function removeNumberValues(obj) {
    // your code here
    for (let k in obj) {
        if ( typeof obj[k] ==='number') delete obj[k];
    }
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
