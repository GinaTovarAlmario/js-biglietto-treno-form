/*Descrizione Traccia:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Bonus:
Gestire il campo dei chilometri con un input di tipo number
Gestire il campo dell'età con una <select>
Aggiungere un bottone per resettare il form
Aggiungere un campo col nome del passeggero
Randomizzare, nel biglietto, un numero di carrozza casuale
Randomizzare nel biglietto, un Codice Passeggero di 5 cifre che deve iniziare con il numero 9*/

// Importante, prima cosa verifico collegamenti
console.log('ok Js');

/*
1- Prendo gli elementi dal Dom che mi possono servire
2- Mi preparo le variabili che mi serviranno per fare il calcolo del prezzo finale
3- Chiedo all'utente nome e cognome ed età
4- mi preapro le casistiche di sconto da applicare in base all'età ricevuta
5- calcolo il prezzo finale del biglietto
6- stampo il risultato*/

// fase di preparazione
let discount = null;
let message = "";
let finalMessage;

// fase di raccolta dati
const Kms = document.getElementById('Kms');
const age = document.getElementById('age');
const button = document.getElementById('btn-produce');

const paragraph = document.getElementById('paragraph');

const buttonReset = document.getElementById('btn-annull');
const form =document.querySelector('form');

const firstNameField = document.getElementById('firstname');
const lastNameField =document.getElementById('lastname');

// fase di elaborazione dati
button.addEventListener('click', function(){
    const KmsValue =Kms.value;
    const ageValue=age.value;

    const firstName = firstNameField.value.trim();
    const lastName = lastNameField.value.trim();

    console.log('Km inseriti:',KmsValue);
    console.log('Età passeggero:',ageValue);

    console.log('Nome passeggero', firstName);
    console.log('Cognome passeggero:', lastName);

    const fullName = `${firstName} ${lastName}`;
    console.log('Nome completo passeggero:', fullName);

    let ticketPrice =(0.21 * KmsValue);
    
    if (ageValue >= 65 ) {
    // sconto del 40%
        discount = 0.4;
    }else if ( ageValue < 18 ){
    // socnto del 20%
        discount = 0.2;
    } else {
    // prezzo full
        discount = 0;
    }
    // mi serve il risultato con due decimali
    let finalPrice = (ticketPrice * (1 - discount)).toFixed(2) + " €";
    // fase di output
    finalMessage = `Il prezzo finale del tuo biglietto è ${finalPrice}`;
    console.log(message , finalMessage);
    paragraph.innerHTML = message + "<br>"+ finalMessage;

})
buttonReset.addEventListener('click', function(){
    form.reset();
})
