//  Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bicycleArrey = [
  {
    nome: "Bici da città",
    peso: 20,
  },

  {
    nome: "Mountain bike",
    peso: 10,
  },

  {
    nome: "Bici ibrida",
    peso: 15,
  },

  {
    nome: "Bici da ciclocross",
    peso: 12,
  },

  {
    nome: "Bici da cicloturismo",
    peso: 12,
  },
];

console.log(bicycleArrey);

// for (let i = 0; i < bicycleArrey.length; i++) {
//   const currentElement = bicycleArrey[i];
//   console.log(currentElement);
// }

let biciLeggera = null;
let indiceBiciLeggera = 0;
const root = document.getElementById("root");
bicycleArrey.forEach((element, index) => {
  // se bicileggera è ancora null salvati direttamente il peso
  const { peso } = element;
  if (!biciLeggera) {
    biciLeggera = peso;
  } else {
    if (biciLeggera > peso) {
      biciLeggera = peso;
      indiceBiciLeggera = index;
    }
  }
});
const { nome } = bicycleArrey[indiceBiciLeggera];

root.innerHTML = `Bici leggera : ${nome}, con il peso di ${biciLeggera}`;
console.log(biciLeggera);
console.log(bicycleArrey[indiceBiciLeggera]);
