// Write your function here
const getIndexOf =(c,s)=> {
    for (let i=0;i<s.length; i++) {
        if (s[i]===c) return i;
    }
    return -1;
}