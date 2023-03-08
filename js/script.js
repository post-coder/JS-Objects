/*

Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà:
 nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
*/

// creo un oggetto chiamato studente1
let studente1 = {
  nome: "Alessandro",
  cognome: "Amormino",
  eta: 25
};

console.log("Studente 1:");

// uso il ciclo for..in per stampare mano a mano tutte le chiavi e tutti i suoi relativi valori della proprietà
for(let chiave in studente1) {
  console.log(chiave + ": " + studente1[chiave]);
}


// dichiaro un array che contiene oggetti
const studenti =  [
  {
    nome: "Edoardo",
    cognome: "Lannino",
    eta: 24
  },
  {
    nome: "Gabriele",
    cognome: "Saragosa",
    eta: 24
  },
  {
    nome: 'Danilo',
    cognome: "Piccinni",
    eta: null
  }
];





// inserimento dell'oggetto nell'array

// prima prendiamo le informazioni
let newUserName = prompt("Qual è il tuo nome?");

let newUserLastName = prompt("Qual è il tuo cognome?");

let newUserAge = parseInt(prompt('Qual è la tua età?'));

// poi creiamo l'oggetto con le informazioni ottenute
let newStudent = {
  nome: newUserName,
  cognome: newUserLastName,
  eta: newUserAgek
};

// lo inseriamo nell'array
studenti.push(newStudent);

console.log(studenti);






console.log("Stampa studenti con array ____________________");

for(let i = 0; i < studenti.length; i++) {

  console.log("Nome: " + studenti[i].nome);
  console.log("Cognome: " + studenti[i].cognome);

}