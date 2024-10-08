function flipPairs(input) {
    // your code here
    let newString ="";
    for (let posy=0;posy<input.length; posy+=2) {
        if (posy+1 < input.length) {
            let flitPair = input[posy+1]+input[posy];
            newString = newString + flitPair;
        } else {
            let flitPair = input[posy];
            newString = newString + flitPair;
        }
        
    }
    return newString;
}



//let input = "Can you see what this is about?";
let input = "check out how interesting this problem is, it's insanely interesting!";
console.log(input);
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?