// Write your function here
const countAllCharacters=(s)=> {
    let charsCounted={};
    for (let c of s) {
        if (charsCounted.hasOwnProperty(c)) {
            charsCounted[c]+=1;
        } else {
            charsCounted[c]=1;
        }
    }
    return charsCounted;
}