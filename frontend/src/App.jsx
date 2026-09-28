import React, { useEffect, useState } from 'react';
import '../styles.css';
import ChatGPTHome from './ChatGPTHome.jsx';

const questions = [
  ['FOUNDATIONS', 'What is the clearest sign that our project is moving in the right direction?', ['More meetings on the calendar', 'A shared understanding of the next decision', 'Longer status updates', 'Fewer ideas in the backlog'], 1],
  ['WAYS OF WORKING', 'When should a project member raise a risk?', ['When they have a complete solution', 'At the end of the sprint', 'As soon as it could affect the outcome', 'Only when asked directly'], 2],
  ['COLLABORATION', 'What makes feedback most useful to the team?', ['Keeping it general', 'Sharing it close to the work', 'Waiting for a review meeting', 'Sending it only to the lead'], 1],
  ['DECISIONS', 'A decision is blocked. What is the best next move?', ['Document the blocker and name the owner', 'Keep working around it silently', 'Wait for someone to notice', 'Add it to the next quarterly plan'], 0],
  ['DELIVERY', 'What should a good project update make easy to understand?', ['How busy everyone has been', 'What changed and what happens next', 'Every conversation from the week', 'Why the original plan was perfect'], 1],
  ['OWNERSHIP', 'Who owns the quality of the final project outcome?', ['Only the project lead', 'The person who wrote the most code', 'The whole project team', 'The newest team member'], 2],
  ['LEARNING', 'What is the most valuable outcome of a retrospective?', ['A longer list of action items', 'A shared improvement to try next', 'A perfect record of the past', 'A reason to postpone delivery'], 1],
  ['MOMENTUM', 'What keeps a strong team aligned between milestones?', ['Small, visible progress and honest context', 'Avoiding difficult conversations', 'Changing priorities often', 'Working independently until launch'], 0],
  ['GOALS', 'What should every project goal make clear?', ['The outcome we are trying to create', 'The number of meetings required', 'Who gets the most credit', 'The tools everyone must use'], 0],
  ['PLANNING', 'What is the best reason to break work into smaller milestones?', ['To make progress visible and easier to adjust', 'To create more reports', 'To avoid making decisions', 'To guarantee no changes happen'], 0],
  ['COMMUNICATION', 'What belongs in a useful status update?', ['Progress, risks, and the next decision', 'Only completed tasks', 'Personal opinions about the team', 'Every message sent that week'], 0],
  ['QUALITY', 'When should quality checks happen?', ['Throughout the work, not only at the end', 'Only after launch', 'When a stakeholder complains', 'After the project is archived'], 0],
  ['PRIORITIES', 'A new urgent request arrives. What should happen first?', ['Understand its impact on current priorities', 'Start immediately without telling anyone', 'Cancel all existing work', 'Ignore it until the next review'], 0],
  ['DEPENDENCIES', 'How should a team handle a dependency on another group?', ['Name the owner, timing, and required handoff', 'Wait silently for delivery', 'Duplicate the work without discussion', 'Remove it from the plan'], 0],
  ['DOCUMENTATION', 'What makes project documentation valuable?', ['It captures decisions people can act on', 'It is as long as possible', 'It uses complex language', 'It is updated only after launch'], 0],
  ['CUSTOMERS', 'What is the strongest way to test whether a solution is useful?', ['Observe it against a real user need', 'Ask only the project lead', 'Add more features', 'Wait for internal approval alone'], 0],
  ['SECURITY', 'What should a member do with a suspected security issue?', ['Raise it through the agreed channel immediately', 'Post it publicly', 'Wait until the final release', 'Keep it private indefinitely'], 0],
  ['INCLUSION', 'How can a team improve decision quality?', ['Invite the perspectives closest to the problem', 'Limit input to the loudest voice', 'Avoid disagreement', 'Decide before sharing context'], 0],
  ['OWNERSHIP', 'What does clear ownership provide?', ['A person responsible for moving the work forward', 'A reason to work alone', 'A way to avoid collaboration', 'A replacement for project goals'], 0],
  ['REFLECTION', 'What should the team do after learning something important?', ['Apply it to the next action or decision', 'Store it without sharing', 'Wait for someone else to use it', 'Remove it from the project notes'], 0]
].map(([category, question, answers, correct]) => ({ category, question, answers, correct }));

const days = [
  { name: 'DAY 1', links: [{ title: 'Installing Qiskit & setting up your environment', href: 'https://youtu.be/93-zLTppFZw' }, { title: 'Vectors, what even are they?', href: 'https://www.youtube.com/watch?v=fNk_zzaMoSs' }] },
  { name: 'DAY 2', links: [{ title: 'Single Systems', href: 'https://youtu.be/3-c4xJa7Flk' }, { title: 'Multiple Systems', href: 'https://youtu.be/DfZZS8Spe7U' }] },
  { name: 'DAY 3', links: [{ title: 'Bloch Sphere Visualization | Quantum States with Qiskit', href: 'https://www.youtube.com/watch?v=-hc3T1ibRng' }, { title: 'IBM Quantum Learning / Qiskit "Quantum Circuits"', href: 'https://youtu.be/30U2DTfIrOU' }] },
  { name: 'DAY 4', links: [{ title: 'Single Qubit Gates | Quantum Computing Explained', href: 'https://www.youtube.com/watch?v=SjpF9iwyRCc' }, { title: 'Video 2', href: 'https://www.youtube.com/watch?v=2LKjw2MjUK8' }] },
  { name: 'DAY 5', links: [{ title: 'Single Systems', href: 'https://youtu.be/3-c4xJa7Flk' }, { title: 'Multiple Systems', href: 'https://youtu.be/DfZZS8Spe7U' }] },
  { name: 'DAY 6', links: [{ title: 'MinutePhysics "The No Cloning Theorem"', href: 'https://www.youtube.com/watch?v=owPC60Ue0BE' }, { title: 'IBM Quantum Learning / Qiskit "Entanglement in Action"', href: 'https://learning.quantum.ibm.com/course/basics-of-quantum-information/entanglement-in-action' }] }
];

const localContent = {
  'Quantum Computation and Quantum Information': {
    title: 'Quantum Computation and Quantum Information',
    paragraphs: [
      'This lesson introduces the mathematical and physical foundations used to describe quantum information and quantum computation.',
      'Explore qubits, quantum states, measurement, quantum gates, circuits, and the principles behind quantum algorithms.',
      'Use this material as a guide to connect the course concepts with algorithms, entanglement, and error correction.'
    ]
  },
  'Basics of Quantum Information': {
    title: 'Basics of Quantum Information',
    paragraphs: [
      'Quantum information is carried by qubits, whose states can be combined into superpositions and correlated through entanglement.',
      'Study how measurement changes what can be known about a state, and how gates transform qubits inside a quantum circuit.',
      'This foundation prepares you to build and reason about quantum circuits and algorithms.'
    ]
  }
};

function normalizeLessonTitle(value = '') {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function resolveLocalLessonContent(title) {
  if (!title) return null;
  if (localContent[title]) return localContent[title];
  const normalized = normalizeLessonTitle(title);
  const match = Object.entries(localContent).find(([key]) => normalizeLessonTitle(key) === normalized);
  return match ? match[1] : null;
}

function embeddedUrl(href) {
  const url = new URL(href);
  const host = url.hostname.replace(/^www\./, '').replace(/^m\./, '');
  let videoId = null;

  if (host === 'youtu.be') videoId = url.pathname.slice(1).split('/')[0];
  if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    videoId = url.searchParams.get('v') || url.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1] || null;
  }

  if (!videoId) return href;
  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  embedUrl.searchParams.set('autoplay', '1');
  embedUrl.searchParams.set('mute', '1');
  embedUrl.searchParams.set('rel', '0');
  embedUrl.searchParams.set('origin', window.location.origin);
  return embedUrl.toString();
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('error');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('error');
    try {
      const response = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || data.detail || 'Unable to sign in.');
      onLogin(data.user);
      setUsername('');
      setPassword('');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return <section className="auth-panel" id="auth-panel">
    <div className="auth-copy"><p className="eyebrow">Adaptive Benchmarking & Selection for Error Mitigation Technique.<span>●</span> USER ACCESS</p><h1>Test your<br /><em>Knowledge</em> in.</h1><p className="hero-text">Quantum Computing</p><div className="access-note"><span>◎</span> Adaptive Benchmarking & Selection for Error Mitigation Technique.</div></div>
    <form className="login-form" onSubmit={submit}><div className="form-heading"><span>01</span><h2>Login</h2></div><label htmlFor="username">Username</label><input id="username" value={username} onChange={(event) => setUsername(event.target.value)} type="text" autoComplete="username" placeholder="23BQ1A4202" required /><label htmlFor="password">Password</label><div className="password-field"><input id="password" value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="23BQ1A4202" required /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={`${showPassword ? 'Hide' : 'Show'} password`}>{showPassword ? 'HIDE' : 'SHOW'}</button></div><p className={`login-message${messageType === 'success' ? ' is-success' : ''}`} role="status" aria-live="polite">{message}</p><button className={`primary-button login-button${loading ? ' is-loading' : ''}`} type="submit" disabled={loading}>Login<span>↗</span></button><p className="demo-hint">Use your assigned username and password.</p></form>
  </section>;
}

function DayDropdown({ day, onVideo, selectedHref }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`day-dropdown${open ? ' is-day-open' : ''}`}>
      <button className="day-button" type="button" aria-expanded={open} aria-controls={`${day.name.toLowerCase().replace(' ', '-')}-links`} onClick={() => setOpen((value) => !value)}>
        <span>{day.name}</span>
        <span className="day-chevron">⌄</span>
      </button>
      <div className="day-links" id={`${day.name.toLowerCase().replace(' ', '-')}-links`}>
        {day.links.map((link) => (
          <a className={selectedHref === link.href ? 'is-active' : ''} href={link.href} key={link.title} aria-current={selectedHref === link.href ? 'page' : undefined} onClick={(event) => { event.preventDefault(); onVideo(day.name, link); }}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function Course({ user, onLogout, onQuiz }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [weekOpen, setWeekOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lesson, setLesson] = useState({ title: 'Navigating the QUANTUM COPUTING Platform', type: 'navigation', link: null, content: null });
  const content = lesson.type === 'local' ? (lesson.content ?? resolveLocalLessonContent(lesson.link?.title)) : null;

  function selectVideo(dayName, link) {
    setIsVideoPlaying(false);
    const isBlockedSource = (link?.href || '').includes('cambridge.org') || (link?.href || '').includes('quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information');
    const lessonContent = isBlockedSource ? resolveLocalLessonContent(link.title) : null;
    setLesson({
      title: `${dayName} · ${link.title}`,
      type: lessonContent ? 'local' : 'video',
      link,
      content: lessonContent
    });
  }

  function selectCourseOverview(event) {
    event.preventDefault();
    setIsVideoPlaying(false);
    setLesson({ title: 'Navigating the QUANTUM COMPUTING Platform', type: 'navigation', link: null, content: null });
  }

  useEffect(() => {
    const sidebar = document.querySelector('.course-sidebar');
    const quizButton = document.querySelector('.course-quiz-button');
    if (sidebar && quizButton) {
      quizButton.firstChild.textContent = 'Quiz ';
      sidebar.appendChild(quizButton);
    }
  }, [onQuiz]);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === document.querySelector('#course-content'));
    };
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, []);

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await document.querySelector('#course-content')?.requestFullscreen?.();
  }

  return (
    <>
      <header className="course-header">
        <div className="course-header-brand">
          <a className="course-logos" href="#top" aria-label="QUANTUM home"><span className="swayam-logo">QUANTUM Computing</span></a>
          <button
            className="sidebar-toggle"
            type="button"
            aria-label={sidebarOpen ? 'Close course sidebar' : 'Open course sidebar'}
            aria-expanded={sidebarOpen}
            aria-controls="course-sidebar"
            onClick={() => setSidebarOpen((value) => !value)}
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>
        <div className="header-account">
          <span>SIGNED IN AS <strong>{user.displayName} ({user.username})</strong></span>
          <button onClick={onLogout} type="button">Sign out</button>
        </div>
      </header>

      <div className={`course-layout${sidebarOpen ? '' : ' is-sidebar-closed'}`}>
        <aside className="course-sidebar" id="course-sidebar" aria-label="Course outline" hidden={!sidebarOpen}>
          <div className="course-sidebar-heading">
            <h1>Quantum Computing</h1>
            <div className="course-progress"><span>Course Progress</span></div>
          </div>

          <button className="week-heading" type="button" aria-expanded={weekOpen} onClick={() => setWeekOpen((value) => !value)}>
            <span className="week-chevron">⌄</span>
            <span>Week 0</span>
          </button>

          <div className={`lesson-list${weekOpen ? '' : ' is-week-closed'}`}>
            <div className="lesson-list">
              <a className={`week-zero-link${lesson.type === 'navigation' ? ' is-active' : ''}`} href="#course-content" aria-current={lesson.type === 'navigation' ? 'page' : undefined} onClick={selectCourseOverview}>Course overview</a>
              {days.map((day) => <DayDropdown key={day.name} day={day} onVideo={selectVideo} selectedHref={lesson.link?.href} />)}
            </div>
          </div>
        </aside>

        <section className="course-main" id="course-content">
          <div className="content-toolbar">
            <span className="content-pill">{lesson.type === 'navigation' ? 'Reading Material: ' : ''}{lesson.title}</span>
            <div>
              <button type="button" aria-label="Bookmark lesson"></button>
              <button type="button" aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'} onClick={toggleFullscreen}>{isFullscreen ? '×' : '⛶'}</button>
            </div>
          </div>

          <article className="reading-content">
            {lesson.type === 'navigation' && (
              <>
                <h2>Welcome to QUANTUM COMPUTING course <em>"QUANTUM COMPUTING"</em></h2>
                <p>Some of you might be familiar with Swayam Portal and its navigation. For those of you who are new to Swayam, this lesson explains how to access course content, weekly assessments, discussion forums, and your progress.</p>
                <p><em>[Please note, the course shown in this demo video is a different course and is only for demonstration purposes]</em></p>
                <h3>How to access the Course:</h3>
                <ol>
                  <li>Check the Announcement page regularly for updates and announcements.</li>
                  <li>Review the course details shared in "Week 0."</li>
                  <li>Watch videos and explore content provided in "Week 1."</li>
                  <li>If you have any questions, use the "Discussion Forum" by selecting Q&amp;A.</li>
                </ol>
                <h3>Course navigation:</h3>
                <p>Use the section list on the left to move between lessons, videos, and assessments. Each week updates the course content in the main panel so you can keep track of what is next.</p>
              </>
            )}

            {lesson.type === 'local' && content && (
              <div className="embedded-video-fallback">
                <p className="embedded-video-label">{lesson.title}</p>
                <h2>{content.title}</h2>
                {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}

            {lesson.type === 'video' && lesson.link && (
              <div className="video-link-panel">
                <p className="embedded-video-label">LESSON VIDEO</p>
                <h2>{lesson.link.title}</h2>
                {isVideoPlaying ? (
                  <div className="embedded-video">
                    <iframe
                      src={embeddedUrl(lesson.link.href)}
                      title={lesson.link.title}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="origin"
                    />
                  </div>
                ) : (
                  <button className="video-play-button" type="button" onClick={() => setIsVideoPlaying(true)}>
                    <span aria-hidden="true">▶</span> Play video
                  </button>
                )}
              </div>
            )}
          </article>
        </section>
      </div>
    </>
  );
}

function Quiz({ onFinish, onBack }) {
  const [quizQuestions] = useState(() => [...questions].sort(() => Math.random() - 0.5));
  const [answers, setAnswers] = useState({});
  const [seconds, setSeconds] = useState(1800);
  const answered = Object.keys(answers).length;

  useEffect(() => {
    const timer = setInterval(() => setSeconds((value) => Math.max(value - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) onFinish(quizQuestions, answers, seconds);
  }, [seconds, onFinish, quizQuestions, answers]);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return <section className="quiz-panel" id="quiz-panel"><div className="quiz-header"><div><p className="eyebrow">KNOWLEDGE CHECK</p><p className="question-label">EXAM 1 <span>/ {quizQuestions.length} QUESTIONS</span></p></div><div className="timer">{String(minutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}</div></div><div className="progress-track"><div className="progress-fill" style={{ width: `${answered / quizQuestions.length * 100}%` }} /></div><div className="question-area"><div className="question-list">{quizQuestions.map((item, questionIndex) => <section className="question-card" key={item.question}><p className="category">{item.category}</p><h2>{String(questionIndex + 1).padStart(2, '0')}. {item.question}</h2><div className="answers">{item.answers.map((answer, answerIndex) => <label className={`answer${answers[questionIndex] === answerIndex ? ' selected' : ''}`} key={answer}><input type="radio" name={`question-${questionIndex}`} checked={answers[questionIndex] === answerIndex} onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: answerIndex }))} /><span className="answer-key">{String.fromCharCode(65 + answerIndex)}</span><span>{answer}</span></label>)}</div></section>)}</div></div><div className="quiz-footer"><div className="quiz-footer-actions"><button className="quiz-back-button" onClick={onBack} type="button">Back to Course</button><span>{answered} of {quizQuestions.length} answered</span></div><button className="next-button" type="button" disabled={answered !== quizQuestions.length} onClick={() => onFinish(quizQuestions, answers, 1800 - seconds)}>Submit Exam <span>→</span></button></div></section>;
}

function App() {
  const [user, setUser] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    let active = true;
    fetch('/api/me')
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (active && data?.user) setUser(data.user);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  async function logout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } finally {
      setUser(null);
    }
  }

  function finishQuiz(quizQuestions, answers, durationSeconds) {
    const score = quizQuestions.reduce((total, question, index) => (
      total + (answers[index] === question.correct ? 1 : 0)
    ), 0);
    const result = { score, total: quizQuestions.length };
    setQuizResult(result);
    setQuizOpen(false);
    fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, totalQuestions: result.total, durationSeconds })
    }).catch(() => {});
  }

  if (user && quizResult) {
    return (
      <main className="app-shell">
        <section className="results-panel">
          <p className="eyebrow">KNOWLEDGE CHECK COMPLETE</p>
          <div className="result-layout">
            <div>
              <h2>Quiz complete.</h2>
              <p id="result-copy">You answered {quizResult.score} of {quizResult.total} questions correctly.</p>
              <button className="back-course-button" type="button" onClick={() => setQuizResult(null)}>
                Back to course <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="score-display" aria-label={`${quizResult.score} of ${quizResult.total} correct`}>
              <span className="score-number">{quizResult.score}</span>
              <span className="score-denominator">/{quizResult.total} CORRECT</span>
              <span className="score-ring" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (user && quizOpen) {
    return (
      <main className="app-shell">
        <Quiz onFinish={finishQuiz} onBack={() => setQuizOpen(false)} />
      </main>
    );
  }

  if (user) return <ChatGPTHome user={user} onLogout={logout} onQuiz={() => setQuizOpen(true)} />;

  return <main className="app-shell"><header className="topbar"><a className="brand" href="#top" aria-label="Project Pulse home"><span className="brand-mark"><span /><span /><span /></span><span>Quantum Computing<span className="brand-accent" /></span></a><div className="topbar-meta"><span className="status-dot" /> <span>20 QUESTIONS</span></div></header><Login onLogin={setUser} /><footer className="footer"><span>PROJECT / 2026</span><span>BUILT FOR BETTER UNDERSTANDING</span></footer></main>;
}

export default App;
