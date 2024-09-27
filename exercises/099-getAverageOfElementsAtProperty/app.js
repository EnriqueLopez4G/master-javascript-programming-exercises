function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (obj.hasOwnProperty(key)) {
    if (typeof obj[key] === 'object') {
        if (obj[key].length > 0) {
            let na =obj[key].reduce( (acumulador,va,i)=> {
              return acumulador+va;
            });
            return na/obj[key].length;
            return na;
        } else return 0;
    } else 
        return 0;
} else 
  return 0;
}
