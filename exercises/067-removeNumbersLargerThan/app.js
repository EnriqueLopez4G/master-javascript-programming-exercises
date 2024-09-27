let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
 for (let p in obj)    {
    console.log(p)
    if (obj[p] > num) delete obj[p];
 }
}
