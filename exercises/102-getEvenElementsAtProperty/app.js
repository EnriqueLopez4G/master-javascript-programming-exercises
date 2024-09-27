function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
          if (obj[key].length > 0) {
             let na =[];
             for (let i = 0; i < obj[key].length;i++) {
              if (obj[key][i] % 2 === 0) {
                console.log("obj[key]...",obj[key][i])
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
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
