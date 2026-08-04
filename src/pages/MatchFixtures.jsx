import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TEAMS,
  FIXTURES,
  teamName,
  teamShort,
  sportName,
  formatFixtureTime,
} from '../data/competition.js'
import { EVENT_DAYS, SPORTS, venueForSport } from '../data/event.js'
import { EVENT } from '../brand.js'
import PageHero from '../components/PageHero.jsx'
import { icon, sportIcon } from '../icons.jsx'

/** Distinct badge colours so each barracks reads differently on the cards. */
const BADGE_COLORS = {
  MAM: 'linear-gradient(160deg, #7c3aed, #4c1d95)',
  MOG: 'linear-gradient(160deg, #0ea5e9, #075985)',
  NVY: 'linear-gradient(160deg, #10b981, #065f46)',
  NNB: 'linear-gradient(160deg, #2563eb, #1e3a8a)',
  AZA: 'linear-gradient(160deg, #f59e0b, #b45309)',
  NBC: 'linear-gradient(160deg, #ef4444, #991b1b)',
  SHA: 'linear-gradient(160deg, #14b8a6, #115e59)',
  LUN: 'linear-gradient(160deg, #ec4899, #9d174d)',
}

function TeamBadge({ code }) {
  return (
    <span
      className="fx-team-badge"
      style={{ background: BADGE_COLORS[code] || 'linear-gradient(160deg, #475569, #1e293b)' }}
    >
      {code}
    </span>
  )
}

function MatchFixtures() {
  const [sport, setSport] = useState('all')
  const [day, setDay] = useState('Day 2')

  const fixtures = useMemo(
    () =>
      FIXTURES.filter(
        (f) =>
          (sport === 'all' || f.sport === sport) &&
          (day === 'all' || f.day === day),
      ),
    [sport, day],
  )

  const byDay = useMemo(() => {
    const map = new Map()
    for (const f of fixtures) {
      const key = `${f.day} · ${f.date}`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(f)
    }
    return [...map.entries()]
  }, [fixtures])

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Match Fixtures"
        subtitle={`${EVENT.shortName} · ${EVENT.dateRangeShort}`}
      />

      <div className="reg-body fx-body">
        <div className="filter-bar">
          <div className="pill-group">
            <button
              type="button"
              className={`pill${day === 'all' ? ' active' : ''}`}
              onClick={() => setDay('all')}
            >
              {icon.schedule}
              All Days
            </button>
            {EVENT_DAYS.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`pill${day === d.id ? ' active' : ''}`}
                onClick={() => setDay(d.id)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="pill-group">
            <button
              type="button"
              className={`pill${sport === 'all' ? ' active' : ''}`}
              onClick={() => setSport('all')}
            >
              {icon.grid}
              All Sports
            </button>
            {SPORTS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`pill${sport === s.id ? ' active' : ''}`}
                onClick={() => setSport(s.id)}
              >
                {sportIcon[s.id]}
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {byDay.length === 0 ? (
          <p className="regs-empty">No fixtures match the selected filters.</p>
        ) : (
          byDay.map(([dayLabel, rows]) => (
            <div key={dayLabel}>
              <div className="fx-day-heading">
                <h2>{dayLabel}</h2>
                <span>
                  {rows.length} fixtures
                  {dayLabel.startsWith('Day 2') ? ' · Official LOC schedule' : ''}
                </span>
              </div>

              <div className="fx-grid" style={{ marginTop: 14 }}>
                {rows.map((f, i) => (
                  <article
                    className="fx-card"
                    key={`${f.home}-${f.away}-${f.sport}-${f.time}-${i}`}
                  >
                    <div className="fx-card-top">
                      <span className="fx-tag time">
                        {icon.clock}
                        {formatFixtureTime(f.time)}
                      </span>
                      <span className={`fx-tag ${f.sport}`}>
                        {sportIcon[f.sport]}
                        {sportName(f.sport)}
                        {f.gender === 'male'
                          ? ' · M'
                          : f.gender === 'female'
                            ? ' · F'
                            : ' · M/F'}
                      </span>
                    </div>

                    <div className="fx-card-body">
                      <div className="fx-team">
                        <TeamBadge code={f.home} />
                        <span className="fx-team-name">{teamShort(f.home)}</span>
                      </div>
                      <span className="fx-vs">VS</span>
                      <div className="fx-team">
                        <TeamBadge code={f.away} />
                        <span className="fx-team-name">{teamShort(f.away)}</span>
                      </div>
                    </div>

                    <div className="fx-card-foot">
                      {icon.pin}
                      {[f.note, f.venue || venueForSport(f.sport)].filter(Boolean).join(' · ')}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}

        <div className="section-cta">
          <Link className="reg-btn" to="/schedule">
            {icon.schedule} View Full Schedule {icon.chevron}
          </Link>
        </div>

        <section className="reg-card">
          <div className="reg-card-head">
            <span className="reg-card-icon blue">{icon.info}</span>
            <div>
              <h2>Team Key</h2>
              <p>Barracks codes used in fixtures · {EVENT.venues.join(' · ')}</p>
            </div>
          </div>
          <ul className="fx-key">
            {TEAMS.map((t) => (
              <li key={t.code}>
                <span className="fx-code">{t.code}</span>
                {teamName(t.code)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default MatchFixtures
