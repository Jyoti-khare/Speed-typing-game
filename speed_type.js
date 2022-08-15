// window.addEventListener('load',init);
// let btn=document.querySelector("#startbtn");
// btn.onclick=function clear(){
//     if(msg.innerHTML!="")msg.innerHTML="";
// }

// GLOBAL VARIABLES
// const levels={
//     easy:5,
//     medium:3,
//     hard:2
// }
let currLevel=5;
function getOption(){
    let option=document.querySelector("#levels").value;
    if(option==="Easy")currLevel=5;
    else if(option==="Medium")currLevel=3;
    else currLevel=2;
    console.log(option);
}
let score = 0, time = currLevel;
let playing;
const sec = document.querySelector("#seconds");
const current_word = document.querySelector("#current-word");
const input_word = document.querySelector("#word-input");
const msg = document.querySelector("#message");
const display_time = document.querySelector("#time");
const display_score = document.querySelector("#score");
const highscore = document.querySelector("#highscore");

// RANDOM WORD ARRAY
const random_words = [
    'guideline',
    'outlet',
    'manage',
    'shift',
    'demonstrator',
    'prevent',
    'population',
    'insist',
    'future',
    'value',
    'film',
    'interest',
    'cake',
    'trail',
    'even',
    'blind',
    'insurance',
    'stadium',
    'suitcase',
    'virtue',
    'sheep',
    'dump',
    'medicine',
    'braid',
    'yearn',
    'apathy',
    'cater',
    'looting',
    'excitement',
    'limited',
    'consideration',
    'expertise',
    'excavate',
    'fight',
    'thank',
    'hostage',
    'coma',
    'beach',
    'affect',
    'ring',
    'gene',
    'keep',
    'draft',
    'bike',
    'right',
    'noise',
    'offender',
    'size',
    'smart',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// GAME INITIALIZATION
function init(){
    console.log('init');
    seconds.innerHTML=currLevel;
    show_word(random_words); //to show random words from array
    input_word.addEventListener('input',match);//match the input word with the shown word
    setInterval(timer,1000);//timer to type the given word
    setInterval(checkstatus,50);//to check status of the game 
}

// TO MATCH INPUT AND SHOWN WORD 
function match(){
    if(match_words()){
        playing=true;
        time=currLevel+1;
        show_word(random_words);
        input_word.value='';
        score++;
    }
    if(score===-1)display_score.innerHTML=0;
    else display_score.innerHTML=score;
}
function match_words(){
    if(input_word.value===current_word.innerHTML){
        msg.innerHTML='CORRECT';
        return true;
    }
    else{
        msg.innerHTML='';
        return false;
    }
}
function show_word(random_words){
    const index=Math.floor(Math.random() * random_words.length);//to generate random index
    current_word.innerHTML=random_words[index];//to show word at index
}

// TIMER TO TYPE IN THE GIVEN AMOUNT OF TIME
function timer(){
    if(time>0){
        time--;
    }
    else if(time==0){
        playing=false;
    }
    display_time.innerHTML=time;
}

// STATUS RECORD
function checkstatus(){
    if(playing===false && time===0){
        msg.innerHTML='GAME OVER !';
        if(highscore.innerHTML<score)highscore.innerHTML=score;
        score=-1;
    }
}