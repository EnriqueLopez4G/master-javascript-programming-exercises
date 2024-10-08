let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
    let arrayFashion =[];
    for ( let i of inventory) {
      for (let s of i.shoes) {
        let objtmp =[];
        objtmp.push(i.name);
        objtmp.push(s.name)
        objtmp.push(s.price);
        console.log("OBJ_TMP:",objtmp)
        arrayFashion.push(objtmp)
      }
      
      
    }
    return arrayFashion;
}

console.log(renderInventory(currentInventory))
