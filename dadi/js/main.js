'use strict';

// INERIAMO IL BOTTONE DI START IN UNA VARIABILE
const buttonStart = document.getElementById('start');

// MEMORIZZIAMO I NOMI DEI GIOCATORI
const namePlayer1 = document.getElementById('name1');
const namePlayer2 = document.getElementById('name2');

//DOVE ANDRANNO I NOMI
const namePlayer1Destination = document.getElementById('namePlayer1'); 
const namePlayer2Destination = document.getElementById('namePlayer2'); 

// DOVE ANDRANNO I PUNTEGGI
const scorePlayer1Destination = document.getElementById('scorePlayer1');
const scorePlayer2Destination = document.getElementById('scorePlayer2');

// INSERIAMO I BOTTONI PER IL CAMBIO NOME 
const buttonNameP1 = document.getElementById('buttonNameP1');
const buttonNameP2 = document.getElementById('buttonNameP2');

// IMPORTIAMO IL CONTAINER PRINCIPALE
const container = document.getElementById('resultContainer')

// CREAIAMO VARIABILI CON I NOMI DEI GIOCATORI
let name1;
let name2;

// CREIAMO LE VARIABILI DEI PUNTEGGI
let scoreP1 = 0;
let scoreP2 = 0;

buttonNameP1.addEventListener('click',
    function(){
        name1 = (namePlayer1).value;
        if(name1 != ''){
            namePlayer1Destination.innerHTML = (name1+':');
        }       
    }
)

buttonNameP2.addEventListener('click',
    function(){
        name2 = (namePlayer2).value;
        if(name2 != ''){
            namePlayer2Destination.innerHTML = (name2+':');
        }       
    }
)

buttonStart.addEventListener('click',
    function(){

        // RESETTIAMO I DADI 
        for(let i = 1; i<7; i++){
            document.querySelector('.dado'+i+'a').classList.remove('selected');
            document.querySelector('.dado'+i+'b').classList.remove('selected');
        }

        // CREIAMO 2 NUMERI RANDOMICI DA 1 A 6
        const randomNumberUser = Math.floor (Math.random () * 6)+1;
        console.log('il tuo numero è: '+randomNumberUser);
        
        const randomNumberCpu = Math.floor (Math.random () * 6)+1;
        console.log('il numero del pc è: '+randomNumberCpu);

        // VARIABILE CHE OSPITERA' IL VINCITORE
        let winner;

        // FACCIAMO COMPARIRE I DADI GIUSTI
        document.querySelector('.dado'+randomNumberUser+'a').classList.add('selected');
        document.querySelector('.dado'+randomNumberCpu+'b').classList.add('selected');

        // RESET DELLE OMBRE
        container.classList.remove('winnerP2')
        container.classList.remove('winnerP1')
        container.classList.remove('draw');

        // VEDIAMO CHI VINCE 
        if (randomNumberCpu > randomNumberUser){
            winner='computer';
            scoreP2++
            scorePlayer2Destination.innerHTML = scoreP2;
            container.classList.add('winnerP2')
        }
        else if (randomNumberCpu < randomNumberUser){
            winner='player';
            scoreP1++
            scorePlayer1Destination.innerHTML = scoreP1;
            container.classList.add('winnerP1')
        }
        else{
            winner='draw';
            container.classList.add('draw');
        }

        console.log('vincitore: '+winner);
    }
)