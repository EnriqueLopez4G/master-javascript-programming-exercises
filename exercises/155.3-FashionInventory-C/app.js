let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
    // your code here
    let newList =[];
    for (let e of shoeList) {
      for (let s of e.shoes.filter( (e)=> e.name.includes('lace'))) {
        console.log(s)
        let objTmp = [];
        objTmp.nameWords = s.split(' ');
        console.log(objTmp)
      
      }
    }
    return newList;
}

console.log(renderInventory(currentInventory));
