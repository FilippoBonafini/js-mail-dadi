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
let name1 ='Player1';
let name2 ='Player2';

//IMPORTIAMO I BOTTONI DEI ROUND
const buttonRound1 = document.getElementById('buttonRound1');
const buttonRound2 = document.getElementById('buttonRound2');
const buttonRound3 = document.getElementById('buttonRound3');
const buttonRound4 = document.getElementById('buttonRound4');

// CREIAMO LE VARIABILI DEI PUNTEGGI
let scoreP1 = 0;
let scoreP2 = 0;

// PUNTI MASSIMI
let maxScore =1;

// IMPORTIAMO LE FINESTRE INVISIBILI
const dadiVerifyScreen = document.getElementById ('dadiVerifyScreen');
const intoccabile = document.getElementById ('intoccabile');

//E IL CONTENUTO
const screenContent = document.getElementById('screenContent');
const screenContentGod = document.getElementById('screenContentGod')

//E IL BOTTONE CHIUDI
const mailVerifyClose = document.getElementById('mailVerifyClose');

buttonRound1.addEventListener('click',
    function(){
        buttonRound1.classList.add("selected");
        buttonRound2.classList.remove("selected");
        buttonRound3.classList.remove("selected");
        buttonRound4.classList.remove("selected");
        maxScore = 1;
        scoreP1 = 0;
        scoreP2 = 0;
        scorePlayer1Destination.innerHTML = scoreP1;
        scorePlayer2Destination.innerHTML = scoreP2;
    }
)
buttonRound2.addEventListener('click',
    function(){
        buttonRound1.classList.remove("selected");
        buttonRound2.classList.add("selected");
        buttonRound3.classList.remove("selected");
        buttonRound4.classList.remove("selected");
        maxScore = 3;
        scoreP1 = 0;
        scoreP2 = 0;
        scorePlayer1Destination.innerHTML = scoreP1;
        scorePlayer2Destination.innerHTML = scoreP2;
    }
)
buttonRound3.addEventListener('click',
    function(){
        buttonRound1.classList.remove("selected");
        buttonRound2.classList.remove("selected");
        buttonRound3.classList.add("selected");
        buttonRound4.classList.remove("selected");
        maxScore = 5;
        scoreP1 = 0;
        scoreP2 = 0;
        scorePlayer1Destination.innerHTML = scoreP1;
        scorePlayer2Destination.innerHTML = scoreP2;
    }
)
buttonRound4.addEventListener('click',
    function(){
        buttonRound1.classList.remove("selected");
        buttonRound2.classList.remove("selected");
        buttonRound3.classList.remove("selected");
        buttonRound4.classList.add("selected");
        maxScore = 10;
        scoreP1 = 0;
        scoreP2 = 0;
        scorePlayer1Destination.innerHTML = scoreP1;
        scorePlayer2Destination.innerHTML = scoreP2;
    }
)

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

mailVerifyClose.addEventListener('click',
    function(){
        dadiVerifyScreen.classList.add('hidden');
        intoccabile.classList.add('hidden');
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
        const godNumber = 6;
        console.log('il tuo numero è: '+randomNumberUser);
        
        const randomNumberCpu = Math.floor (Math.random () * 6)+1;
        console.log('il numero del pc è: '+randomNumberCpu);

        // VARIABILE CHE OSPITERA' IL VINCITORE
        let winner;

        name1 = (namePlayer1).value;
        // FACCIAMO COMPARIRE I DADI GIUSTI
        if(name1 === 'god'){            
            document.querySelector('.dado6a').classList.add('selected');    
        }else{
            document.querySelector('.dado'+randomNumberUser+'a').classList.add('selected');
        }

        if(name2 === 'god'){            
            document.querySelector('.dado6b').classList.add('selected');    
        }else{
            document.querySelector('.dado'+randomNumberCpu+'b').classList.add('selected');        
        }


        // RESET DELLE OMBRE
        container.classList.remove('winnerP2')
        container.classList.remove('winnerP1')
        container.classList.remove('draw');

        // VEDIAMO CHI VINCE 

        if(name1 === 'god' && name2 === 'god'){
            dadiVerifyScreen.classList.remove('hidden');
            intoccabile.classList.remove('hidden');
            screenContent.innerHTML = ('Battaglia tra dei... Potrebbero volerci secoli')
        }
        else if(name1 === 'god'){
            scoreP1++;
            scorePlayer1Destination.innerHTML = scoreP1;
            container.classList.add('winnerP1');
            if(scoreP1 >=  maxScore){
                dadiVerifyScreen.classList.remove('hidden');
                intoccabile.classList.remove('hidden');
                screenContent.innerHTML = ('Player 1 vince!')
                screenContentGod.innerHTML = (name2 +' prova col nome "god" :P')
                scoreP2 = 0
                scoreP1 = 0
                scorePlayer1Destination.innerHTML = scoreP1;
                scorePlayer2Destination.innerHTML = scoreP2;
            }
        }
        else if(name2 === 'god'){
            scoreP2++;
            scorePlayer2Destination.innerHTML = scoreP2;
            container.classList.add('winnerP2');
            if(scoreP2 >= maxScore){
                dadiVerifyScreen.classList.remove('hidden');
                intoccabile.classList.remove('hidden');
                screenContent.innerHTML = ('Player 2 vince!')
                screenContentGod.innerHTML = (name1 +' prova col nome "god" :P')
                scoreP2 = 0
                scoreP1 = 0
                scorePlayer1Destination.innerHTML = scoreP1;
                scorePlayer2Destination.innerHTML = scoreP2;
            }
        }
        else if (randomNumberCpu > randomNumberUser){
            winner='computer';
            scoreP2++;
            scorePlayer2Destination.innerHTML = scoreP2;
            container.classList.add('winnerP2');
            if(scoreP2 >= maxScore){
                dadiVerifyScreen.classList.remove('hidden');
                intoccabile.classList.remove('hidden');
                screenContent.innerHTML = ('Player 2 vince!')
                screenContentGod.innerHTML = (name1 +' prova col nome "god" :P')
                scoreP2 = 0
                scoreP1 = 0
                scorePlayer1Destination.innerHTML = scoreP1;
                scorePlayer2Destination.innerHTML = scoreP2;
            }
        }
        else if (randomNumberCpu < randomNumberUser){
            winner='player';
            scoreP1++;
            scorePlayer1Destination.innerHTML = scoreP1;
            container.classList.add('winnerP1');
            if(scoreP1 >=  maxScore){
                dadiVerifyScreen.classList.remove('hidden');
                intoccabile.classList.remove('hidden');
                screenContent.innerHTML = ('Player 1 vince!')
                screenContentGod.innerHTML = (name2 +' prova col nome "god" :P')
                scoreP2 = 0
                scoreP1 = 0
                scorePlayer1Destination.innerHTML = scoreP1;
                scorePlayer2Destination.innerHTML = scoreP2;
            }
        }
        else{
            winner='draw';
            container.classList.add('draw');
        }

        console.log('vincitore: '+winner);
    }
)