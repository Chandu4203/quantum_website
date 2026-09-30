const questions = [
  // ==================== FOUNDATIONS ====================
  {
    category: 'FOUNDATIONS',
    question: 'What is quantum computing primarily based on?',
    answers: ['Classical Boolean logic', 'Principles of quantum mechanics', 'Mechanical computation', 'Binary arithmetic alone'],
    correct: 1
  },
  {
    category: 'FOUNDATIONS',
    question: 'What is the fundamental unit of quantum information?',
    answers: ['Bit', 'Byte', 'Qubit', 'Pixel'],
    correct: 2
  },
  {
    category: 'FOUNDATIONS',
    question: 'What are the possible states of a classical bit?',
    answers: ['0 and 1 simultaneously', 'Only 0 or 1', 'Any complex number', 'Infinite states'],
    correct: 1
  },
  {
    category: 'FOUNDATIONS',
    question: 'What makes a qubit different from a classical bit?',
    answers: ['It can exist in a superposition of basis states', 'It always stores two readable bits', 'It has no measurable state', 'It only represents the number 2'],
    correct: 0
  },
  {
    category: 'FOUNDATIONS',
    question: 'Which expression represents a general single-qubit state?',
    answers: ['|ψ⟩ = α|0⟩ + β|1⟩', '|ψ⟩ = 0 + 1', '|ψ⟩ = α + β', '|ψ⟩ = 01'],
    correct: 0
  },
  {
    category: 'FOUNDATIONS',
    question: 'What is the primary purpose of quantum gates?',
    answers: ['Store classical files', 'Manipulate quantum states', 'Increase computer memory', 'Convert Python into Java'],
    correct: 1
  },
  {
    category: 'FOUNDATIONS',
    question: 'Which quantum gate creates an equal superposition from |0⟩?',
    answers: ['Pauli-X gate', 'Hadamard gate', 'CNOT gate', 'Identity gate'],
    correct: 1
  },
  {
    category: 'FOUNDATIONS',
    question: 'What happens when a qubit is measured in the computational basis?',
    answers: ['It always produces 0', 'It always produces 1', 'It produces a classical outcome of 0 or 1', 'It produces an imaginary number'],
    correct: 2
  },
  {
    category: 'FOUNDATIONS',
    question: 'What is quantum entanglement?',
    answers: ['A type of classical encryption', 'Quantum correlations between systems that cannot be described as independent states', 'A programming language', 'A method of increasing CPU speed'],
    correct: 1
  },
  {
    category: 'FOUNDATIONS',
    question: 'Which statement about quantum computing is correct?',
    answers: ['It replaces every classical computer', 'It solves every problem instantly', 'It can provide advantages for certain computational problems', 'It requires no electricity'],
    correct: 2
  },

  // ==================== SUPERPOSITION ====================
  {
    category: 'SUPERPOSITION',
    question: 'What does superposition mean in quantum computing?',
    answers: ['A qubit has a combination of possible basis-state amplitudes', 'A qubit stores unlimited readable classical data', 'Two computers run simultaneously', 'A computer performs no calculations'],
    correct: 0
  },
  {
    category: 'SUPERPOSITION',
    question: 'What is the probability of measuring 0 from the state (|0⟩ + |1⟩)/√2?',
    answers: ['0%', '25%', '50%', '100%'],
    correct: 2
  },
  {
    category: 'SUPERPOSITION',
    question: 'Which mathematical property allows quantum amplitudes to combine?',
    answers: ['Integer division', 'Linear algebra', 'Boolean subtraction', 'String concatenation'],
    correct: 1
  },
  {
    category: 'SUPERPOSITION',
    question: 'What is the state of a qubit after applying a Hadamard gate to |0⟩?',
    answers: ['(|0⟩ + |1⟩)/√2', '|0⟩ only', '|1⟩ only', '(|0⟩ - |1⟩)/2'],
    correct: 0
  },
  {
    category: 'SUPERPOSITION',
    question: 'What happens to a qubit when it is measured in the computational basis?',
    answers: ['All amplitudes become readable', 'It produces one classical measurement outcome', 'It creates unlimited copies', 'It always produces 0'],
    correct: 1
  },

  // ==================== INTERFERENCE ====================
  {
    category: 'INTERFERENCE',
    question: 'What is quantum interference?',
    answers: ['Interaction between classical computers', 'Combining probability amplitudes constructively or destructively', 'Randomly deleting qubits', 'Increasing the number of classical bits'],
    correct: 1
  },
  {
    category: 'INTERFERENCE',
    question: 'What happens during constructive interference?',
    answers: ['Amplitudes reinforce each other', 'Amplitudes always cancel', 'Qubits become classical bits', 'All outcomes disappear'],
    correct: 0
  },
  {
    category: 'INTERFERENCE',
    question: 'What happens during destructive interference?',
    answers: ['Amplitudes always increase', 'Amplitudes cancel or reduce one another', 'Amplitudes become infinite', 'Quantum states become strings'],
    correct: 1
  },
  {
    category: 'INTERFERENCE',
    question: 'Why is interference useful in quantum algorithms?',
    answers: ['It guarantees every answer is correct', 'It can amplify desired outcomes and suppress unwanted outcomes', 'It removes all computational costs', 'It allows direct reading of every amplitude'],
    correct: 1
  },
  {
    category: 'INTERFERENCE',
    question: 'What happens when a Hadamard gate is applied twice consecutively to |0⟩?',
    answers: ['The state becomes |1⟩', 'The state returns to |0⟩', 'The state becomes permanently random', 'The state becomes |0⟩ + |1⟩ without normalization'],
    correct: 1
  },

  // ==================== QUANTUM SPEEDUP ====================
  {
    category: 'QUANTUM SPEEDUP',
    question: 'Why is quantum computing not a magical speedup for every problem?',
    answers: ['Quantum computers cannot perform calculations', 'Quantum algorithms need specific mathematical structures to gain advantages', 'Quantum computers cannot use algorithms', 'Quantum computers only perform addition'],
    correct: 1
  },
  {
    category: 'QUANTUM SPEEDUP',
    question: 'What does quantum parallelism refer to?',
    answers: ['Processing quantum state components through quantum operations', 'Running multiple operating systems', 'Using multiple keyboards', 'Increasing internet speed'],
    correct: 0
  },
  {
    category: 'QUANTUM SPEEDUP',
    question: 'Which statement about quantum speedup is accurate?',
    answers: ['All quantum algorithms are faster than classical algorithms', 'Quantum computers always outperform GPUs', 'Speedup depends on the problem and algorithm', 'Quantum computers eliminate computational costs'],
    correct: 2
  },
  {
    category: 'QUANTUM SPEEDUP',
    question: 'Why does measuring a superposition not reveal every possible answer?',
    answers: ['Measurement produces a classical outcome rather than exposing all amplitudes', 'Quantum computers cannot store information', 'Measurement always returns zero', 'Superposition contains no information'],
    correct: 0
  },
  {
    category: 'QUANTUM SPEEDUP',
    question: 'What is required to obtain a practical quantum advantage?',
    answers: ['A quantum algorithm suited to the problem and hardware capable of executing it', 'A quantum computer with unlimited memory', 'Removing all measurements', 'Using only classical bits'],
    correct: 0
  },

  // ==================== COMPLEX NUMBERS ====================
  {
    category: 'COMPLEX NUMBERS',
    question: 'What is the general form of a complex number?',
    answers: ['a + b', 'a + bi', 'ab', 'a/b'],
    correct: 1
  },
  {
    category: 'COMPLEX NUMBERS',
    question: 'What is the value of i²?',
    answers: ['1', '0', '-1', 'i'],
    correct: 2
  },
  {
    category: 'COMPLEX NUMBERS',
    question: 'What is the complex conjugate of 3 + 4i?',
    answers: ['3 + 4i', '-3 + 4i', '3 - 4i', '-3 - 4i'],
    correct: 2
  },
  {
    category: 'COMPLEX NUMBERS',
    question: 'What is the magnitude of the complex number 3 + 4i?',
    answers: ['7', '5', '12', '25'],
    correct: 1
  },
  {
    category: 'COMPLEX NUMBERS',
    question: 'What is the squared magnitude of z = a + bi?',
    answers: ['a + b', 'a² + b²', 'a - b', 'ab'],
    correct: 1
  },

  // ==================== VECTORS ====================
  {
    category: 'VECTORS',
    question: 'Which of the following is a valid two-dimensional vector?',
    answers: ['[1, 2]', '1 + 2', '1/2', '12'],
    correct: 0
  },
  {
    category: 'VECTORS',
    question: 'What is the standard column-vector representation of |0⟩?',
    answers: ['[0, 1]ᵀ', '[1, 0]ᵀ', '[1, 1]ᵀ', '[0, 0]ᵀ'],
    correct: 1
  },
  {
    category: 'VECTORS',
    question: 'What is the standard column-vector representation of |1⟩?',
    answers: ['[1, 0]ᵀ', '[1, 1]ᵀ', '[0, 1]ᵀ', '[0, 0]ᵀ'],
    correct: 2
  },
  {
    category: 'VECTORS',
    question: 'What condition must a normalized quantum state satisfy?',
    answers: ['The sum of amplitudes equals 0', 'The sum of squared magnitudes of amplitudes equals 1', 'Every amplitude equals 1', 'Every amplitude must be real'],
    correct: 1
  },
  {
    category: 'VECTORS',
    question: 'Which Python library is commonly used for numerical vector and matrix operations?',
    answers: ['NumPy', 'Flask', 'Django', 'BeautifulSoup'],
    correct: 0
  },

  // ==================== INNER PRODUCTS ====================
  {
    category: 'INNER PRODUCTS',
    question: 'What does an inner product measure between two vectors?',
    answers: ['Their file size', 'A mathematical relationship involving their components and overlap', 'Their execution time', 'Their memory address'],
    correct: 1
  },
  {
    category: 'INNER PRODUCTS',
    question: 'Which notation commonly represents an inner product in quantum mechanics?',
    answers: ['|ψ⟩', '⟨φ|ψ⟩', '⊗', '∇'],
    correct: 1
  },
  {
    category: 'INNER PRODUCTS',
    question: 'What is the inner product of [1,0] and [1,0]?',
    answers: ['0', '1', '2', '-1'],
    correct: 1
  },
  {
    category: 'INNER PRODUCTS',
    question: 'What is the inner product of [1,0] and [0,1]?',
    answers: ['0', '1', '2', '-1'],
    correct: 0
  },
  {
    category: 'INNER PRODUCTS',
    question: 'What is the inner product of two orthogonal vectors?',
    answers: ['1', '-1', '0', 'Infinity'],
    correct: 2
  },

  // ==================== TENSOR PRODUCTS ====================
  {
    category: 'TENSOR PRODUCTS',
    question: 'What does the tensor product combine?',
    answers: ['Two quantum state spaces into a joint state space', 'Two Python files into one', 'Two variables into a string', 'Two computers into a network'],
    correct: 0
  },
  {
    category: 'TENSOR PRODUCTS',
    question: 'Which NumPy function computes the Kronecker product?',
    answers: ['np.dot()', 'np.kron()', 'np.mean()', 'np.sum()'],
    correct: 1
  },
  {
    category: 'TENSOR PRODUCTS',
    question: 'What is the dimension of the combined state space of two qubits?',
    answers: ['2', '3', '4', '8'],
    correct: 2
  },
  {
    category: 'TENSOR PRODUCTS',
    question: 'What is the result of |0⟩ ⊗ |1⟩ in the computational basis?',
    answers: ['[1, 0, 0, 0]ᵀ', '[0, 1, 0, 0]ᵀ', '[0, 0, 1, 0]ᵀ', '[0, 0, 0, 1]ᵀ'],
    correct: 1
  },

  // ==================== PYTHON AND QISKIT ====================
  {
    category: 'PYTHON & QISKIT',
    question: 'Which programming language is commonly used for quantum computing experiments with Qiskit?',
    answers: ['Python', 'HTML', 'CSS', 'SQL'],
    correct: 0
  },
  {
    category: 'PYTHON & QISKIT',
    question: 'What is Jupyter Notebook primarily used for?',
    answers: ['Interactive coding and computational experiments', 'Editing videos', 'Managing computer hardware', 'Creating operating systems'],
    correct: 0
  },
  {
    category: 'PYTHON & QISKIT',
    question: 'What is Qiskit?',
    answers: ['A quantum computing software development framework', 'A computer processor', 'A database', 'An operating system'],
    correct: 0
  },
  {
    category: 'PYTHON & QISKIT',
    question: 'Which command installs Qiskit using pip?',
    answers: ['pip install qiskit', 'python qiskit download', 'install quantum.exe', 'pip remove qiskit'],
    correct: 0
  },
  {
    category: 'PYTHON & QISKIT',
    question: 'Which command launches Jupyter Notebook?',
    answers: ['python notebook stop', 'jupyter notebook', 'pip jupyter run', 'open quantum'],
    correct: 1
  },
  {
    category: 'PYTHON & QISKIT',
    question: 'What is the IBM Quantum Platform used for?',
    answers: ['Accessing quantum computing tools and services', 'Creating social media accounts', 'Editing spreadsheets only', 'Hosting gaming servers'],
    correct: 0
  },
  {
    category: 'NUMPY',
    question: 'Which NumPy command creates a complex-valued array?',
    answers: ['np.array([1+2j, 3+4j])', 'np.string([1,2])', 'np.text([1,2])', 'np.file([1,2])'],
    correct: 0
  },
  {
    category: 'NUMPY',
    question: 'What is the output of np.kron([1,0], [0,1])?',
    answers: ['[1, 0, 0, 0]', '[0, 1, 0, 0]', '[0, 0, 1, 0]', '[0, 0, 0, 1]'],
    correct: 1
  },
  {
    category: 'NUMPY',
    question: 'Which NumPy function computes a conjugate inner product for complex vectors?',
    answers: ['np.vdot()', 'np.zeros()', 'np.arange()', 'np.shape()'],
    correct: 0
  },
  {
    category: 'NUMPY',
    question: 'Which of the following is a valid normalized one-qubit state?',
    answers: ['[1, 1]ᵀ', '[0, 0]ᵀ', '(1/√2)[1, 1]ᵀ', '[2, 2]ᵀ'],
    correct: 2
  }
];
const examQuestionCount = 20;
const courseDayLinks = [
  { name: 'DAY 1', links: [{ title: 'Installing Qiskit & setting up your environment', href: 'https://youtu.be/93-zLTppFZw' }, { title: 'Vectors, what even are they?', href: 'https://www.youtube.com/watch?v=fNk_zzaMoSs' }] },
  { name: 'DAY 2', links: [{ title: 'Single Systems', href: 'https://youtu.be/3-c4xJa7Flk' }, { title: 'Multiple Systems', href: 'https://youtu.be/DfZZS8Spe7U' }] },
  { name: 'DAY 3', links: [{ title: 'Bloch Sphere Visualization | Quantum States with Qiskit', href: 'https://www.youtube.com/watch?v=-hc3T1ibRng' }, { title: 'IBM Quantum Learning / Qiskit "Quantum Circuits"', href: 'https://youtu.be/30U2DTfIrOU' }] },
  { name: 'DAY 4', links: [{ title: 'Single Qubit Gates | Quantum Computing Explained', href: 'https://www.youtube.com/watch?v=SjpF9iwyRCc' }, { title: 'Video 2', href: 'https://www.youtube.com/watch?v=2LKjw2MjUK8' }] },
  { name: 'DAY 5', links: [{ title: 'Single Systems', href: 'https://youtu.be/3-c4xJa7Flk' }, { title: 'Multiple Systems', href: 'https://youtu.be/DfZZS8Spe7U' }] },
  { name: 'DAY 6', links: [{ title: 'MinutePhysics "The No Cloning Theorem"', href: 'https://www.youtube.com/watch?v=owPC60Ue0BE' }, { title: 'IBM Quantum Learning / Qiskit "Entanglement in Action"', href: 'https://learning.quantum.ibm.com/course/basics-of-quantum-information/entanglement-in-action' }] }
];

const startButton = document.querySelector('#start-button');
const hero = document.querySelector('.hero');
const quizPanel = document.querySelector('#quiz-panel');
const resultsPanel = document.querySelector('#results-panel');
const questionLabel = document.querySelector('#question-label');
const questionList = document.querySelector('#question-list');
const feedback = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-button');
const progressFill = document.querySelector('#progress-fill');
const answeredCount = document.querySelector('#answered-count');
const timer = document.querySelector('#timer');
const scoreNumber = document.querySelector('#score-number');
const resultHeading = document.querySelector('#result-heading');
const resultCopy = document.querySelector('#result-copy');
const authPanel = document.querySelector('#auth-panel');
const appContent = document.querySelector('#app-content');
const courseLayout = document.querySelector('.course-layout');
const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const loginButton = document.querySelector('.login-button');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#toggle-password');
const memberName = document.querySelector('#member-name');
const logoutButton = document.querySelector('#logout-button');
const resultNote = document.querySelector('#result-note');
const lessonCopy = document.querySelector('#lesson-copy');
const contentPill = document.querySelector('.content-pill');
const lessonTabs = document.querySelectorAll('.lesson');
const courseSidebar = document.querySelector('.course-sidebar');
const weekToggle = document.querySelector('#week-toggle');
const backCourseButton = document.querySelector('#back-course-button');
const quizBackButton = document.querySelector('#quiz-back-button');
const localVideoContent = {
  'day-2-video-1': {
    title: 'Quantum Computation and Quantum Information',
    paragraphs: [
      'This lesson introduces the mathematical and physical foundations used to describe quantum information and quantum computation.',
      'Explore qubits, quantum states, measurement, quantum gates, circuits, and the principles behind quantum algorithms.',
      'Use this material as a guide to connect the course concepts with algorithms, entanglement, and error correction.'
    ]
  },
  'day-2-video-2': {
    title: 'Basics of Quantum Information',
    paragraphs: [
      'Quantum information is carried by qubits, whose states can be combined into superpositions and correlated through entanglement.',
      'Study how measurement changes what can be known about a state, and how gates transform qubits inside a quantum circuit.',
      'This foundation prepares you to build and reason about quantum circuits and algorithms.'
    ]
  }
};

let currentQuestion = 0;
let score = 0;
let answered = false;
let quizQuestions = [];
let selectedAnswers = [];
let secondsLeft = 1800;
let timerId;
let resultSubmitted = false;

function setQuizRestrictions(active) {
  quizPanel.classList.toggle('is-active', active);
}

function preventQuizClipboardAction(event) {
  if (quizPanel && !quizPanel.hidden) event.preventDefault();
}

function preventQuizShortcut(event) {
  if (quizPanel.hidden || !(event.ctrlKey || event.metaKey)) return;
  if (['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) event.preventDefault();
}

document.addEventListener('contextmenu', preventQuizClipboardAction);
document.addEventListener('copy', preventQuizClipboardAction);
document.addEventListener('cut', preventQuizClipboardAction);
document.addEventListener('paste', preventQuizClipboardAction);
document.addEventListener('dragstart', preventQuizClipboardAction);
document.addEventListener('selectstart', preventQuizClipboardAction);
document.addEventListener('keydown', preventQuizShortcut);

function selectLesson(lessonKey) {
  const lesson = weekLessons[lessonKey];
  if (!lesson) return;
  lessonCopy.innerHTML = lessonKey === 'exam' ? `${lesson.html}<button class="exam-start-button" id="exam-start-button" type="button">Start Exam 1 <span>→</span></button>` : lesson.html;
  contentPill.textContent = `Reading Material: ${lesson.title}`;
  lessonTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.lesson === lessonKey));
  lessonCopy.querySelector('#exam-start-button')?.addEventListener('click', startQuiz);
}

function renderQuestions() {
  questionLabel.innerHTML = `EXAM 1 <span>/ ${quizQuestions.length} QUESTIONS</span>`;
  feedback.textContent = '';
  questionList.innerHTML = quizQuestions.map((item, questionIndex) => `<section class="question-card"><p class="category">${item.category}</p><h2>${String(questionIndex + 1).padStart(2, '0')}. ${item.question}</h2><div class="answers">${item.answers.map((answer, answerIndex) => `<label class="answer"><input type="radio" name="question-${questionIndex}" value="${answerIndex}" /><span class="answer-key">${String.fromCharCode(65 + answerIndex)}</span><span>${answer}</span></label>`).join('')}</div></section>`).join('');
  questionList.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('change', () => chooseAnswer(input.closest('.answer'), Number(input.value), Number(input.name.replace('question-', ''))));
  });
  updateQuizProgress();
}

function chooseAnswer(selectedButton, selectedIndex, questionIndex) {
  answered = true;
  selectedAnswers[questionIndex] = selectedIndex;
  selectedButton.closest('.question-card').querySelectorAll('.answer').forEach((button) => {
    button.classList.toggle('selected', button.querySelector('input').value === String(selectedIndex));
  });
  feedback.textContent = 'Answer selected. Continue through the page, then submit the exam.';
  updateQuizProgress();
}

function updateQuizProgress() {
  const answeredTotal = selectedAnswers.filter((answer) => Number.isInteger(answer)).length;
  answeredCount.textContent = `${answeredTotal} of ${quizQuestions.length} answered`;
  progressFill.style.width = `${(answeredTotal / quizQuestions.length) * 100}%`;
  nextButton.disabled = answeredTotal !== quizQuestions.length;
}

function startQuiz() {
  hero.hidden = true;
  courseLayout.hidden = true;
  resultsPanel.hidden = true;
  quizPanel.hidden = false;
  setQuizRestrictions(true);
  currentQuestion = 0;
  score = 0;
  answered = false;
  quizQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(examQuestionCount, questions.length));
  selectedAnswers = [];
  secondsLeft = 1800;
  timer.textContent = '30:00';
  resultSubmitted = false;
  resultNote.innerHTML = '<span>◎</span> Your result will be saved when you finish.';
  renderQuestions();
  clearInterval(timerId);
  timerId = setInterval(() => {
    secondsLeft -= 1;
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (secondsLeft <= 0) finishQuiz();
  }, 1000);
  quizPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function finishQuiz() {
  if (resultSubmitted) return;
  resultSubmitted = true;
  clearInterval(timerId);
  setQuizRestrictions(false);
  score = quizQuestions.reduce((total, question, index) => total + (selectedAnswers[index] === question.correct ? 1 : 0), 0);
  quizPanel.hidden = true;
  resultsPanel.hidden = false;
  scoreNumber.textContent = score;
  const percentage = score / quizQuestions.length;
  if (percentage >= .75) {
    resultHeading.textContent = 'Strong signal.';
    resultCopy.textContent = `You got ${score} out of ${quizQuestions.length}. The team context is landing, and you know how to keep it moving.`;
  } else if (percentage >= .5) {
    resultHeading.textContent = 'Good foundation.';
    resultCopy.textContent = `You got ${score} out of ${quizQuestions.length}. A little more shared context and the picture gets even clearer.`;
  } else {
    resultHeading.textContent = 'Room to connect.';
    resultCopy.textContent = `You got ${score} out of ${quizQuestions.length}. That is useful signal. Take a beat to revisit the project essentials with the team.`;
  }
  resultNote.innerHTML = '<span>◎</span> Saving your result to the project database...';
  try {
    const response = await fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, totalQuestions: quizQuestions.length, durationSeconds: 1800 - secondsLeft })
    });
    if (!response.ok) throw new Error('Result could not be saved.');
    resultNote.innerHTML = '<span>◎</span> Result saved securely to the project database.';
  } catch (error) {
    resultNote.innerHTML = `<span>!</span> ${error.message}`;
  }
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

selectLesson('navigation');
courseSidebar.classList.add('is-week-open');
document.querySelectorAll('.day-dropdown').forEach((dayDropdown) => {
  const dayButton = dayDropdown.querySelector('.day-button');
  dayButton.addEventListener('click', () => {
    const isOpen = dayDropdown.classList.toggle('is-day-open');
    dayButton.setAttribute('aria-expanded', String(isOpen));
  });
  const dayName = dayDropdown.querySelector('.day-heading span, .day-button span').textContent.trim();
  dayDropdown.querySelectorAll('.day-links a').forEach((videoLink) => {
    videoLink.addEventListener('click', (event) => {
      event.preventDefault();
      const videoTitle = `${dayName} · ${videoLink.textContent.trim()}`;
      contentPill.textContent = videoTitle;
      const isBlockedSource = videoLink.href.includes('www.cambridge.org') || videoLink.href.includes('learning.quantum.ibm.com/course/basics-of-quantum-information');
      const localContent = isBlockedSource ? localVideoContent[videoLink.dataset.contentKey] : null;
      if (localContent) {
        lessonCopy.innerHTML = `<div class="embedded-video-fallback"><p class="embedded-video-label">${videoTitle}</p><h2>${localContent.title}</h2>${localContent.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>`;
        return;
      }
      lessonCopy.innerHTML = `<div class="video-link-panel"><p class="embedded-video-label">LESSON VIDEO</p><h2>${videoTitle}</h2><a class="video-external-link" href="${videoLink.href}" target="_blank" rel="noopener noreferrer">Open video <span aria-hidden="true">↗</span></a></div>`;
    });
  });
});
weekToggle.addEventListener('click', () => {
  const isOpen = courseSidebar.classList.toggle('is-week-open');
  weekToggle.setAttribute('aria-expanded', String(isOpen));
});
lessonTabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    selectLesson(tab.dataset.lesson);
  });
});
fullscreenButton.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await courseMain.requestFullscreen();
  } catch {
    fullscreenButton.setAttribute('aria-label', 'Fullscreen unavailable');
  }
});
document.addEventListener('fullscreenchange', updateFullscreenButton);
function returnToCourse() {
  clearInterval(timerId);
  setQuizRestrictions(false);
  quizPanel.hidden = true;
  resultsPanel.hidden = true;
  courseLayout.hidden = false;
  selectLesson('exam');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

nextButton.addEventListener('click', () => {
  if (nextButton.disabled) return;
  finishQuiz();
});
backCourseButton.addEventListener('click', returnToCourse);
quizBackButton.addEventListener('click', returnToCourse);

function showAuthenticatedApp(user) {
  memberName.textContent = `${user.displayName} (${user.username})`;
  courseLayout.hidden = false;
  authPanel.hidden = true;
  appContent.hidden = false;
}

async function restoreSession() {
  try {
    const response = await fetch('/api/me');
    if (response.ok) {
      const data = await response.json();
      showAuthenticatedApp(data.user);
    }
  } catch {
    loginMessage.textContent = 'Start the project server to sign in.';
  }
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginMessage.textContent = '';
  loginButton.disabled = true;
  loginButton.classList.add('is-loading');
  const formData = new FormData(loginForm);
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: formData.get('username'), password: formData.get('password') })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to sign in.');
    loginForm.reset();
    showAuthenticatedApp(data.user);
  } catch (error) {
    loginMessage.textContent = error.message;
  } finally {
    loginButton.disabled = false;
    loginButton.classList.remove('is-loading');
  }
});

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? 'HIDE' : 'SHOW';
  togglePassword.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
});

logoutButton.addEventListener('click', async () => {
  await fetch('/api/logout', { method: 'POST' });
  setQuizRestrictions(false);
  courseLayout.hidden = false;
  quizPanel.hidden = true;
  resultsPanel.hidden = true;
  appContent.hidden = true;
  authPanel.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

