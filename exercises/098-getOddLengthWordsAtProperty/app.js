// Write your function here
const  getOddLengthWordsAtProperty=(o,k)=> {
    if (o.hasOwnProperty(k)) {
        if (typeof o[k] === 'object') {
            if (o[k].length > 0) {
                let na =o[k].filter( (e)=> e.length%2 !==0) 
                return na;
            } else return [];
        } else {
            return [];
        }
    
    } else return [];
}