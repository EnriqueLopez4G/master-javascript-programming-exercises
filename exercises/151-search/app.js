function search(array, value) {
  // your code here
  let posyInicial =0;
  let posyFinal =array.length;

  let encontrado =false;
  
  while (posyInicial <= posyFinal) { // Cambiar la condición del bucle
    let middle = Math.floor((posyInicial + posyFinal) / 2); // Mover el cálculo aquí
    let valueMiddle = array[middle];

    if (valueMiddle === value) {
      return middle; // Retornar el índice encontrado
    }

    if (value > valueMiddle) {
      posyInicial = middle + 1; // Actualizar solo posyInicial
    } else {
      posyFinal = middle - 1; // Actualizar solo posyFinal
    }
  }
  
  return null; // Retornar null si no se encuentra el valor
}
    


let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4

