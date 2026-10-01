import React, { useEffect, useState } from 'react';
import '../styles.css';
import ChatGPTHome from './ChatGPTHome.jsx';

const questions = [
  { category: 'FOUNDATIONS', question: 'What is quantum computing primarily based on?', answers: ['Classical Boolean logic', 'Principles of quantum mechanics', 'Mechanical computation', 'Binary arithmetic alone'], correct: 1 },
  { category: 'FOUNDATIONS', question: 'What is the fundamental unit of quantum information?', answers: ['Bit', 'Byte', 'Qubit', 'Pixel'], correct: 2 },
  { category: 'FOUNDATIONS', question: 'What are the possible states of a classical bit?', answers: ['0 and 1 simultaneously', 'Only 0 or 1', 'Any complex number', 'Infinite states'], correct: 1 },
  { category: 'FOUNDATIONS', question: 'What makes a qubit different from a classical bit?', answers: ['It can exist in a superposition of basis states', 'It always stores two readable bits', 'It has no measurable state', 'It only represents the number 2'], correct: 0 },
  { category: 'FOUNDATIONS', question: 'Which expression represents a general single-qubit state?', answers: ['|ψ⟩ = α|0⟩ + β|1⟩', '|ψ⟩ = 0 + 1', '|ψ⟩ = α + β', '|ψ⟩ = 01'], correct: 0 },
  { category: 'FOUNDATIONS', question: 'What is the primary purpose of quantum gates?', answers: ['Store classical files', 'Manipulate quantum states', 'Increase computer memory', 'Convert Python into Java'], correct: 1 },
  { category: 'FOUNDATIONS', question: 'Which quantum gate creates an equal superposition from |0⟩?', answers: ['Pauli-X gate', 'Hadamard gate', 'CNOT gate', 'Identity gate'], correct: 1 },
  { category: 'FOUNDATIONS', question: 'What happens when a qubit is measured in the computational basis?', answers: ['It always produces 0', 'It always produces 1', 'It produces a classical outcome of 0 or 1', 'It produces an imaginary number'], correct: 2 },
  { category: 'FOUNDATIONS', question: 'What is quantum entanglement?', answers: ['A type of classical encryption', 'Quantum correlations between systems that cannot be described as independent states', 'A programming language', 'A method of increasing CPU speed'], correct: 1 },
  { category: 'FOUNDATIONS', question: 'Which statement about quantum computing is correct?', answers: ['It replaces every classical computer', 'It solves every problem instantly', 'It can provide advantages for certain computational problems', 'It requires no electricity'], correct: 2 },
  { category: 'SUPERPOSITION', question: 'What does superposition mean in quantum computing?', answers: ['A qubit has a combination of possible basis-state amplitudes', 'A qubit stores unlimited readable classical data', 'Two computers run simultaneously', 'A computer performs no calculations'], correct: 0 },
  { category: 'SUPERPOSITION', question: 'What is the probability of measuring 0 from the state (|0⟩ + |1⟩)/√2?', answers: ['0%', '25%', '50%', '100%'], correct: 2 },
  { category: 'SUPERPOSITION', question: 'Which mathematical property allows quantum amplitudes to combine?', answers: ['Integer division', 'Linear algebra', 'Boolean subtraction', 'String concatenation'], correct: 1 },
  { category: 'SUPERPOSITION', question: 'What is the state of a qubit after applying a Hadamard gate to |0⟩?', answers: ['(|0⟩ + |1⟩)/√2', '|0⟩ only', '|1⟩ only', '(|0⟩ - |1⟩)/2'], correct: 0 },
  { category: 'SUPERPOSITION', question: 'What happens to a qubit when it is measured in the computational basis?', answers: ['All amplitudes become readable', 'It produces one classical measurement outcome', 'It creates unlimited copies', 'It always produces 0'], correct: 1 },
  { category: 'INTERFERENCE', question: 'What is quantum interference?', answers: ['Interaction between classical computers', 'Combining probability amplitudes constructively or destructively', 'Randomly deleting qubits', 'Increasing the number of classical bits'], correct: 1 },
  { category: 'INTERFERENCE', question: 'What happens during constructive interference?', answers: ['Amplitudes reinforce each other', 'Amplitudes always cancel', 'Qubits become classical bits', 'All outcomes disappear'], correct: 0 },
  { category: 'INTERFERENCE', question: 'What happens during destructive interference?', answers: ['Amplitudes always increase', 'Amplitudes cancel or reduce one another', 'Amplitudes become infinite', 'Quantum states become strings'], correct: 1 },
  { category: 'INTERFERENCE', question: 'Why is interference useful in quantum algorithms?', answers: ['It guarantees every answer is correct', 'It can amplify desired outcomes and suppress unwanted outcomes', 'It removes all computational costs', 'It allows direct reading of every amplitude'], correct: 1 },
  { category: 'INTERFERENCE', question: 'What happens when a Hadamard gate is applied twice consecutively to |0⟩?', answers: ['The state becomes |1⟩', 'The state returns to |0⟩', 'The state becomes permanently random', 'The state becomes |0⟩ + |1⟩ without normalization'], correct: 1 },
  { category: 'QUANTUM SPEEDUP', question: 'Why is quantum computing not a magical speedup for every problem?', answers: ['Quantum computers cannot perform calculations', 'Quantum algorithms need specific mathematical structures to gain advantages', 'Quantum computers cannot use algorithms', 'Quantum computers only perform addition'], correct: 1 },
  { category: 'QUANTUM SPEEDUP', question: 'What does quantum parallelism refer to?', answers: ['Processing quantum state components through quantum operations', 'Running multiple operating systems', 'Using multiple keyboards', 'Increasing internet speed'], correct: 0 },
  { category: 'QUANTUM SPEEDUP', question: 'Which statement about quantum speedup is accurate?', answers: ['All quantum algorithms are faster than classical algorithms', 'Quantum computers always outperform GPUs', 'Speedup depends on the problem and algorithm', 'Quantum computers eliminate computational costs'], correct: 2 },
  { category: 'QUANTUM SPEEDUP', question: 'Why does measuring a superposition not reveal every possible answer?', answers: ['Measurement produces a classical outcome rather than exposing all amplitudes', 'Quantum computers cannot store information', 'Measurement always returns zero', 'Superposition contains no information'], correct: 0 },
  { category: 'QUANTUM SPEEDUP', question: 'What is required to obtain a practical quantum advantage?', answers: ['A quantum algorithm suited to the problem and hardware capable of executing it', 'A quantum computer with unlimited memory', 'Removing all measurements', 'Using only classical bits'], correct: 0 },
  { category: 'COMPLEX NUMBERS', question: 'What is the general form of a complex number?', answers: ['a + b', 'a + bi', 'ab', 'a/b'], correct: 1 },
  { category: 'COMPLEX NUMBERS', question: 'What is the value of i²?', answers: ['1', '0', '-1', 'i'], correct: 2 },
  { category: 'COMPLEX NUMBERS', question: 'What is the complex conjugate of 3 + 4i?', answers: ['3 + 4i', '-3 + 4i', '3 - 4i', '-3 - 4i'], correct: 2 },
  { category: 'COMPLEX NUMBERS', question: 'What is the magnitude of the complex number 3 + 4i?', answers: ['7', '5', '12', '25'], correct: 1 },
  { category: 'COMPLEX NUMBERS', question: 'What is the squared magnitude of z = a + bi?', answers: ['a + b', 'a² + b²', 'a - b', 'ab'], correct: 1 },
  { category: 'VECTORS', question: 'Which of the following is a valid two-dimensional vector?', answers: ['[1, 2]', '1 + 2', '1/2', '12'], correct: 0 },
  { category: 'VECTORS', question: 'What is the standard column-vector representation of |0⟩?', answers: ['[0, 1]ᵀ', '[1, 0]ᵀ', '[1, 1]ᵀ', '[0, 0]ᵀ'], correct: 1 },
  { category: 'VECTORS', question: 'What is the standard column-vector representation of |1⟩?', answers: ['[1, 0]ᵀ', '[1, 1]ᵀ', '[0, 1]ᵀ', '[0, 0]ᵀ'], correct: 2 },
  { category: 'VECTORS', question: 'What condition must a normalized quantum state satisfy?', answers: ['The sum of amplitudes equals 0', 'The sum of squared magnitudes of amplitudes equals 1', 'Every amplitude equals 1', 'Every amplitude must be real'], correct: 1 },
  { category: 'VECTORS', question: 'Which Python library is commonly used for numerical vector and matrix operations?', answers: ['NumPy', 'Flask', 'Django', 'BeautifulSoup'], correct: 0 },
  { category: 'INNER PRODUCTS', question: 'What does an inner product measure between two vectors?', answers: ['Their file size', 'A mathematical relationship involving their components and overlap', 'Their execution time', 'Their memory address'], correct: 1 },
  { category: 'INNER PRODUCTS', question: 'Which notation commonly represents an inner product in quantum mechanics?', answers: ['|ψ⟩', '⟨φ|ψ⟩', '⊗', '∇'], correct: 1 },
  { category: 'INNER PRODUCTS', question: 'What is the inner product of [1,0] and [1,0]?', answers: ['0', '1', '2', '-1'], correct: 1 },
  { category: 'INNER PRODUCTS', question: 'What is the inner product of [1,0] and [0,1]?', answers: ['0', '1', '2', '-1'], correct: 0 },
  { category: 'INNER PRODUCTS', question: 'What is the inner product of two orthogonal vectors?', answers: ['1', '-1', '0', 'Infinity'], correct: 2 },
  { category: 'TENSOR PRODUCTS', question: 'What does the tensor product combine?', answers: ['Two quantum state spaces into a joint state space', 'Two Python files into one', 'Two variables into a string', 'Two computers into a network'], correct: 0 },
  { category: 'TENSOR PRODUCTS', question: 'Which NumPy function computes the Kronecker product?', answers: ['np.dot()', 'np.kron()', 'np.mean()', 'np.sum()'], correct: 1 },
  { category: 'TENSOR PRODUCTS', question: 'What is the dimension of the combined state space of two qubits?', answers: ['2', '3', '4', '8'], correct: 2 },
  { category: 'TENSOR PRODUCTS', question: 'What is the result of |0⟩ ⊗ |1⟩ in the computational basis?', answers: ['[1, 0, 0, 0]ᵀ', '[0, 1, 0, 0]ᵀ', '[0, 0, 1, 0]ᵀ', '[0, 0, 0, 1]ᵀ'], correct: 1 },
  { category: 'PYTHON & QISKIT', question: 'Which programming language is commonly used for quantum computing experiments with Qiskit?', answers: ['Python', 'HTML', 'CSS', 'SQL'], correct: 0 },
  { category: 'PYTHON & QISKIT', question: 'What is Jupyter Notebook primarily used for?', answers: ['Interactive coding and computational experiments', 'Editing videos', 'Managing computer hardware', 'Creating operating systems'], correct: 0 },
  { category: 'PYTHON & QISKIT', question: 'What is Qiskit?', answers: ['A quantum computing software development framework', 'A computer processor', 'A database', 'An operating system'], correct: 0 },
  { category: 'PYTHON & QISKIT', question: 'Which command installs Qiskit using pip?', answers: ['pip install qiskit', 'python qiskit download', 'install quantum.exe', 'pip remove qiskit'], correct: 0 },
  { category: 'PYTHON & QISKIT', question: 'Which command launches Jupyter Notebook?', answers: ['python notebook stop', 'jupyter notebook', 'pip jupyter run', 'open quantum'], correct: 1 },
  { category: 'PYTHON & QISKIT', question: 'What is the IBM Quantum Platform used for?', answers: ['Accessing quantum computing tools and services', 'Creating social media accounts', 'Editing spreadsheets only', 'Hosting gaming servers'], correct: 0 },
  { category: 'NUMPY', question: 'Which NumPy command creates a complex-valued array?', answers: ['np.array([1+2j, 3+4j])', 'np.string([1,2])', 'np.text([1,2])', 'np.file([1,2])'], correct: 0 },
  { category: 'NUMPY', question: 'What is the output of np.kron([1,0], [0,1])?', answers: ['[1, 0, 0, 0]', '[0, 1, 0, 0]', '[0, 0, 1, 0]', '[0, 0, 0, 1]'], correct: 1 },
  { category: 'NUMPY', question: 'Which NumPy function computes a conjugate inner product for complex vectors?', answers: ['np.vdot()', 'np.zeros()', 'np.arange()', 'np.shape()'], correct: 0 },
  { category: 'NUMPY', question: 'Which of the following is a valid normalized one-qubit state?', answers: ['[1, 1]ᵀ', '[0, 0]ᵀ', '(1/√2)[1, 1]ᵀ', '[2, 2]ᵀ'], correct: 2 }
];
const examQuestionCount = 20;

const days = [
  { name: 'DAY 1', links: [{ title: 'Installing Qiskit & setting up your environment', href: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', embedUrl: 'https://www.youtube.com/embed/fNk_zzaMoSs' }, { title: 'Vectors, what even are they?', href: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', embedUrl: 'https://www.youtube.com/embed/fNk_zzaMoSs' }] },
  { name: 'DAY 2', links: [{ title: 'Single Systems', href: 'https://www.youtube.com/watch?v=PFDu9oVAE-g', embedUrl: 'https://www.youtube.com/embed/PFDu9oVAE-g' }, { title: 'Multiple Systems', href: 'https://www.youtube.com/watch?v=JAfUZRhEEno', embedUrl: 'https://www.youtube.com/embed/JAfUZRhEEno' }] },
  { name: 'DAY 3', links: [{ title: 'Bloch Sphere Visualization', href: 'https://www.youtube.com/watch?v=a-dIl1Y1aTs', embedUrl: 'https://www.youtube.com/embed/a-dIl1Y1aTs' }, { title: 'Visualizing Qubits on the Bloch Sphere"', href: 'https://youtu.be/30U2DTfIrOU', embedUrl: 'https://www.youtube.com/embed/30U2DTfIrOU' }] },
  { name: 'DAY 4', links: [{ title: 'Single Qubit Gates (Pauli X, Y, Z)', href: 'https://www.youtube.com/watch?v=SjpF9iwyRCc', embedUrl: 'https://www.youtube.com/embed/SjpF9iwyRCc' }, { title: 'Bloch Sphere Visualization with quantum gates', href: 'https://www.youtube.com/watch?v=WjjUfEpej-0', embedUrl: 'https://www.youtube.com/embed/WjjUfEpej-0' }] },
  { name: 'DAY 5', links: [{ title: 'Multiple Systems', href: 'https://youtu.be/DfZZS8Spe7U', embedUrl: 'https://www.youtube.com/embed/DfZZS8Spe7U' }, { title: 'Quantum circuits', href: 'https://youtu.be/30U2DTfIrOU', embedUrl: 'https://www.youtube.com/embed/30U2DTfIrOU' }] },
  { name: 'DAY 6', links: [{ title: 'Watrous Lesson 4, Entanglement in Action (teleportation, superdense coding)"', href: 'https://youtu.be/GSsElSQgMbU', embedUrl: 'https://www.youtube.com/embed/GSsElSQgMbU' }, { title: 'Watrous Lesson 9, Density Matrices (also covers the Bloch sphere)"', href: 'https://youtu.be/CeK9ry8G8HQ', embedUrl: 'https://www.youtube.com/embed/CeK9ry8G8HQ' }] }
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

  if (!videoId) return null;
  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  embedUrl.searchParams.set('autoplay', '1');
  embedUrl.searchParams.set('mute', '1');
  embedUrl.searchParams.set('playsinline', '1');
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
        {day.links.map((link) => {
          const opensOnYouTube = /^https?:\/\/(?:www\.)?(?:youtu\.be|youtube\.com|youtube-nocookie\.com)/i.test(link.href);
          return (
            <a
              className={selectedHref === link.href ? 'is-active' : ''}
              href={link.href}
              key={link.title}
              target={opensOnYouTube ? '_blank' : undefined}
              rel={opensOnYouTube ? 'noopener noreferrer' : undefined}
              aria-current={selectedHref === link.href ? 'page' : undefined}
              onClick={(event) => {
                if (!opensOnYouTube) {
                  event.preventDefault();
                  onVideo(day.name, link);
                } else {
                  onVideo(day.name, link);
                }
              }}
            >
              {link.title}
            </a>
          );
        })}
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
                    <button
                      className="video-play-button"
                      type="button"
                      onClick={() => {
                        const watchUrl = new URL(lesson.link.href);
                        watchUrl.searchParams.set('autoplay', '1');
                        watchUrl.searchParams.set('mute', '0');
                        watchUrl.searchParams.set('rel', '0');
                        window.open(watchUrl.toString(), '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <span aria-hidden="true">▶</span> Open in YouTube
                    </button>
                  </div>
                ) : (
                  <button
                    className="video-play-button"
                    type="button"
                    onClick={() => {
                      const watchUrl = new URL(lesson.link.href);
                      watchUrl.searchParams.set('autoplay', '1');
                      watchUrl.searchParams.set('mute', '0');
                      watchUrl.searchParams.set('rel', '0');
                      window.open(watchUrl.toString(), '_blank', 'noopener,noreferrer');
                      setIsVideoPlaying(true);
                    }}
                  >
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
  const [quizQuestions] = useState(() => [...questions].sort(() => Math.random() - 0.5).slice(0, examQuestionCount));
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

  return <section className="quiz-panel" id="quiz-panel"><div className="quiz-header"><div><p className="eyebrow">KNOWLEDGE CHECK</p><p className="question-label">EXAM 1 <span>/ {quizQuestions.length} QUESTIONS</span></p></div><div className="timer">{String(minutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}</div></div><div className="progress-track"><div className="progress-fill" style={{ width: `${answered / quizQuestions.length * 100}%` }} /></div><div className="question-area"><div className="question-list">{quizQuestions.map((item, questionIndex) => <section className="question-card" key={item.question}><p className="category">{item.category}</p><h2>{String(questionIndex + 1).padStart(2, '0')}. {item.question}</h2><div className="answers">{item.answers.map((answer, answerIndex) => <label className={`answer${answers[questionIndex] === answerIndex ? ' selected' : ''}`} key={answer}><input type="radio" name={`question-${questionIndex}`} checked={answers[questionIndex] === answerIndex} onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: answerIndex }))} /><span className="answer-key">{String.fromCharCode(65 + answerIndex)}</span><span>{answer}</span></label>)}</div></section>)}</div></div><div className="quiz-footer"><div className="quiz-footer-actions"><button className="quiz-back-button" onClick={onBack} type="button">Back to Course</button><span>{answered} of {quizQuestions.length} answered</span></div><button className="next-button" type="button" onClick={() => onFinish(quizQuestions, answers, 1800 - seconds)}>Submit Exam <span>→</span></button></div></section>;
}

function QuizResults({ result, onBack }) {
  return (
    <section className="results-panel">
      <p className="eyebrow">KNOWLEDGE CHECK COMPLETE</p>
      <div className="result-layout">
        <div>
          <h2>Quiz complete.</h2>
          <p id="result-copy">Review your results and the reasoning behind each missed answer.</p>
          <button className="back-course-button" type="button" onClick={onBack}>
            Back to course <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="score-display" aria-label={`${result.correct} of ${result.total} correct`}>
          <span className="score-number">{result.correct}</span>
          <span className="score-denominator">/{result.total} CORRECT</span>
          <span className="score-ring" aria-hidden="true" />
        </div>
      </div>
      <dl className="quiz-result-counts" aria-label="Exam outcome counts">
        <div className="count-correct"><dt>Correct</dt><dd>{result.correct}</dd></div>
        <div className="count-incorrect"><dt>Incorrect</dt><dd>{result.incorrect}</dd></div>
        <div className="count-unattempted"><dt>Unattempted</dt><dd>{result.unattempted}</dd></div>
      </dl>
      <h3 className="answer-review-heading">Question review</h3>
      <ol className="answer-review">
        {result.questions.map((question, index) => (
          <li className={`review-question is-${question.status}`} key={question.question}>
            <div className="review-question-meta">
              <span>{String(index + 1).padStart(2, '0')} · {question.category}</span>
              <span className="review-status">{question.status}</span>
            </div>
            <h3>{question.question}</h3>
            <p><strong>Your answer:</strong> {question.selectedAnswer === null ? 'Not answered' : question.answers[question.selectedAnswer]}</p>
            {question.status !== 'correct' && (
              <div className="review-explanation">
                <p><strong>Correct answer:</strong> {question.answers[question.correct]}</p>
                {question.status === 'incorrect' && question.explanation && <p><strong>Why:</strong> {question.explanation}</p>}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  async function logout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } finally {
      setQuizOpen(false);
      setQuizResult(null);
      setUser(null);
    }
  }

  function finishQuiz(quizQuestions, answers, durationSeconds) {
    const reviewedQuestions = quizQuestions.map((question, index) => ({
      ...question,
      selectedAnswer: answers[index] ?? null,
      status: answers[index] === undefined
        ? 'unattempted'
        : answers[index] === question.correct ? 'correct' : 'incorrect'
    }));
    const result = {
      correct: reviewedQuestions.filter((question) => question.status === 'correct').length,
      incorrect: reviewedQuestions.filter((question) => question.status === 'incorrect').length,
      unattempted: reviewedQuestions.filter((question) => question.status === 'unattempted').length,
      total: quizQuestions.length,
      questions: reviewedQuestions
    };
    setQuizResult(result);
    setQuizOpen(false);
    fetch('/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score: result.correct, totalQuestions: result.total, durationSeconds })
    }).catch(() => {});
  }

  if (user) {
    const quizContent = quizResult
      ? <QuizResults result={quizResult} onBack={() => setQuizResult(null)} />
      : quizOpen
        ? <Quiz onFinish={finishQuiz} onBack={() => setQuizOpen(false)} />
        : null;

    return (
      <ChatGPTHome
        user={user}
        onLogout={logout}
        onQuiz={() => { setQuizResult(null); setQuizOpen(true); }}
        quizContent={quizContent}
        days={days.map((day) => ({
          ...day,
          links: day.links.map((link) => ({ ...link, embedUrl: embeddedUrl(link.href) }))
        }))}
      />
    );
  }

  return <main className="app-shell"><header className="topbar"><a className="brand" href="#top" aria-label="Project Pulse home"><span className="brand-mark"><span /><span /><span /></span><span>Quantum Computing<span className="brand-accent" /></span></a><div className="topbar-meta"><span className="status-dot" /> <span>20 QUESTIONS</span></div></header><Login onLogin={setUser} /><footer className="footer"><span>PROJECT / 2026</span><span>BUILT FOR BETTER UNDERSTANDING</span></footer></main>;
}

export default App;
