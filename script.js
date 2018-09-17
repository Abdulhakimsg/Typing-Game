// Name:Abdul Hakim
// Date:250918
// Purpose:Typing Game

// +++++++
// Styling
// +++++++

// Create Div for titleSpace as container
var titleSpace = document.createElement('div') ;
titleSpace.id = 'titleSpace' ;
document.body.appendChild(titleSpace) ;

//word
var mainWord = document.createElement('h1') ;
mainWord.id = 'mainWord' ;
mainWord.innerText = 'CHOCOLATE' ;
document.body.appendChild(mainWord) ;

//Create Div called center as container
var center = document.createElement('div');
center.id='center';
document.body.appendChild(center);

//Instruction
var instruc =document.createElement('h4');
instruc.id = 'instruc' ;
instruc.innerText = 'Type the word above in 5 seconds';
instruc.classList = 'center';
center.appendChild(instruc);


//Inputfield
var typeInput = document.createElement('input') ;
typeInput.setAttribute('type', 'text');
typeInput.classList = 'center';
typeInput.id = 'input'
center.appendChild(typeInput) ;

//Button Submit
// var submit = document.createElement('INPUT') ;
// submit.setAttribute('type' , 'submit');
// submit.classList = 'center'
// submit.id = 'submit'
// center.appendChild(submit) ;


//Create Div for score with ID = scoreSpace
var scoreSpace = document.createElement('div') ;
scoreSpace.id = 'scoreSpace' ;
document.body.appendChild(scoreSpace) ;

//score
var score = document.createElement('h5') ;
score.id = 'score'
score.innerText = '0'
scoreSpace.appendChild(score) ;

//Create Div for Timer with ID = TimerSpace
var timerSpace = document.createElement('div') ;
timerSpace.id = 'timerSpace' ;
document.body.appendChild(timerSpace) ;

//timer
var timer = document.createElement('h5') ;
timer.id = 'timer';
timer.innerText = '0' ;
timerSpace.appendChild(timer) ;

//Create Line for Footer
var footer = document.createElement('div')
footer.id = 'footer'
document.body.appendChild(footer)

//Score


// ++++++++
// Gameplay
// ++++++++

window.addEventListener('load',init)

//
let time = 11 ;
score = 0 ;
let isPlaying;

const wordInput = typeInput ;
const currentWord = mainWord ; 
const scoreDisplay = score ;
const timeDisplay = timer ;
const message = instruc ;

const words = [
    'hello',
    'hi',
    'mabuhay',
]

const praise = [
    'Good job',
    'Right on',
    'Well done',
    'Excellent',
    'Outstanding',
]

//Initialise game
function init(){
    wordInput.addEventListener('input',startGame) ;
    showWord(words) ;
    setInterval(countdown,1000) ;
    setInterval(checkStatus,50) ;
}

//start game
var startGame = function(){
    if(matchWord()){
    return true
    }
    else{

        return false;
    }
}

//match words
var matchWord=function(){
    if(wordInput.value === currentWord.innerText){
        currentWord.style.color = 'green';
        setTimeout(showPraise , 500);
        console.log('Match')
        return true
    }
    else{
        console.log('not true')
        return false;
    }
}


//pick and show random word
var showWord = function(){
    const randIndexWord = Math.floor(Math.random()*words.length)
    currentWord.innerText = words[randIndexWord];
}

//pick and show random praise
var showPraise = function(){
    const randIndexPraise = Math.floor(Math.random()*praise.length)
    message.innerText = praise[randIndexPraise] ;
}

//set Timer
var countdown= function(){
    if(time > 0){
        if(time >= 10){
            time -- ;
            isPlaying = true ;
        }
        else if(time < 10){
            time -- ;
            timeDisplay.style.color = 'red';
            isPlaying = true ;
         }
    }
    else if(time === 0){
        timeDisplay.style.color = 'red';
        isPlaying = false;
    }
    timeDisplay.innerHTML=time;
}

//check game status
var checkStatus = function(){
    if(!isPlaying && time === 0){
    message.innerHTML = 'Try Again?' ;
    message.style.color = 'red' ;
    message.style.fontSize = '4rem' ;
    currentWord.innerHTML = 'GAME OVER' ;
    currentWord.style.color = 'red' ;
    }
}




