const questions = [
  { category: 'FOUNDATIONS', question: 'What is the clearest sign that our project is moving in the right direction?', answers: ['More meetings on the calendar', 'A shared understanding of the next decision', 'Longer status updates', 'Fewer ideas in the backlog'], correct: 1 },
  { category: 'WAYS OF WORKING', question: 'When should a project member raise a risk?', answers: ['When they have a complete solution', 'At the end of the sprint', 'As soon as it could affect the outcome', 'Only when asked directly'], correct: 2 },
  { category: 'COLLABORATION', question: 'What makes feedback most useful to the team?', answers: ['Keeping it general', 'Sharing it close to the work', 'Waiting for a review meeting', 'Sending it only to the lead'], correct: 1 },
  { category: 'DECISIONS', question: 'A decision is blocked. What is the best next move?', answers: ['Document the blocker and name the owner', 'Keep working around it silently', 'Wait for someone to notice', 'Add it to the next quarterly plan'], correct: 0 },
  { category: 'DELIVERY', question: 'What should a good project update make easy to understand?', answers: ['How busy everyone has been', 'What changed and what happens next', 'Every conversation from the week', 'Why the original plan was perfect'], correct: 1 },
  { category: 'OWNERSHIP', question: 'Who owns the quality of the final project outcome?', answers: ['Only the project lead', 'The person who wrote the most code', 'The whole project team', 'The newest team member'], correct: 2 },
  { category: 'LEARNING', question: 'What is the most valuable outcome of a retrospective?', answers: ['A longer list of action items', 'A shared improvement to try next', 'A perfect record of the past', 'A reason to postpone delivery'], correct: 1 },
  { category: 'MOMENTUM', question: 'What keeps a strong team aligned between milestones?', answers: ['Small, visible progress and honest context', 'Avoiding difficult conversations', 'Changing priorities often', 'Working independently until launch'], correct: 0 },
  { category: 'GOALS', question: 'What should every project goal make clear?', answers: ['The outcome we are trying to create', 'The number of meetings required', 'Who gets the most credit', 'The tools everyone must use'], correct: 0 },
  { category: 'PLANNING', question: 'What is the best reason to break work into smaller milestones?', answers: ['To make progress visible and easier to adjust', 'To create more reports', 'To avoid making decisions', 'To guarantee no changes happen'], correct: 0 },
  { category: 'COMMUNICATION', question: 'What belongs in a useful status update?', answers: ['Progress, risks, and the next decision', 'Only completed tasks', 'Personal opinions about the team', 'Every message sent that week'], correct: 0 },
  { category: 'QUALITY', question: 'When should quality checks happen?', answers: ['Throughout the work, not only at the end', 'Only after launch', 'When a stakeholder complains', 'After the project is archived'], correct: 0 },
  { category: 'PRIORITIES', question: 'A new urgent request arrives. What should happen first?', answers: ['Understand its impact on current priorities', 'Start immediately without telling anyone', 'Cancel all existing work', 'Ignore it until the next review'], correct: 0 },
  { category: 'DEPENDENCIES', question: 'How should a team handle a dependency on another group?', answers: ['Name the owner, timing, and required handoff', 'Wait silently for delivery', 'Duplicate the work without discussion', 'Remove it from the plan'], correct: 0 },
  { category: 'DOCUMENTATION', question: 'What makes project documentation valuable?', answers: ['It captures decisions people can act on', 'It is as long as possible', 'It uses complex language', 'It is updated only after launch'], correct: 0 },
  { category: 'CUSTOMERS', question: 'What is the strongest way to test whether a solution is useful?', answers: ['Observe it against a real user need', 'Ask only the project lead', 'Add more features', 'Wait for internal approval alone'], correct: 0 },
  { category: 'SECURITY', question: 'What should a member do with a suspected security issue?', answers: ['Raise it through the agreed channel immediately', 'Post it publicly', 'Wait until the final release', 'Keep it private indefinitely'], correct: 0 },
  { category: 'INCLUSION', question: 'How can a team improve decision quality?', answers: ['Invite the perspectives closest to the problem', 'Limit input to the loudest voice', 'Avoid disagreement', 'Decide before sharing context'], correct: 0 },
  { category: 'OWNERSHIP', question: 'What does clear ownership provide?', answers: ['A person responsible for moving the work forward', 'A reason to work alone', 'A way to avoid collaboration', 'A replacement for project goals'], correct: 0 },
  { category: 'REFLECTION', question: 'What should the team do after learning something important?', answers: ['Apply it to the next action or decision', 'Store it without sharing', 'Wait for someone else to use it', 'Remove it from the project notes'], correct: 0 }
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

