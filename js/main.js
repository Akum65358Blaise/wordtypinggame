window.addEventListener('load', init);
//Available Levels in the
const levels = {
 easy:5,
 medium:3,
 hard:2
}
//to change level
const currentLevel=levels.medium;
let time=currentLevel;
let isplaying;
let score=0;

// Globals



// To change level


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'blaise',
  'river',
  'james',
  'akongwi',
  'generate',
  'stubborn',
  'basil',
  'amel',
  'overwhelmed',
  'myles',
  'brice',
  'hero',
  'javascript',
  'ojong',
  'crepin',
  'kamayang',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'philosopher',
  'jasper',
  'space',
  'definition'
];

// Initialize Game
function init(){
  //show number of seconds in the UI
  seconds.innerHTML=currentLevel;
  showWords(words);
  wordInput.addEventListener('input',startMatch);
  //call the countdown every second
  setInterval(showTime,1000);
  //check the status of the game if its over
  setInterval(checkStatus,50);
}
function startMatch(){
  if(matchWords()) {
   isplaying=true;
   time=currentLevel + 1;
   showWords(words);
   wordInput.value = '';
   score++;
  }

  //if score is -1 display 0
  if(score===-1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  }
  
}
//compare current input to the word displayed
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML='correct chief!!!!';
    return true;
  }else{
    message.innerHTML="sorry you missed it!!!!"
    return false;
  }
}
function showWords(words){
  const displayword=Math.floor(Math.random()*words.length);
  currentWord.innerHTML=words[displayword];
}
//display time counting down
function showTime(){
  if(time>0){
   time--;
  } else if(time===0)
  {
    isplaying=false;
  }
  timeDisplay.innerHTML=time;
}
//check game status
function checkStatus(){
  if(!isplaying && time==0){
    message.innerHTML="Hey chief your game is over!!!";
    score=-1;
  }
}
 


