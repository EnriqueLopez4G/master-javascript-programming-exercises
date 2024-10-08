let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let arrayFashion =[];
    for ( let i of inventory) {
      console
      let avg = i.shoes.reduce( (acumulador,shoe)=>  acumulador+shoe.price,0)/i.shoes.length;
      let obj ={}
      obj.name =i.name;
      obj.averagePrice = avg;
      arrayFashion.push(obj)
    }
  
    return arrayFashion
  
}

console.log(renderAverageCostPerDesigner(currentInventory));
