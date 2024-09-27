function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key]==='object') {
        if (obj[key].length > 0) {
          let na = obj[key].reduce( (ac,va,i,a)=> {
            ac = ac*va;
            return ac;
          })
          
            return na;
        } else
          return 0;
      } else
          return 0 ;

    } else
        return 0;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
