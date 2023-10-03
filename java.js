var startMinutes = 1;
let time = startMinutes * 60;
var countDownEl = document.getElementById('countdown')
var nextButton = document.getElementById("nextBtn")
var incorrectBtn1 = document.getElementById("btn1")
var incorrectBtn2 = document.getElementById("btn2")
var incorrectBtn3 = document.getElementById("btn3")
var correctBtn4 = document.getElementById("btn4")
var correctBtn5 = document.getElementById("btn5")
var incorrectBtn6 = document.getElementById("btn6")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


setInterval(updateCountdown,400)

function updateCountdown(){
const minutes  = Math.floor(time /60);
let seconds = time % 60;

countDownEl.innerHTML = ("Time " + minutes + ":" + seconds);
time--;
if (time <0) {
    alert("Times Up - Refresh to try again!"),
    clearInterval();
    countDownEl.innerHTML = null;
}



}; 400;







nextButton.addEventListener('click', setNextQuestion)


incorrectBtn1.addEventListener('click', incorrect)
incorrectBtn2.addEventListener('click', incorrect)
incorrectBtn3.addEventListener('click', incorrect)
correctBtn4.addEventListener('click', correct1)

correctBtn5.addEventListener('click',correct2)
incorrectBtn6.addEventListener('click', incorrect)






function incorrect(){
    questionElement.innerText ="Incorrect!",
    answerButtonsElement.innerText = "Game Over - Refresh to try again!",
    alert("Incorrect! - Refresh to try again!"),
    clearInterval();
    countDownEl.innerHTML = null;


};


function correct1(){
    questionElement.innerText = "Correct!",
    incorrectBtn1.style.display = 'none',
    incorrectBtn2.style.display = 'none',
    incorrectBtn3.style.display = 'none',
    correctBtn4.style.display = 'none',
   
    nextButton.style.display = 'block',
    nextButton.innerText = "Next";

};


function setNextQuestion(){
    questionElement.innerText = "Is Java  the same as Javascript?",
    incorrectBtn1.style.display = 'none',
    incorrectBtn2.style.display = 'none',
    incorrectBtn3.style.display = 'none',
    correctBtn4.style.display = 'none',
    correctBtn5.style.display = 'block',
    incorrectBtn6.style.display = 'block',
    
    nextButton.style.display = 'none'
    
    
};

function correct2(){
    countDownEl.innerHTML = "";
    questionElement.innerText = "You Win!",
    incorrectBtn1.style.display = 'none',
    incorrectBtn2.style.display = 'none',
    incorrectBtn3.style.display = 'none',
    correctBtn4.style.display = 'none',
    correctBtn5.style.display = 'none',
    incorrectBtn6.style.display = 'none',
    nextButton.style.display = 'none',
    event.stopPropagation();
    
    
   

};



