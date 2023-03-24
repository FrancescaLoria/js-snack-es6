//  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadraCalcioArrey = [
  {
    nome: "Roma",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Piacenza",
    punti: 0,
    falli: 0,
  },
  {
    nome: "La Spezia",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juve",
    punti: 0,
    falli: 0,
  },
];
// 2 vreo una funzione che genera numeri casuali, per poi utilizzarla nel mio ciclo
function generaNumeroCasuale() {
  const numeroCasuale = Math.floor(Math.random() * 51);
  return numeroCasuale;
}
// 1 creo il ciclo
squadraCalcioArrey.forEach((squadra) => {
  squadra.punti = generaNumeroCasuale();
  squadra.falli = generaNumeroCasuale();
});
console.log(squadraCalcioArrey);

// Utilizzo il metodo map per creare una copia del mio array originale, dove per ogni elemento torno un oggetto con dentro solo nome e falli usando la destrutturazione

const nuovoArray = squadraCalcioArrey.map((element) => {
  const { nome, falli } = element;
  return { nome, falli };
});

console.log(nuovoArray);
