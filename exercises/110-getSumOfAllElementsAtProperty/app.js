function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    
    if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] ==='object') {
            if (obj[key].length>0) {
                let sumaDeValores = obj[key].reduce( (acumulador, valorActual)=> {
                    return acumulador + valorActual;
                });
                return sumaDeValores;
            } else
                return 0;
        } else
            return 0;
    } else 
        return 0;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
