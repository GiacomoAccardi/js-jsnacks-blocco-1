/*SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

1 - Chiedere all'utente il nome tramite l'utilizzo di input.
     ci sarà dunque la variabile "nome" che prenderà al, click di un pulsante, il valore inserito dall'utente.

2 - Creare un array che contenga al suo interno tutti i nomi degli invitati 
     Ci sarà dunque la variabile "invitati" che avrà come valore l'array

3 - Avviare tramite ciclo un controllo che confronterà "invitati" con ogni dato contenuto nell'array e, qualora il dato non dovesse trovare un valore uguale a se stesso, verrà stampato un messaggio che nega l'accesso alla festa. OPPURE uno di benvenuto*/

//raccolgo i dati inseriti dall'utente
const button = document.getElementById('invia');

button.addEventListener('click', function(){
     let nome = document.getElementById("nome").value;

      //Creo una lista degli invitati
      let invitati = ['giacomino', 'ezio', 'lucia', 'armando', 'agata'];
      console.log(invitati);
     
      // creo due nuove variabili, una per controllare che il nome dell'user sia nella lista e l'altra per poi permettermi di restituirgli un messaggio
      let controllo = false;
  
      let messaggio;
  
 })
