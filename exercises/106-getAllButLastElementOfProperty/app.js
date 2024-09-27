function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        if (obj[key].length > 0) {
          let na = obj[key].filter( (e,i)=>i< obj[key].length-1 )
          if (na.length>0)
          return na;
        else return [];
        } else return [];
      } else return [];
    } else return [];
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
