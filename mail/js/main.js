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

        for(let i=0; i < mailSystem.length; i++){
            if(mailUser === mailSystem[i]){
                console.log('Utente trovato, puoi accedere!');

                // CONCLUDO IL CICLO 
                i = mailSystem.length;
            }
            else{
                console.log('nessun risultato')

                // CONCLUDO IL CICLO 
                i = mailSystem.length;
            }
        }
    }
)