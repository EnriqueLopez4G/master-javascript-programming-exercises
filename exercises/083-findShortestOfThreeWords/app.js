function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let cortita = word1.length;
    let cortitaWord = word1;
    if (word2.length < cortita) {
        cortita = word2.length;
        cortitaWord = word2;
    }
    if (word3.length < cortita) {
        cortita = word3.length;
        cortitaWord = word3;
    }
    return cortitaWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
