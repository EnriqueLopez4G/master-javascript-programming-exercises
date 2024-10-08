function findLongestPalindrome(sentence) {
  let longestPalindrome = '';

  // Iteramos sobre todas las subcadenas de la oración
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i; j < sentence.length; j++) {
      const substring = sentence.slice(i, j + 1);
      // Verificamos si es un palíndromo
      if (isPalindrome(substring)) {
        // Comparamos la longitud y actualizamos si es más largo o igual
        if (substring.length > longestPalindrome.length || 
            (substring.length === longestPalindrome.length && substring > longestPalindrome)) {
          longestPalindrome = substring;
        }
      }
    }
  }

  return longestPalindrome;
  
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  const normalizedWord = word.toLowerCase(); // Normaliza solo para la verificación
  return normalizedWord === reverseString(normalizedWord);
  
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
