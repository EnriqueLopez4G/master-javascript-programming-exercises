function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
          if (obj[key].length > 0) {
             let na =[];
             for (let i = 0; i < obj[key].length;i++) {
              console.log("obj[key]...",obj[key])
              if (obj[key][i].length % 2 === 0) {
                na.push(obj[key][i]);
              }
             }
             if (na.length <= 0) return [];
             return na;
             
          } else return [];
      } else 
          return [];
  } else 
    return [];
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
