
// const CyberSData = [
//     {jobTittle: "Security Architect", experience: [7], openRoles: 8000},
//     {jobTitle: "governance & Compliance Specialist", experience: [5], openRoles: 10000},
//     {jobTitle: "Incident Response Manager", experience: [4, 5, 6], openRoles:18000},
//     {jobTitle: "Cloud Security Engineer", experience: [3, 4, 5], openRoles: 25000},
//     {jobTitle: "Threat Intelligence Analyst", experience: [2, 3, 4], openRoles: 15000},
//     {jobTitle: "Cybersecurity Analyst", experience: [1, 2, 3], openRoles: 32000}
// ];

// Function to generate a hashed password and display it
function generateHash() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput) {
      const hash = btoa(passwordInput); // Simple base64 encoding for illustration
      document.getElementById('hash-result').innerHTML = `<strong>Hashed Password:</strong> ${hash}`;
      updateProgress(50); // Update progress bar to 50% for this exercise
    } else {
      document.getElementById('hash-result').innerHTML = '<span style="color: red;">Please enter a password.</span>';
    }
  }
  
  // Password strength checker
  document.getElementById('strength-password').addEventListener('input', function() {
    const strengthResult = document.getElementById('strength-result');
    const password = this.value;
    let strength = 0;
  
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
  
    const messages = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    strengthResult.textContent = `Strength: ${messages[strength - 1]}`;
    strengthResult.style.color = ["red", "orange", "yellow", "green", "blue"][strength - 1];
  });
  
  // Simple quiz data
  const quizData = [
    { question: "What is a brute force attack?", options: ["A guessing attack", "A phishing attack", "A virus"], answer: "A guessing attack" },
    { question: "What does encryption do?", options: ["Hides data", "Protects data", "Duplicates data"], answer: "Protects data" }
  ];
  
  // Function to start the quiz
  function startQuiz() {
    let quizHTML = '<h3>Quiz</h3>';
    quizData.forEach((q, index) => {
      quizHTML += `<p>${q.question}</p>`;
      q.options.forEach(option => {
        quizHTML += `<label><input type="radio" name="question${index}" value="${option}"> ${option}</label><br>`;
      });
    });
    quizHTML += `<button onclick="checkQuiz()">Submit Answers</button>`;
    document.getElementById('quiz-section').innerHTML = quizHTML;
  }
  
  // Function to check quiz answers and display modal with results
  function checkQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
      const answer = document.querySelector(`input[name="question${index}"]:checked`);
      if (answer && answer.value === q.answer) {
        score++;
      }
    });
  
    const modal = document.getElementById('modal');
    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = `You scored ${score}/${quizData.length}. ${score === quizData.length ? "Excellent!" : "Keep learning!"}`;
    modal.style.display = 'flex';
    updateProgress(100); // Update progress bar to 100% for completing the quiz
  }
  
  // Close modal function
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // Function to update progress bar
  function updateProgress(percent) {
    document.getElementById('progress-bar-fill').style.width = `${percent}%`;
  }
  
