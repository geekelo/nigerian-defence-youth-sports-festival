import { useOutletContext } from 'react-router-dom'
import { EVENT } from '../brand.js'
import { BrandLogos } from '../components/BrandLogos.jsx'
import { icon } from '../icons.jsx'

/** Placeholder sessions — replace YouTube IDs when streams go live */
const SESSIONS = [
  {
    id: null,
    title: `${EVENT.shortName.toUpperCase()} · OPENING DAY`,
    note: 'Stream link will be published closer to the event (3 Aug 2026).',
  },
  {
    id: null,
    title: `${EVENT.shortName.toUpperCase()} · MIDWEEK SESSION`,
    note: 'Basketball, football and volleyball coverage.',
  },
  {
    id: null,
    title: `${EVENT.shortName.toUpperCase()} · FINALS & CLOSING`,
    note: 'Finals and medal presentation · 7 Aug 2026.',
  },
]

function sessionEmbed(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`
}

function sessionWatch(id) {
  return `https://www.youtube.com/live/${id}`
}

function LiveStream() {
  const { openNav } = useOutletContext()

  return (
    <div className="reg-main">
      <header className="reg-topbar">
        <div className="reg-topbar-lead">
          <BrandLogos />
          <div className="reg-topbar-title">
            <h1>LIVE STREAM</h1>
            <p>Watch {EVENT.shortName} live</p>
          </div>
        </div>
        <button
          className="reg-mobile-menu"
          type="button"
          onClick={openNav}
          aria-label="Toggle menu"
        >
          {icon.menu}
        </button>
      </header>

      <div className="reg-body live-body">
        {SESSIONS.map((session, index) => (
          <section className="reg-card live-card" key={session.title}>
            <div className="reg-card-head">
              <span className="reg-card-icon blue">{icon.live}</span>
              <div>
                <h2>{session.title}</h2>
                <p>
                  {session.id ? (
                    <>
                      Stream on YouTube ·{' '}
                      <a href={sessionWatch(session.id)} target="_blank" rel="noreferrer">
                        Open in YouTube
                      </a>
                    </>
                  ) : (
                    session.note
                  )}
                </p>
              </div>
            </div>

            {session.id ? (
              <div className="live-player">
                <iframe
                  src={sessionEmbed(session.id)}
                  title={session.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <div className="live-placeholder">
                <span className="live-placeholder-badge">Coming soon</span>
                <p>
                  Session {index + 1} will embed here once the official YouTube
                  live stream ID is confirmed.
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

export default LiveStream
