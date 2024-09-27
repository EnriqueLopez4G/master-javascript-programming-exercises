// Write your function here
const select =(a,obj) => {
    let newObj = {};
    for (let i = 0; i < a.length; i++) {
        let key = a[i];
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
