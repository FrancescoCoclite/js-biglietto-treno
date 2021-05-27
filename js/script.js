// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

var eta = parseInt(prompt('Qunati anni hai?'))
console.log(eta);


var kmDafare =  parseInt(prompt('Quanti chilometri devono essere fatti?'));
console.log(kmDafare);

var risultato = kmDafare * 0.21;
console.log(risultato);

if (eta <= 17){
    risultato = (risultato - (risultato * 0.2)).toFixed(2);
    console.log(risultato);
}
else if(eta >= 65){
    risultato =parseFloat((risultato - (risultato * 0.4)).toFixed(2)) ;
    console.log(risultato);
}
