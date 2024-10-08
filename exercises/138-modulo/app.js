function modulo(num1, num2) {
    // your code here
    if (num2 === 0) {
        throw new Error("División por cero no está permitida.");
    }
    
    let cociente = (Math.floor(Math.abs(num1) / Math.abs(num2)));
    let residuo = Math.abs(num1) - (cociente * num2);

    if (num1<0) return residuo * -1;
    return residuo
}

let output = modulo(-25, 4);
console.log(output); // --> 1
