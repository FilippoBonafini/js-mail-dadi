'use strict';

// INERIAMO IL BOTTONE DI START IN UNA VARIABILE
const buttonStart = document.getElementById('start');

buttonStart.addEventListener('click',
    function(){

        // CREIAMO 2 NUMERI RANDOMICI DA 1 A 6
        const randomNumberUser = Math.floor (Math.random () * 6)+1;
        console.log('il tuo numero è: '+randomNumberUser);
        
        const randomNumberCpu = Math.floor (Math.random () * 6)+1;
        console.log('il numero del pc è: '+randomNumberCpu);

        // VARIABILE CHE OSPITERA' IL VINCITORE
        let winner;

        // VEDIAMO CHI VINCE 
        if (randomNumberCpu > randomNumberUser){
            winner='Computer';
            console.log ('vince il computer');
        }
        else if (randomNumberCpu < randomNumberUser){
            winner='Player';
            console.log('vince il giocatore');
        }
        else{
            winner='Draw';
            console.log('pareggio');
        }

        console.log(winner);
    }
)