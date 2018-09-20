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

//Mainword
var mainWord = document.createElement('h1') ;
mainWord.id = 'mainWord' ;
mainWord.classList.add("typewriter");
mainWord.innerText = 'CHOCOLATE' ;
document.body.appendChild(mainWord) ;

//Create Div called center as container
var center = document.createElement('div');
center.id='center';
document.body.appendChild(center);

//Instruction
var instruc =document.createElement('h4');
instruc.id = 'instruc' ;
instruc.classList = 'center';
center.appendChild(instruc);

//Inputfield
var typeInput = document.createElement('input') ;
typeInput.setAttribute('type', 'text');
typeInput.classList = 'center';
typeInput.autofocus = true;
typeInput.id = 'input'
center.appendChild(typeInput) ;

//Create Div for score with ID = scoreSpace
var scoreSpace = document.createElement('div') ;
scoreSpace.id = 'scoreSpace' ;
document.body.appendChild(scoreSpace) ;

//score Number
var scoreNum = document.createElement('h5') ;
scoreNum.id = 'scoreNum' ;
scoreNum.innerText = '0' ;
scoreSpace.appendChild(scoreNum) ;

//Score Title
var scoreTitle = document.createElement('h5')
scoreTitle.id = 'scoreTitle'
scoreTitle.innerText = 'SCORE'
scoreSpace.appendChild(scoreTitle)

//Create Div for Timer with ID = TimerSpace
var timerSpace = document.createElement('div') ;
timerSpace.id = 'timerSpace' ;
document.body.appendChild(timerSpace) ;

//timer Number
var timer = document.createElement('h5') ;
timer.id = 'timer';
timer.innerText = '0' ;
timerSpace.appendChild(timer) ;

//timer Title
var timerTitle = document.createElement('h5') ;
timerTitle.id = 'timerTitle'
timerTitle.innerText = 'TIME'
timerSpace.appendChild(timerTitle)


// ++++++++
// Gameplay
// ++++++++
//once loaded run intro
window.addEventListener('load',intro)

//declaring and initialising working variables
let time = 60 ;
score = 0 ;
let isPlaying;

const wordInput = typeInput ;
const currentWord = mainWord ;
const scoreDisplay = scoreNum ;
const timeDisplay = timer ;
const message = instruc ;


const praise = [
    'Good job',
    'Right on',
    'Well done',
    'Excellent',
    'Outstanding',
    'Wonderful',
    'You Rock!',
    'You Rule!',
    'Amazing',
    'Easy!',
]

const promptWrong = [
    'Are you sure?',
    'Have another look?',
    'Check again?'
]

// +++++++++++++++
// Make Password
// +++++++++++++++

//make random string : Easy

var randomStr = function(){
    var length = 5
    charSet ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    retVal=''
    for(var i = 0 , len = charSet.length ; i<length ; i++){
        retVal += charSet.charAt(Math.floor(Math.random() * len))
    }
    return retVal
}

//make random string : Medium
var randomStrNum = function(){
    var length = 7
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    retVal = ''
    for(var i = 0 , len = charSet.length ; i<length ; i++){
        retVal += charSet.charAt(Math.floor(Math.random() * len))
    }
    return retVal
}

//make random string : Hard
var randomSym = function(){
    var length = 10
    charSet = '~!@#$%^*()_+{}[]|:/?><ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    retVal = ''
    for(var i =0 , len = charSet.length ; i<length ; i++){
        retVal += charSet.charAt(Math.floor(Math.random()* len))
    }
    return retVal
}

//function Letters into array
var words = [];

for(var i = 0 ; i< 200 ; i++){
    var prepStr = randomStr()
    words.push(prepStr)
}

//function Letters+Num into array
var wordNum = []

for(var i = 0 ; i<200 ; i++){
    var prepStrNum = randomStrNum()
    wordNum.push(prepStrNum)
}

//function Letter+Num+Sym into array
var symArr = []

for(var i =0 ; i<200 ; i++){
    var prepSym = randomSym()
    symArr.push(prepSym)
}

console.log(symArr)

// +++++++++++++++
// Game Functions
// +++++++++++++++

//Start Intro
function intro(){
    function welcomeWord(){
        currentWord.innerText = 'Lets Type!'
        message.innerText = `Type in ${time} secs.Press Y to start.`;
        var box = document.getElementById('input') ;

    }
    setTimeout(welcomeWord() , 2000)
}

//Event Listener : Press y to Start
wordInput.addEventListener('keyup',function(event){
    if(input.value == 'y' ){
    input.value = ''
    init()
    }
})

//Function Initialise game
function init(){
    wordInput.addEventListener('input',startGame) ;
    message.innerText=`Start typing!`
    pickArr() ;
    setInterval(countdown,1000) ;
    setInterval(checkStatus,1000) ;
}

//Function starting game
var startGame = function(){
    if(matchWord()){
    isPlaying = true
    pickArr();
    wordInput.value = '';
    currentWord.style.color = 'black' ;
    currentWord;;
    score ++ ;
    }
scoreDisplay.innerText = score
}

//Function match words
var matchWord=function(){
    if(wordInput.value === currentWord.innerText){
        instruc.style.color = 'green'
        showPraise();
        console.log('Match')
        currentWord.style.webkitAnimationPlayState="running";
         return true
    }
    else{
        message.innerText != null ;
        instruc.style.color = 'black' ;
        instruc.innerText = 'typing...';
    }
}

//Function pick and show random word
var showWord = function(){

    index = 0;
    const randIndexWord = Math.floor(Math.random()*words.length)
    currentWord.innerText = "";

    for (var i = 0 ; i<words[randIndexWord].length; i++){
        var eachLetter = document.createElement('span')
        var splittedWords = words[randIndexWord].split("");
        eachLetter.id = i;
        eachLetter.innerHTML = splittedWords[i];
        document.getElementById("mainWord").appendChild(eachLetter);
    }
}

//Function pick and show random wordNum
var showWordNum = function(){

    index = 0;
    const randIndexWordNum = Math.floor(Math.random()*wordNum.length)
    currentWord.innerText = ''

    for(var i =0;i<wordNum[randIndexWordNum].length;i++){
        var eachLetter = document.createElement('span')
        var splittedWords = wordNum[randIndexWordNum].split('')
        eachLetter.id = i;
        eachLetter.innerHTML = splittedWords[i];
        document.getElementById('mainWord').appendChild(eachLetter);
    }
}

//Function pick and show random symArr
var showSymArr = function(){
    index = 0
    const randIndxSym = Math.floor(Math.random()*symArr.length)
    currentWord.innerText = ''

    for(var i =0 ; i<symArr[randIndxSym].length;i++){
        var eachLetter = document.createElement('span')
        var splittedWords = symArr[randIndxSym].split('')
        eachLetter.id = i;
        eachLetter.innerHTML = splittedWords[i]
        document.getElementById('mainWord').appendChild(eachLetter)
    }
}

//Function to decide if show word , word+num or word+num+symbol
var pickArr = function(){
    if(score <= 3){ //score is more than 3
        showWord(words)
    }
    else if (score < 7){ // score is more than 5
        showWordNum(wordNum)
    }
    else{
        showSymArr(symArr)
    }
}

//Function `pick and show random praise
var showPraise = function(){
    const randIndexPraise = Math.floor(Math.random()*praise.length)
    message.innerText = praise[randIndexPraise] ;
}

//pick and show random prompt
var showPrompt = function(){
    const randIndexPrompt = Math.floor(Math.random()*promptWrong.length)
    message.innerText = promptWrong[randIndexPrompt];
}

//Function set Timer
var countdown= function(){
    if(time > 0){
        if(time >= 11){
            time -- ;
            isPlaying = true ;
        }
        else if(time <= 11){
            time -- ;
            timeDisplay.style.color = 'red';
            timeDisplay.classList.add("blink");
            isPlaying = true ;
         }
    }
    else if(time === 0){
        timeDisplay.style.color = 'red';
        isPlaying = false;
    }
    timeDisplay.innerHTML=time;
}

//Function set Timeout for 10 secs to restart game
var timeoutdur = 10;

function minustimeout(){
    timeoutdur --
    return timeoutdur
}

//Function check game status
var checkStatus = function(){
    if(!isPlaying && time === 0){ ;
    setTimeout(function(){location.reload()},8000)
    wordInput.style.visibility ='hidden';
    timeDisplay.classList.remove("blink")
    mainWord.classList.remove("typewriter");
    message.classList.add("blink");
    mainWord.classList.add("blink");
    setInterval(minustimeout(),1000)
    message.innerText = `Game will restart in ${timeoutdur} secs `
    message.style.color = 'red' ;
    message.style.fontSize = '4rem' ;
    currentWord.innerHTML = 'GAME OVER' ;
    currentWord.style.color = 'red' ;
    wordInput.removeEventListener('keyup' , checkLetterByLetter);
    }
    else{
       isPlaying = true ;
    }
}

//Function detecting each letter of word and making it light up green.
var index = 0;
var checkLetterByLetter = function() {

    var events = event.key;
    var checkForLetter = currentWord.innerText;
    var check = checkForLetter.indexOf(events);
    var dom = document.getElementsByTagName("span");
    var indexVal = document.getElementsByTagName("span")[index]
    var indexInVal = indexVal.innerHTML
    console.log(indexVal.innerHTML)
    console.log(events);
    if (indexInVal === events) {
        dom[index].style.color = "green";
        index += 1;

    }
    if (wordInput.value.length >= currentWord.innerText.length){
        console.log('not tally')
        showPrompt();
        message.style.color = 'red'
    }

}

//Event Listener : To run above function
wordInput.addEventListener('keyup' , checkLetterByLetter);