function getLargestElementAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        if (obj[key].length > 0) {
          return Math.max(...obj[key]);
        } else return [];
      } else return [];
    } else return [];
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
