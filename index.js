let home_score_el = document.getElementById('home-score-el');
let guest_score_el = document.getElementById('guest-score-el');

let home_count = 0;
let guest_count = 0;

let plusOneH = document.getElementById('plusOneH');
let plusTwoH = document.getElementById('plusTwoH');
let plusThreeH = document.getElementById('plusThreeH');

let plusOneG = document.getElementById('plusOneG');
let plusTwoG = document.getElementById('plusTwoG');
let plusThreeG = document.getElementById('plusThreeG');

let home = document.getElementById('home-score-container');
let guest = document.getElementById('guest-score-container');

let reset_btn = document.getElementById('reset-btn');

function verifyCurrentWinner(){
    if(home_count>guest_count&& home_count!=guest_count){
        home.classList.add('winnerClass')
        guest.classList.remove('winnerClass')
    }else if(home_count<guest_count&& home_count!=guest_count){
        guest.classList.add('winnerClass')
        home.classList.remove('winnerClass')
    }else if(home_count==guest_count){
        guest.classList.remove('winnerClass')
        home.classList.remove('winnerClass')
    }
}

plusOneH.addEventListener('click', function(event){
    home_count+=1
    home_score_el.textContent=home_count;
    verifyCurrentWinner();
})

plusTwoH.addEventListener('click', function(event){
    home_count+=2
    home_score_el.textContent=home_count;
    verifyCurrentWinner();
})

plusThreeH.addEventListener('click', function(event){
    home_count+=3
    home_score_el.textContent = home_count;
    verifyCurrentWinner();
})

/*-------------------------------------------------*/

plusOneG.addEventListener('click', function(event){
    guest_count+=1
    guest_score_el.textContent=guest_count;
    verifyCurrentWinner();
})

plusTwoG.addEventListener('click', function(event){
    guest_count+=2
    guest_score_el.textContent=guest_count;
    verifyCurrentWinner();
})

plusThreeG.addEventListener('click', function(event){
    guest_count+=3
    guest_score_el.textContent = guest_count;
    verifyCurrentWinner();
})

function reset(){
    home_score_el.textContent = 0;
    guest_score_el.textContent = 0;
    home_count=0;
    guest_count=0;
    verifyCurrentWinner();
}