const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const scoreBtn1 = document.querySelector('#p1-button');
const scoreBtn2 = document.querySelector('#p2-button');
const resetBtn = document.querySelector('#reset-button');

const scoreMax = document.querySelector('#winPoint');

let score1 = 0;
let winPoint = 5;
let score2 = 0;
let isGameOver = false; 
 
scoreBtn1.addEventListener('click', () => {
    if(!isGameOver){
        score1 += 1;
        if(score1 === winPoint){
            isGameOver = true;
        }
        p1Display.textContent = score1;
    }
})

scoreBtn2.addEventListener('click', () => {
    if(!isGameOver){
        score2 += 1;
        if(score2 === winPoint){
            isGameOver = true;
        }
        p2Display.textContent = score2;
    }
})

resetBtn.addEventListener('click', reseter);

function reseter() {
    isGameOver = false;
    score1 = 0;
    p1Display.textContent = 0;
    score2 = 0;
    p2Display.textContent = 0;
}

scoreMax.addEventListener('change', function(){
    winPoint = parseInt(this.value);
    reseter();
})




