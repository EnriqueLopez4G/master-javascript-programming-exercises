function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let numeros = arr.filter( (e)=> typeof e==='number');
    if (numeros.length <=0) return 0;
    return (Math.max( ...numeros));
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
