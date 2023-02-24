'use strict';

// DEFINIAMO UN ARRAY CONTENENTE LE VARIE EMAIL 
const mailSystem = [
    "filippo@gmail.com",
    "luca@gmail.com", 
    "marco@gmail.com", 
    "francesco@gmail.com"
];

// SCRIVIAMO L'ELENCO DELLE MAIL NELLA CONSOLE
console.log(mailSystem);

// DEFINIAMO IL PULSANTE CHE SCATENERA' L'AZIONE
const buttonVerify = document.getElementById('buttonVerify');

// IMPOSTIAMO CHE AL CLICK DEL BOTTONE SI SCATENINO AZIONI 
buttonVerify.addEventListener('click',
    function(){

        // PRENDIAMO IL VALORE INSERITO DALL'UTENTE
        const mailUser = document.getElementById('mailUser').value;

        // IMPOSTIAMO UNA VARIABILE BOOLEANA
        let join = false;

        // VERIFICHIAMO SE L'UTENTE E' PRESENTE
        for(let i=0; i < mailSystem.length; i++){
            if(mailUser === mailSystem[i]){
                join = true;
            }
        }   

        // SCRIVIAMO A SCHERMO IL RISULTATO
        if (join === true){
            console.log('utente presente');
        }
        else{
            console.log('utente assente');
        }
    }
)