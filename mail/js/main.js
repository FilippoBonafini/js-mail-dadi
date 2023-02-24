'use strict';

// DEFINIAMO UN ARRAY CONTENENTE LE VARIE EMAIL 
const mailSystem = [
    "filippo@gmail.com",
    "luca@gmail.com", 
    "marco@gmail.com", 
    "francesco@gmail.com"
];

// DEFINIAMO IL PULSANTE CHE SCATENERA' L'AZIONE
const buttonVerify = document.getElementById('buttonVerify');
// DEFINIAMO IL CONTAINER DOVE VERRANNO SCRITTE L'ELECO DELLE MAIL 
const containerMails = document.getElementById('mailList');
// DEFINIAMO IL VALORE DELL'INPUT PER AGGIUNGERE UNA MAIL ALL'ELENCO 
const addMailInput = document.getElementById('addMailInput');
// DEFINIAMO IL BOTTONE PER CONFERMARE L'AGGIUNTA DELLA MAIL
const addMailConferm = document.getElementById('addMailConferm');
// DEFINIAMO IL CONTAINER CHE CI DARA' IL RISULTATO DELLA RICERCA DELLA MAIL 
const mailVerifyScreen = document.getElementById('mailVerifyScreen');
// DEFINIAMO IL BOTTONE CHE CHIUDE LA FINESTRA 
const buttonScreenClose = document.getElementById('mailVerifyClose');
// DEFINIAMO GLI SCHERMI INVISIBILI
const windowResult = document.getElementById('mailVerifyScreen');
const overlay = document.getElementById('intoccabile');
// DEFINIAMO IL CONTENUTO DELLA SCHERMATA 
const resultContent = document.getElementById('mailVerifyContent');

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
            resultContent.innerHTML = ("UTENTE VERIFICATO");
            resultContent.classList.add('correct');
            resultContent.classList.remove('incorrect');
        }
        else{
            console.log('utente assente');
            resultContent.innerHTML = ("UNTENTE SCONOSCIUTO");
            resultContent.classList.add('incorrect');
            resultContent.classList.remove('correct');
        }
    }
)

// SCRIVIAMO L'ELENCO DELLE MAIL PRESENTI NEL SISTEMA
for(let i=0; i< mailSystem.length; i++){
    const listElement = document.createElement('div');
    containerMails.append(listElement);
    listElement.innerHTML = (mailSystem[i]);
    listElement.classList.add('mail');
}

// FACCIAMO SI CHE SI AGGIUNGA L'INDIRIZZOP SCELTO UNA VOLTA CLICKATO IL PULSANTE 
addMailConferm.addEventListener('click',
    function(){
        if(addMailInput.value != '' && addMailInput.value.length > 5){
            mailSystem.push(addMailInput.value);
            const listElement = document.createElement('div');
            containerMails.append(listElement);
            listElement.innerHTML = (addMailInput.value);
            listElement.classList.add('mail');  
            resultContent.innerHTML = ("AGGIUNTO CON SUCCESSO");
            resultContent.classList.add('correct');
            resultContent.classList.remove('incorrect');
        }
        else{
            console.log('email non valida')
            resultContent.innerHTML = ("INDIRIZZO NON VALIDO");
            resultContent.classList.add('incorrect');
            resultContent.classList.remove('correct');
        }
    }
)

// CHIUDI FINESTRA
buttonScreenClose.addEventListener('click',
    function(){
        overlay.classList.add('hidden');
        windowResult.classList.add('hidden');
    }
)

// CONFERMIAMO RICERCA
buttonVerify.addEventListener('click',
    function(){
        overlay.classList.remove('hidden');
        windowResult.classList.remove('hidden');
    }
)

// CONFERMIAMO INSERIMENTO MAIL NELL'ELENCO
addMailConferm.addEventListener('click',
    function(){
        overlay.classList.remove('hidden');
        windowResult.classList.remove('hidden');
    }
)