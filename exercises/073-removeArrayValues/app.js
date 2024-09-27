function removeArrayValues(obj) {
    // your code here
    for (let k in obj)   
        if (typeof obj[k]==='object') delete obj[k];
}