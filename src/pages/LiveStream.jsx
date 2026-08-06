import { EVENT } from '../brand.js'
import PageHero from '../components/PageHero.jsx'
import { icon } from '../icons.jsx'

const SESSIONS = [
  {
    platform: 'x',
    url: 'https://x.com/i/broadcasts/1AGRnnDVrzjGl',
    title: 'Female Volleyball · Mogadishu Cantonment',
    note: 'Day 3 · Live on X (Twitter)',
    live: true,
  },
  {
    platform: 'youtube',
    id: null,
    title: `${EVENT.shortName.toUpperCase()} · FINALS & CLOSING`,
    note: 'Finals and medal presentation · 7 Aug 2026.',
  },
]

function youtubeEmbed(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`
}

function youtubeWatch(id) {
  return `https://www.youtube.com/live/${id}`
}

function LiveStream() {
  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Live Stream"
        subtitle={`Watch ${EVENT.shortName} live`}
      />

      <div className="reg-body live-body">
        {SESSIONS.map((session, index) => {
          const isYoutube = session.platform === 'youtube' && session.id
          const isExternal = Boolean(session.url)

          return (
            <section className="reg-card live-card" key={session.title}>
              <div className="reg-card-head">
                <span className="reg-card-icon blue">{icon.live}</span>
                <div>
                  <h2>
                    {session.live ? <span className="live-now-dot" aria-hidden /> : null}
                    {session.title}
                  </h2>
                  <p>
                    {isYoutube ? (
                      <>
                        Stream on YouTube ·{' '}
                        <a href={youtubeWatch(session.id)} target="_blank" rel="noreferrer">
                          Open in YouTube
                        </a>
                      </>
                    ) : isExternal ? (
                      <>
                        {session.note} ·{' '}
                        <a href={session.url} target="_blank" rel="noreferrer">
                          Open on X
                        </a>
                      </>
                    ) : (
                      session.note
                    )}
                  </p>
                </div>
              </div>

              {isYoutube ? (
                <div className="live-player">
                  <iframe
                    src={youtubeEmbed(session.id)}
                    title={session.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : isExternal ? (
                <a
                  className="live-external"
                  href={session.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="live-placeholder-badge live-now-badge">Live now</span>
                  <p>Female volleyball at Mogadishu Cantonment — tap to watch on X.</p>
                  <span className="live-external-cta">Watch livestream →</span>
                </a>
              ) : (
                <div className="live-placeholder">
                  <span className="live-placeholder-badge">Coming soon</span>
                  <p>
                    Session {index + 1} will embed here once the official stream
                    link is confirmed.
                  </p>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default LiveStream
