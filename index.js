document.addEventListener("DOMContentLoaded", () => {


const answerElement = document.querySelectorAll(".answer input");
const questionElement = document.querySelectorAll(".question");
let currentQuestionIndex = 0;


questionElement.forEach((question, index) => {
    if (index === 0) {
        question.style.display = "flex";
    } else {
        question.style.display = "none";
    }

});



answerElement.forEach(answer => {
    answer.addEventListener("click", (event) => {

if (checkAnswer(event)) {
    nextQuestion();
} else {
    alert("Incorrect! Try again")
}

    })
})

function nextQuestion() {
    questionElement[currentQuestionIndex].style.display = "none";
    currentQuestionIndex ++;
    if (currentQuestionIndex < questionElement.length) {
        questionElement[currentQuestionIndex].style.display= "flex";
    } else {
        alert("Quiz is done! Please restart")
    }
}

function checkAnswer (event) {
   const selectedAnswer = event.target.value;
   const question = event.target.closest(".question");
    
  if((question.id === "question1" && selectedAnswer === "Paris")||
     (question.id === "question2" && selectedAnswer === "Mars") ||
     (question.id === "question3" && selectedAnswer === "Blue whale")) {
    console.log("Correct!") 
    return true;
} else {
    return false;
}

}







})