// Write your function here
const getFirstElementOfProperty =(o,k)=> {
    if (o.hasOwnProperty(k)) {
        if (typeof o[k] ==='object') {
            console.log(o[k]);
            if (o[k].length <= 0) return undefined;
            return o[k][0];
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}