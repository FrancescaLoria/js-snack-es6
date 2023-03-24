// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numberArray = [23, 15, 10, 5, 18, 33];

const getSubArray = (array, min, max) => {
  const newArray = array.filter((element, index) => {
    return index >= min && index <= max;
  });

  return newArray;
};

const newArray = getSubArray(numberArray, 2, 4);

console.log(newArray);
