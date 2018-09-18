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
instruc.classList = 'center';
center.appendChild(instruc);


//Inputfield
var typeInput = document.createElement('input') ;
typeInput.setAttribute('type', 'text');
typeInput.classList = 'center';
typeInput.autofocus = true;
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
var scoreNum = document.createElement('h5') ;
scoreNum.id = 'scoreNum' ;
scoreNum.innerText = '0' ;
scoreSpace.appendChild(scoreNum) ;

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
window.addEventListener('load',intro)

let time = 100 ;
let score = 0 ;
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
]

// +++++++++++++++
// Make Password
// +++++++++++++++

//make random string

var randomStr = function(){
    var length = 6
    charSet ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    retVal=''
    for(var i = 0 , len = charSet.length ; i<length ; i++){
        retVal += charSet.charAt(Math.floor(Math.random() * len))
    }
    return retVal
}


console.log(prepStr)

//function pushing new word into array 

var words = [];

for(var i = 0 ; i< 2000 ; i++){
    var prepStr = randomStr()
    words.push(prepStr)
}

console.log(words)


//Start Intro
function intro(){
    function welcomeWord(){ 
        currentWord.innerText = 'Lets Type!'
        message.innerText = `Type the word above in ${time} seconds`;
    }
    setTimeout(welcomeWord() , 2000)
    setTimeout(init,2000)

}

//Initialise game
function init(){
    wordInput.addEventListener('input',startGame) ;
    message.innerText=`Start typing!`
    showWord(words) ;
    setInterval(countdown,1000) ;
    setInterval(checkStatus,0.1) ;
}

//start game
var startGame = function(){
    if(matchWord()){
    isPlaying = true
    showWord(words)
    wordInput.value = '';
    currentWord.style.color = 'black' ;
    currentWord;
    score ++ ;
    }
scoreDisplay.innerText = score
}

//match words
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
        return false;
     }
}
     

//pick and show random word
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

//pick and show random praise
var showPraise = function(){
    const randIndexPraise = Math.floor(Math.random()*praise.length)
    message.innerText = praise[randIndexPraise] ;
}

//set Timer
var countdown= function(){
    if(time > 0){
        if(time >= 11){
            time -- ;
            isPlaying = true ;
        }
        else if(time <= 11){
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
    typeInput.style.visibility = 'hidden' ;
    message.innerHTML = 'Try Again?' ;
    message.style.color = 'red' ;
    message.style.fontSize = '4rem' ;
    currentWord.innerHTML = 'GAME OVER' ;
    currentWord.style.color = 'red' ;
    }
    else{
       isPlaying = true ; 
    }
}

//detecting each letter of word and making it light up green.
var index = 0;
wordInput.addEventListener('keyup' , function() {

    var events = event.key;
    var checkForLetter = currentWord.innerText;
    var check = checkForLetter.indexOf(events);
    console.log(events)
    console.log(check);
    console.log(currentWord.innerText);
    console.log(index)
    var dom = document.getElementsByTagName("span");
    console.log(dom[index].innerText)
    if (check >= 0 && dom[index].innerText == events) {

        dom[index].style.color = "green";
        index += 1;
    }
    
})


    
    