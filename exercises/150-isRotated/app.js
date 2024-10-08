function isRotated(str1, str2) {
    // your code here
    if (str1.length !== str1.length) return false;

    let newstr2=str2;
    let inicial =0;

    console.log(`str1: ${str1}  str2: ${str2}`)
    console.log('_______________')
    
    for (let posy = 0; posy< str2.length; posy++) {
      let c = newstr2[0];
    
      newstr2 = newstr2.substr(1);
      
      newstr2+=c;
      console.log(`c: ${c}  newstr2: ${newstr2}  posy: ${posy}`);
      if (str1 === newstr2) return true;
    }
      return false;
    
  }
  
 console.log(isRotated('hello world', 'orldhello w')); // --> true
 console.log(isRotated('hello world', 'omrel wp')); // --> false

  
