// Write your function here
const getNthElementOfProperty =(o,k,n)=> {
    if (o.hasOwnProperty(k)) {
        if (typeof o[k]==='object') {
            if (o[k].length>0) {
                if (n > o[k].length) return undefined;
                return o[k][n]
            } else
                return undefined;
        } else
            return undefined;

    } else 
        return undefined;
}