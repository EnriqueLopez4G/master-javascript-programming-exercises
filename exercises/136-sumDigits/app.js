function sumDigits(num) {
    // your code here
    let num_str = num.toString();
    let arr_nums = num_str.split('');
    console.log(arr_nums)
    let numeros=[];
    let negative = false;
    for (let ns of arr_nums){
        if (ns==='-') {
            negative= true; 
            
        } else {
            if (negative)
            {
                numeros.push(parseInt(ns)*-1);
                negative= false;
            }
                else
                    numeros.push(parseInt(ns));
        }
     }
     return numeros.reduce( (ac,va)=> {
        return ac+=va;
     })
}

let output = sumDigits(-316);
console.log(output); // --> 4
