function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
       let largota = word1.length;
       let largotaWord = word1;
       if (word2.length > largota)  {
        largota = word2;
        largotaWord = word2;
       }
       if (word3.length > largota)  {
        largota = word3;
        largotaWord = word3;
       }
       return largotaWord;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
