function transformEmployeeData(array) {
  // your code here
  let newObj = {};
  let arrayObjs = [];
  for (let a of array) {
    for (let ab of a) 
      newObj[ab[0]]= ab[1];

    arrayObjs.push(newObj)
    newObj = {};
  }

  return arrayObjs;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); 

[
  [
    ['firstName', 'Joe'], 
    ['lastName', 'Blow'], 
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
]