import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  TEAMS,
  FIXTURES,
  fixturesForSport,
  teamName,
  teamShort,
  sportName,
} from '../data/competition.js'
import { SPORTS } from '../data/event.js'
import { EVENT } from '../brand.js'
import { BrandLogos } from '../components/BrandLogos.jsx'
import { icon } from '../icons.jsx'

function MatchFixtures() {
  const { openNav } = useOutletContext()
  const [sport, setSport] = useState('all')

  const fixtures = useMemo(
    () => (sport === 'all' ? FIXTURES : fixturesForSport(sport)),
    [sport],
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
      <header className="reg-topbar">
        <div className="reg-topbar-lead">
          <BrandLogos />
          <div className="reg-topbar-title">
            <h1>MATCH FIXTURES</h1>
            <p>
              {EVENT.shortName} · {EVENT.dateRangeShort}
            </p>
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

      <div className="reg-body fx-body">
        <section className="reg-card fx-hero">
          <div className="reg-card-head">
            <span className="reg-card-icon blue">{icon.matches}</span>
            <div>
              <h2>8 BARRACKS · 3 SPORTS · M/F</h2>
              <p>
                {EVENT.venues.join(' · ')}
              </p>
            </div>
          </div>

          <div className="fx-teams">
            {TEAMS.map((team) => (
              <div className="fx-team" key={team.code}>
                <span className="fx-code">{team.code}</span>
                <span className="fx-name">{team.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="reg-type-toggle lb-tabs">
          <button
            type="button"
            className={`reg-type-btn${sport === 'all' ? ' active' : ''}`}
            onClick={() => setSport('all')}
          >
            All Sports
          </button>
          {SPORTS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`reg-type-btn${sport === s.id ? ' active' : ''}`}
              onClick={() => setSport(s.id)}
            >
              {s.name}
            </button>
          ))}
        </div>

        {byDay.map(([dayLabel, rows]) => (
          <section className="reg-card" key={dayLabel}>
            <div className="reg-card-head">
              <span className="reg-card-icon green">{icon.schedule}</span>
              <div>
                <h2>{dayLabel.toUpperCase()}</h2>
                <p>{rows.length} fixtures · Male &amp; Female</p>
              </div>
            </div>

            <ol className="fx-list">
              {rows.map((f, i) => (
                <li className="fx-bout" key={`${f.home}-${f.away}-${f.sport}-${f.time}-${i}`}>
                  <span className="fx-round">
                    {f.time} · {sportName(f.sport)} (M/F)
                    {f.note ? ` · ${f.note}` : ''}
                  </span>
                  <div className="fx-vs">
                    <span className="fx-side">
                      <span className="fx-code sm">{f.home}</span>
                      {teamShort(f.home)}
                    </span>
                    <span className="fx-vs-label">vs</span>
                    <span className="fx-side">
                      <span className="fx-code sm">{f.away}</span>
                      {teamShort(f.away)}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="reg-card">
          <div className="reg-card-head">
            <span className="reg-card-icon blue">{icon.info}</span>
            <div>
              <h2>TEAM KEY</h2>
              <p>Barracks codes used in fixtures</p>
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
