let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let o2 in obj2) {
        if (!obj1.hasOwnProperty(o2)) {
            obj1[o2]=obj2[o2];
        }
    }
  
}