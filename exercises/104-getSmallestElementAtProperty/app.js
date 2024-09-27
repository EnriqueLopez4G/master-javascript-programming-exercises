function getSmallestElementAtProperty(obj, key) {
    // your code here
  if (obj.hasOwnProperty(key)) {
    if (typeof obj[key] === 'object') {
      if (obj[key].length > 0) {
        return Math.min(...obj[key]);
      } else return [];
    } else return [];
  } else return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
