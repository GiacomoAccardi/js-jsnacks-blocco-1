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
    let string = document.getElementById('number').value;
    console.log(string)

    //separo il numero inserito in quattro differenti stringhe
    const numbers = string.split('')
    console.log(numbers)

    // creo un arrey vuoto nella quale inserire le stringhe precedentemente splittate sottoforma di valore intero

    let array = []

    for (i = 0 ; i < numbers.length; i++){
        let single_valor = parseInt(numbers[i]);
        array.push(single_valor)
    }
    console.log(array)

    // faccio la somma dei valori 

    let result = 0;

    for (i = 0 ; i < array.length; i++){
      result += array[i]
    }
    console.log(result)

})


