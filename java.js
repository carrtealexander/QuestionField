var startMinutes = 1;
let time = startMinutes * 60;
var countDownEl = document.getElementById('countdown')
var nextButton = document.getElementById("nextBtn")
var incorrectBtn1 = document.getElementById("btn1")
var incorrectBtn2 = document.getElementById("btn2")
var incorrectBtn3 = document.getElementById("btn3")
var correctBtn4 = document.getElementById("btn4")
var correctBtn5 = document.getElementById("btn5")
var correctBtn6 = document.getElementById("btn6")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


setInterval(updateCountdown,1000)

function updateCountdown(){
const minutes  = Math.floor(time /60);
let seconds = time % 60;

countDownEl.innerHTML = ("Time " + minutes + ":" + seconds);
time--;
if (time == 00) {
    alert("Times Up"),
    stopPropagation();
};


};







nextButton.addEventListener('click', setNextQuestion)


incorrectBtn1.addEventListener('click', incorrect)
incorrectBtn2.addEventListener('click', incorrect)
incorrectBtn3.addEventListener('click', incorrect)
correctBtn4.addEventListener('click', correct1)






function incorrect(){
    questionElement.innerText ="Incorrect!",
    answerButtonsElement.innerText = "Game Over - Refresh to try again!"


};


function correct1(){
    questionElement.innerText = "Correct!"
    answerButtonsElement.innerText = "Great Job!",
    nextButton.style.display = 'block',
    nextButton.innerText = "Next";

};


function setNextQuestion(){
    questionElement.innerText = "Is Java  the same as Javascript?",
    answerButtonsElement.innerText = ("True "+ "or" + " False"),
    
    nextButton.style.display = 'none'
    
    
};



