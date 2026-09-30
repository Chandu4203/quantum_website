import { useState } from "react";

export default function ChatGPTHome({ user, onLogout, onQuiz, quizContent, days }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [weekOpen, setWeekOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const signedInAs = user?.displayName || user?.username || "Signed-in user";
  const accountName = user?.username ? `${signedInAs} (${user.username})` : signedInAs;


function openVideo(link) {
  const videoUrl = link.embedUrl;

  setSelectedVideo({
    ...link,
    embedUrl: videoUrl,
  });

  setSidebarOpen(false);
  setWeekOpen(false);
}


  return (
    <div className={`app${sidebarOpen ? "" : " sidebar-collapsed"}`}>
      <style>{css}</style>
      <aside className="sidebar" id="left-panel" aria-label="Left panel">
        <header className="sidebar-header">
          {sidebarOpen && <span className="sidebar-brand">Quantum Computing</span>}
          <button
            className="sidebar-toggle"
            type="button"
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            aria-controls="left-panel"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <path d={sidebarOpen ? "M9 4v16" : "M15 4v16"} />
            </svg>
          </button>
        </header>
        {sidebarOpen && (
          <section className="week-section">
            <button
              className="week-toggle"
              type="button"
              aria-expanded={weekOpen}
              aria-controls="week-0-menu"
              onClick={() => setWeekOpen((open) => !open)}
            >
              <span>Week 0</span>
              <svg className={weekOpen ? "week-chevron is-open" : "week-chevron"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {weekOpen && (
              <div className="week-menu" id="week-0-menu">
                <span>Course overview</span>
                {days.map((day) => (
                  <div className="week-day-links" key={day.name}>
                    <span className="week-day-heading">{day.name}</span>
                    {day.links.map((link) => (
                      <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); openVideo({ ...link, dayName: day.name }); }}>
                        {link.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
        {sidebarOpen && (
          <button className="quiz-launch-button" type="button" onClick={onQuiz}>
            <span>Start quiz</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </aside>
      <main className="main" aria-label="Right panel">
        <header className="account-header">
          <span className="account-label">SIGNED IN AS <strong>{accountName}</strong></span>
          <button className="logout-button" type="button" onClick={onLogout}>Sign out</button>
        </header>
        {quizContent ? (
          <section className="quiz-content" aria-label="Quiz">
            {quizContent}
          </section>
        ) : selectedVideo && (
          <section className="video-panel" aria-label="Selected video">
            <p className="video-label">{selectedVideo.dayName} {selectedVideo.embedUrl ? 'VIDEO' : 'LESSON RESOURCE'}</p>
            <h1>{selectedVideo.title}</h1>
            {selectedVideo.embedUrl && (
              <div className="video-frame">
                <iframe
                src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="origin"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", border: "0" }}
                />
              </div>
            )}
            <a className="youtube-fallback" href={selectedVideo.href} target="_blank" rel="noopener noreferrer">
              {selectedVideo.embedUrl ? 'Open on YouTube' : 'Open lesson in a new tab'} <span aria-hidden="true">↗</span>
            </a>
          </section>
        )}
      </main>
    </div>
  );
}

const css = `
.app, .app * { box-sizing: border-box; }
.app {
  display: flex;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--display);
  font-size: 14px;
}
.sidebar {
  width: 260px;
  flex: 0 0 260px;
  height: 100%;
  overflow-y: auto;
  background: var(--cream);
  border-right: 1px solid var(--line);
  transition: width 180ms ease, flex-basis 180ms ease;
}
.sidebar-collapsed .sidebar { width: 58px; flex-basis: 58px; }
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  gap: 10px;
  padding: 12px 16px 12px 20px;
  border-bottom: 1px solid var(--line);
}
.sidebar-brand { color: var(--ink); font: 700 16px var(--display); white-space: nowrap; }
.sidebar-toggle {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: var(--paper);
  color: var(--ink);
  cursor: pointer;
}
.sidebar-toggle:hover { background: var(--lime); }
.sidebar-toggle:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }
.sidebar-collapsed .sidebar-header { justify-content: center; padding: 12px 8px; }
.week-section { padding: 12px 10px; }
.week-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 42px;
  padding: 0 10px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  font: 500 12px var(--mono);
  text-align: left;
  cursor: pointer;
}
.week-toggle:hover { border-color: var(--coral); }
.week-chevron { color: var(--coral); transition: transform 160ms ease; }
.week-chevron.is-open { transform: rotate(180deg); }
.week-menu { padding: 12px 12px 6px; color: var(--muted); font-size: 13px; }
.quiz-launch-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  min-height: 40px;
  margin: 4px 10px 12px;
  padding: 0 10px;
  border: 1px solid var(--line);
  background: var(--lime);
  color: var(--ink);
  font: 500 11px var(--mono);
  text-align: left;
}
.quiz-launch-button:hover { border-color: var(--coral); }
.quiz-launch-button:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }
.week-day-links { display: grid; gap: 4px; margin-top: 14px; }
.week-day-heading { color: var(--coral); font: 10px var(--mono); letter-spacing: .06em; text-transform: uppercase; }
.week-day-links a { padding: 6px 0; color: var(--muted); font-size: 12px; line-height: 1.4; text-decoration: none; }
.week-day-links a:hover { color: var(--ink); text-decoration: underline; text-decoration-color: var(--coral); }
.main { flex: 1; min-width: 0; background: var(--paper); }
.quiz-content { height: calc(100% - 64px); overflow: auto; padding: 1px 32px 32px; }
.account-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
  min-height: 64px;
  padding: 12px 24px;
  border-bottom: 1px solid var(--line);
}
.account-label { color: var(--muted); font: 10px/1.5 var(--mono); letter-spacing: .04em; text-align: right; }
.account-label strong { color: var(--ink); font-weight: 500; }
.logout-button {
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: var(--cream);
  color: var(--coral);
  font: 10px var(--mono);
  cursor: pointer;
}
.logout-button:hover { border-color: var(--coral); background: var(--coral); color: var(--ink); }
.logout-button:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }
.video-panel { height: calc(100% - 64px); overflow: auto; padding: 32px; }
.video-label { margin: 0 0 12px; color: var(--coral); font: 10px var(--mono); letter-spacing: .08em; }
.video-panel h1 { margin: 0 0 22px; color: var(--ink); font: 600 24px/1.25 var(--display); }
.video-frame { width: 100%; max-width: 1100px; aspect-ratio: 16 / 9; background: var(--ink); }
.video-frame iframe { display: block; width: 100%; height: 100%; border: 0; }
.youtube-fallback { display: inline-flex; align-items: center; gap: 8px; margin-top: 14px; color: var(--coral); font: 11px var(--mono); text-decoration: none; }
.youtube-fallback:hover { color: var(--ink); text-decoration: underline; text-decoration-color: var(--coral); }
@media (max-width: 520px) {
  .account-header { gap: 10px; padding-inline: 12px; }
  .account-label { font-size: 9px; }
  .quiz-content { padding: 1px 14px 20px; }
  .video-panel { padding: 20px 14px; }
  .video-panel h1 { font-size: 20px; }
}
`;
