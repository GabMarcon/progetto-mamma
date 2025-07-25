document.addEventListener("DOMContentLoaded", () => {
  const questionTextElement = document.getElementById("question-text");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const quizBox = document.getElementById("quiz-box");
  const scoreContainer = document.getElementById("score-container");
  const scoreText = document.getElementById("score-text");
  const progressTextElement = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const explanationBox = document.getElementById("explanation-box");
  const explanationText = document.getElementById("explanation-text");

  let currentQuiz = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let progressSegments = [];

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
    progressSegments = [];
    setupProgressBar();
    scoreContainer.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion();
  }

  function setupProgressBar() {
    progressBar.innerHTML = "";
    for (let i = 0; i < currentQuiz.length; i++) {
      const segment = document.createElement("div");
      segment.classList.add("progress-segment");
      progressBar.appendChild(segment);
      progressSegments.push(segment);
    }
  }

  function showQuestion() {
    resetState();
    let currentQuestion = currentQuiz[currentQuestionIndex];
    progressTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} / ${
      currentQuiz.length
    }`;
    questionTextElement.innerText = currentQuestion.pergunta;
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
    const correctAnswStr = currentQuestion.resposta;

    const currentSegment = progressSegments[currentQuestionIndex];

    // Desabilita todos os botões e destaca a resposta correta em verde
    Array.from(answerButtonsElement.children).forEach((button) => {
      button.disabled = true;
      if (button.innerText === correctAnswStr) {
        button.classList.add("correct");
      }
    });

    // Verifica se a resposta do usuário foi a correta
    if (selectedBtn.innerText === correctAnswStr) {
      score++;
      currentSegment.classList.add("correct");
    } else {
      // Se errou, destaca a escolha do usuário em vermelho
      selectedBtn.classList.add("incorrect");
      currentSegment.classList.add("incorrect");
    }

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

  function animateScore(finalScore, totalQuestions) {
    let currentScore = 0;
    scoreText.innerText = `Sua pontuação final foi 0 de ${totalQuestions}.`;
    if (finalScore === 0) return;
    const interval = setInterval(() => {
      currentScore++;
      scoreText.innerText = `Sua pontuação final foi ${currentScore} de ${totalQuestions}.`;
      if (currentScore >= finalScore) {
        clearInterval(interval);
      }
    }, 80);
  }

  function launchConfetti() {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
  }

  function showScore() {
    quizBox.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    animateScore(score, currentQuiz.length);
    if (score / currentQuiz.length >= 0.8) {
      setTimeout(launchConfetti, 200);
    }
  }

  nextButton.addEventListener("click", handleNextButton);
  startQuiz();
});
