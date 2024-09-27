function countCharacter(str, char) {
    // your code here
    let veces =0;
    for (let c of str) {
        if (c===char) veces++;
    }
    return veces;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
