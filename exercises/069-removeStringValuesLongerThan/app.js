function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let k in obj)
    if ( typeof(obj[k])==='string' && obj[k].length >num) delete obj[k];
  
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
