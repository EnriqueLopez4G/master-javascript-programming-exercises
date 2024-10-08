function flipEveryNChars(input, n) {
    // your code here
    let newString ="";

    const groups = [];
    for (let i = 0; i < input.length; i += n) {
        // Usa el método substring para extraer grupos de n caracteres
        groups.push(input.substring(i, i + n) );
    }

    for (let i of groups) {
        newString = newString + i.split('').reverse().join('');  
    }

return newString;

}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
