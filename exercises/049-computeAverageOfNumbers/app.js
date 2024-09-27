// Write your function here
const computeAverageOfNumbers =(an) => {
    if (an.length<=0) return 0;
    let suma = 0;
    for (let n of an) {
        suma+=n;
    }
    return suma/an.length;
}

