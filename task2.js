const questions = [
  {
    question: "1. Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "2. What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "3. Which is used to make websites interactive?",
    options: ["CSS", "HTML", "JavaScript", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "4. Which tag is used to embed a video in HTML?",
    options: ["<video>", "<vid>", "<media>", "<iframe>"],
    answer: "<video>"
  },
  {
    question: "5. Which HTML attribute is used for inline styles?",
    options: ["style", "class", "id", "css"],
    answer: "style"
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("appContainer").style.display = "block";
    document.getElementById("userName").textContent = name;
    loadQuestion();
  } else {
    alert("Please enter your name!");
  }
}

function logout() {
  document.getElementById("loginContainer").style.display = "flex";
  document.getElementById("appContainer").style.display = "none";
  document.getElementById("username").value = "";
  currentQuestion = 0;
  correctAnswers = 0;
  updateProgress(0);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionText").textContent = q.question;
  const optionsDiv = document.getElementById("optionsContainer");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    alert("✅ Correct!");
    correctAnswers++;
  } else {
    alert("❌ Wrong! Correct: " + questions[currentQuestion].answer);
  }

  currentQuestion++;
  updateProgress((correctAnswers / questions.length) * 100);

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("questionText").textContent = "Quiz Completed!";
    document.getElementById("optionsContainer").innerHTML = `You got ${correctAnswers} out of ${questions.length} correct. 🎉`;
  }
}

function updateProgress(percent) {
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");
  bar.style.width = percent + "%";
  text.textContent = "Progress: " + Math.round(percent) + "%";
}
