problema: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


1- Copio dalla documentazione nell'HTML il codice di partenza di VUE
    NB. va inserito prima dello script per il file js o non funzionerà
2- creo un h1 all'interno del file html e gli assegno un id
3- nel file js salvo in una variabile locale la funzione creaApp --> const {createApp} = Vue;
4- Inizializzo un 'istanza dell'applicazione Vue invoncado la funzione createApp
    NB. alla chiusura della funzione va iserito.mount (#'id dell'elemento html')
5- dentro createApp realizzo il metodo data al cui interno inserisco un return
    5.1- all'interno del return metto la mia variabile
    NB return è un oggetto quindi alle variabili vanno dati i : e non =
    5.2 creo una variabile message: a cui assegno il testo da dare all'h1
6- all'interno del tag H1 riporto la funzione message
    NB perchè la funzione venga letta correttamente va racchiusa nei baffi --> {{}}
