const questions = [
  {
    question: "what is your favorite color?",
    answers: [
      { text: "blue", correct: false },
      { text: "red", correct: false },
      { text: "green", correct: true },
      { text: "yellow", correct: false },
    ],
  },
  {
    question: "what is your favorite car?",
    answers: [
      { text: "Colrola", correct: false },
      { text: "BMW", correct: true },
      { text: "Mirsidas", correct: false },
      { text: "Bens", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const questionButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetSate();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    questionButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetSate() {
  nextButton.style.display = "none";
  while (questionButtons.firstChild) {
    questionButtons.removeChild(questionButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(questionButtons.children).map((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  nextButton.style.display = "block";
}

startQuiz();
