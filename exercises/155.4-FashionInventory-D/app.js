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

function getLaceNameDataForShoes(inventory) {
    // your code here
    let newList =[];
    for (let e of inventory) {
      let objw={};
      for (let s of e.shoes.filter( (e)=> e.name.includes('lace'))) {
        objw.nameWords = s.name.split(' ');
        objw.targetWordIndex = objw.nameWords.findIndex( w => w.includes('lace'));
        newList.push(objw);
        objw={};
      }
  
    }
    //console.log(newList)
    return newList;
}

console.log(getLaceNameDataForShoes(currentInventory));
