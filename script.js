console.log(Date());
const newYears = "1 jan 2023";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



function countdown(){
    const newYearsDate = new Date(newYears);

    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) %60;

    // console.log(newYearsDate - currentDate);
    // console.log(days, hours, minutes, seconds);

daysEl.innerHTML = days;      
hoursEl.innerHTML = hours;
minsEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;


}

countdown();

setInterval(countdown, 1000);



//project 2  quize app

const quizData = [
    {
        question:'How old is developer',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },

    {
        question:'What is the most used programming language',
        a: 'java',
        b: 'c',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },

    {
        question:'Who is the president of Us?',
        a: 'Joe Biden',
        b: 'Ivan saldano',
        c: 'Donald Trump',
        d: 'Mithai Andrei',
        correct: 'a'
    },

    {
        question:'What does HTML stands for',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'json object Notation',
        d: 'Application programming interface',
        correct: 'a'
    },

    {
        question:'What year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    },
]


const questionEl = document.getElementById('question'); 

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz(){
    // deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // currentQuestion ++;
}


function getSelected() {
 const answersEls = document.querySelectorAll
 ('.answer');   
 let answer = undefined;

 answersEls.forEach((answersEls) => {
    if(answersEls.checked){
        answer =  answersEls.id;
    }
 });

 return answer;
}


function deselectAnswers() {
    answersEls.forEach((answersEls) => {
    answersEls.checked = false;
    });
}


submitBtn.addEventListener('click', () =>{
//check to see the answer 
    const answer = getSelected();

    console.log(answer);
if(answer) {
    if(answer === quizData[currentQuiz].correct){
        score ++;
    }
    
   

        
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // TODO: show results
            // alert("You finished the test");
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizeData.length} questions.</h2>`
        }
    }


   

    // loadQuiz();
});



//fetch cat image from exteral api though json file
const imgreplace = document.getElementById("imgreplace")
const getcat = document.getElementById("getcat");

getcat.addEventListener("click", fetchimage);

function fetchimage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        imgreplace.innerHTML = `<img src="${data.message}"/>`
        console.log(data.message);
    });
}







































