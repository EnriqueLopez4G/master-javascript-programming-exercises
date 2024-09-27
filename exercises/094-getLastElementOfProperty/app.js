// Write your function here
const getLastElementOfProperty =(o, k)=> {
    if (o.hasOwnProperty(k)) {
        if (typeof o[k] === 'object') {
            if (o[k].length <= 0) return undefined;
            return o[k][o[k].length-1];
        } else return undefined;
    } else return undefined;
}