var startMinutes = 1;
let time = startMinutes * 60;
var countDownEl = document.getElementById('countdown')
var nextButton = document.getElementById("nextBtn")
var incorrectBtn1 = document.getElementById("btn1")
var incorrectBtn2 = document.getElementById("btn2")
var incorrectBtn3 = document.getElementById("btn3")
var correctBtn4 = document.getElementById("btn4")
var incorrectBtn5 = document.getElementById("btn5")
var correctBtn6 = document.getElementById("btn6")
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

incorrectBtn5.addEventListener('click',incorrect)
correctBtn6.addEventListener('click', correct2)






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
    questionElement.innerText = "Java is the same as Javascript?",
    incorrectBtn1.style.display = 'none',
    incorrectBtn2.style.display = 'none',
    incorrectBtn3.style.display = 'none',
    correctBtn4.style.display = 'none',
    incorrectBtn5.style.display = 'block',
    correctBtn6.style.display = 'block',
    
    nextButton.style.display = 'none'
    
    
};

function correct2(){
    
    questionElement.innerText = "Correct! You Win!",
    incorrectBtn1.style.display = 'none',
    incorrectBtn2.style.display = 'none',
    incorrectBtn3.style.display = 'none',
    correctBtn4.style.display = 'none',
    incorrectBtn5.style.display = 'none',
    correctBtn6.style.display = 'none',
    nextButton.style.display = 'none',
    countDownEl.style.display ='none'
   
    
    
    
   

};



