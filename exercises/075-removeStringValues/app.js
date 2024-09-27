function removeStringValues(obj) {
    // your code here
    for (k in obj)
        if (typeof obj[k]==='string') delete obj[k];
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
