/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

1- chiedere un numero a quattro cifre all'utente
2- scomporlo in quattro differenti valori
3- effettuare la somma tra i valori 
4- restituire un risultato.
*/

//recupero il bottone dalla pagina html
const button = document.getElementById('send');

//aggiungo una funzione al bottone
button.addEventListener('click', function(){

    //recupero il numero inserito dall'utente
    let number = document.getElementById('number').value;
    console.log(number)
})