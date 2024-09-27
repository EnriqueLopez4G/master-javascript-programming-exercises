// Write your function here
const getElementsGreaterThan10AtProperty =(o,k)=> {
    if (o.hasOwnProperty(k)) {
        if (typeof o[k] === 'object') {
            if (o[k].length > 0) {
                let na =o[k].filter( (e)=> e>10) 
                return na;
            } else return [];
        } else {
            return [];
        }
    
    } else return [];
}