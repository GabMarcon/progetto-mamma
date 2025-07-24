document.addEventListener("DOMContentLoaded", () => {
  const questionTextElement = document.getElementById("question-text");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const quizBox = document.getElementById("quiz-box");
  const scoreContainer = document.getElementById("score-container");
  const scoreText = document.getElementById("score-text");
  const progressTextElement = document.getElementById("progress-text");
  const progressBarFullElement = document.getElementById("progress-bar-full");
  const explanationBox = document.getElementById("explanation-box");
  const explanationText = document.getElementById("explanation-text");
  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentQuizName = urlParams.get("quiz");
    if (!quizzes[currentQuizName] || quizzes[currentQuizName].length === 0) {
      quizBox.innerHTML = `<h2>Erro: Quiz "${currentQuizName}" não encontrado ou está vazio!</h2> <a href="praticare.html" class="btn">Voltar</a>`;
      return;
    }
    currentQuiz = quizzes[currentQuizName];
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = currentQuiz[currentQuestionIndex];
    questionTextElement.innerText = `${currentQuestionIndex + 1}. ${
      currentQuestion.pergunta
    }`;
    progressTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} / ${
      currentQuiz.length
    }`;
    const progressPercent =
      ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    progressBarFullElement.style.width = `${progressPercent}%`;
    currentQuestion.opcoes.forEach((opcao) => {
      const button = document.createElement("button");
      button.innerText = opcao;
      button.classList.add("btn", "answer-btn");
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    document.body.classList.remove("answered");
    nextButton.classList.add("hidden");
    explanationBox.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(e) {
    document.body.classList.add("answered");
    const selectedBtn = e.target;
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedBtn.innerText === currentQuestion.resposta;
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach((button) => {
      if (button.innerText === currentQuestion.resposta) {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    if (currentQuestion.explicacao) {
      explanationText.innerHTML = currentQuestion.explicacao;
      explanationBox.classList.remove("hidden");
    }
    nextButton.classList.remove("hidden");
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  function showScore() {
    quizBox.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreText.innerText = `Você acertou ${score} de ${currentQuiz.length} perguntas!`;
  }

  nextButton.addEventListener("click", handleNextButton);
  startQuiz();
});
