
// memorizzare più informazioni di tipo diverso facenti parte della stessa fonte
// oggetto


// key: value,
// key2: value2,
let persona = {
  nome: 'Gabriel',
  cognome: "Spanu",
  eta: 26,
  staLavorando: true,
  sportPraticati: ['tennis', 'basket'],
  lavoriFatti: [
    {
      cliente: 'Boolean',
      attivita: 'insegnamento'
    },
    {
      cliente: 'Altavia',
      attivita: 'web developer'
    }
  ]
};




// notazione a punto
// dot notation
console.log(persona.cognome);

// notazione a parentesi
// bracket notation
console.log(persona['nome']);


// la bracket notation può essere usata 
// per accedere ad una determinata proprietà dell'oggetto 
// attraverso l'utilizzo di un'altra variabile stringa,
// che inseriremo nella bracket notation.
// questa variabile quindi dovrà contentere la chiave della proprietà
// a cui vogliamo accedere
let stringaDellaChiave = 'nome';

console.log(persona[stringaDellaChiave]);

// possiamo modificare i valori delle nostre proprietà, indicandone la chiave a sinistra dell'uguale
persona.cognome = "Rossi";

// se indichiamo la chiave di una proprietà che non esiste, essa verrà creata all'interno dell'oggetto
persona.altezza = "190";



// ora stampiamo una lista di elementi nel documento con i valori
// contenuti nel nostro oggetto
let listaElement = document.getElementById("list");

// nel for..in bisogna dichiarare una nuova variabile, che avrà come valore via via il nome delle chiavi del nostro oggetto
// questa nuova varibaile (nel nostro caso "chiave") possiamo chiamarla come vogliamo
for (let chiave in persona ) {
  // esegue le istruzioni PER OGNI proprietà dell'oggetto persona
  
  // creo un elemento e lo appendo
  let newElement = document.createElement('li');
  listaElement.append(newElement);

  // ci scrivo dentro la chiave della proprietà (es: "nome")
  // e poi il valore di quella proprietà (es: "Gabriel")
  // usando il template literal
  newElement.innerText = `${chiave}: ${persona[chiave]}`;
  
}




// _________
let classi = [
  [persona, 'Alessio', 'Silvia'],
  ['Niccolò', 'Luca', 'Andrea']
];
console.log(classi);

// qui facciamo vedere che possiamo concatenare tra di loro 
// oggetti, array, variabili, a tantissimi livelli di profondità

// prova a risalire al percorso che fa il codice per stampare il seguente valore
console.log(classi[0][0]['lavoriFatti'][0].cliente);