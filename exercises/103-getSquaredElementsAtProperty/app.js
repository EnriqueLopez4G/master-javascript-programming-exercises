function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key]==='object') {
        if (obj[key].length > 0) {
          let na = obj[key].map( (e,i,a)=> {
            return e*e;
          })
          if (na.length<=0) return [];
          else 
            return na;
        } else
          return [];
      } else
          return [] ;

    } else
        return [];
}

let obj = {
  key: [10, 32, 7]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
