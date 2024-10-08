function isIsogram(text) {
  // your code here
  let obj = {};
  for (let v of text) {
    let c = v.toLowerCase();
    if (obj.hasOwnProperty(c)) {
      obj[c]++;
    } else {
      obj[c]=1;
    }
  }
  for (let k in obj) {
    if (obj[k]!==1) return false;
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
