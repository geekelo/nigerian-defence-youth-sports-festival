import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  RESULTS,
  PENDING_MATCHES,
  buildStandings,
  teamShort,
  resultSides,
  resultWinner,
  sportName,
} from '../data/competition.js'
import { EVENT_DAYS, SPORTS } from '../data/event.js'
import { EVENT } from '../brand.js'
import PageHero from '../components/PageHero.jsx'
import { icon, sportIcon } from '../icons.jsx'

const GENDER_TABS = [
  { id: 'overall', label: 'Overall' },
  { id: 'female', label: 'Female' },
  { id: 'male', label: 'Male' },
]

function rankClass(rank) {
  if (rank === 1) return 'gold'
  if (rank === 2) return 'silver'
  if (rank === 3) return 'bronze'
  return ''
}

/** Pull "Day N" from labels like "Day 2 · Game 1" or "Day 4 · Semi-final 1". */
function dayFromLabel(label = '') {
  const match = String(label).match(/^Day\s+(\d+)/i)
  return match ? `Day ${match[1]}` : null
}

function daySortKey(dayId) {
  const n = Number(String(dayId).replace(/\D/g, ''))
  return Number.isFinite(n) ? n : 99
}

function collectResults(sportId, genderId) {
  const sport = RESULTS[sportId] || { male: [], female: [] }
  if (genderId === 'male') {
    return (sport.male || []).map((r) => ({ ...r, gender: 'male' }))
  }
  if (genderId === 'female') {
    return (sport.female || []).map((r) => ({ ...r, gender: 'female' }))
  }
  return [
    ...(sport.male || []).map((r) => ({ ...r, gender: 'male' })),
    ...(sport.female || []).map((r) => ({ ...r, gender: 'female' })),
  ]
}

function Leaderboard() {
  const [sport, setSport] = useState('volleyball')
  const [tab, setTab] = useState('male')
  const [day, setDay] = useState('all')

  const allRows = useMemo(
    () => collectResults(sport, tab),
    [sport, tab],
  )

  const rows = useMemo(() => {
    if (day === 'all') return allRows
    return allRows.filter((r) => dayFromLabel(r.label) === day)
  }, [allRows, day])

  const standings = useMemo(
    () => buildStandings(rows).filter((row) => row.played > 0),
    [rows],
  )

  const resultsByDay = useMemo(() => {
    const map = new Map()
    for (const r of rows) {
      const key = dayFromLabel(r.label) || 'Other'
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(r)
    }
    return [...map.entries()].sort(
      (a, b) => daySortKey(a[0]) - daySortKey(b[0]),
    )
  }, [rows])

  const pending = useMemo(
    () =>
      PENDING_MATCHES.filter(
        (m) =>
          m.sport === sport &&
          (tab === 'overall' || m.gender === tab) &&
          (day === 'all' || m.day === day),
      ),
    [sport, tab, day],
  )

  const dayLabel =
    day === 'all'
      ? 'All days'
      : EVENT_DAYS.find((d) => d.id === day)?.label || day

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Leaderboard"
        subtitle={`${EVENT.shortName} standings · Days 1–5 results`}
      />

      <div className="reg-body lb-body">
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

          <div className="pill-group">
            {GENDER_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`pill${tab === t.id ? ' active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <section className="reg-card regs-card">
          <div className="reg-card-head">
            <span className="reg-card-icon green">{icon.leaderboard}</span>
            <div>
              <h2>
                {sportName(sport).toUpperCase()} ·{' '}
                {tab === 'female'
                  ? 'FEMALE'
                  : tab === 'male'
                    ? 'MALE'
                    : 'OVERALL'}{' '}
                STANDINGS
              </h2>
              <p>
                {dayLabel} · Ranked by points, then goal/point difference ·{' '}
                <Link to="/match-fixtures">View fixtures</Link>
              </p>
            </div>
          </div>

          {standings.length === 0 ? (
            <p className="regs-empty">
              No {sportName(sport)} results for {dayLabel.toLowerCase()}
              {tab !== 'overall' ? ` (${tab})` : ''} yet.
            </p>
          ) : (
            <div className="regs-table-wrap">
              <table className="regs-table lb-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Barracks</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>PF</th>
                    <th>PA</th>
                    <th>Diff</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((row, i) => {
                    const rank = i + 1
                    return (
                      <tr key={row.code} className={rankClass(rank)}>
                        <td>
                          <span className={`lb-rank ${rankClass(rank)}`}>{rank}</span>
                        </td>
                        <td>
                          <span className="lb-team">
                            <span className="fx-code sm">{row.code}</span>
                            {row.short}
                          </span>
                        </td>
                        <td>{row.played}</td>
                        <td>{row.wins}</td>
                        <td>{row.draws}</td>
                        <td>{row.losses}</td>
                        <td>{row.pointsFor}</td>
                        <td>{row.pointsAgainst}</td>
                        <td>{row.diff > 0 ? `+${row.diff}` : row.diff}</td>
                        <td><strong>{row.points}</strong></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}

          {resultsByDay.length > 0 && (
            <>
              {resultsByDay.map(([dayKey, dayRows]) => (
                <div key={dayKey} className="lb-day-block">
                  <div className="reg-section-title">
                    {dayKey === 'Other'
                      ? 'Results'
                      : `${dayKey} · Results`}
                    {tab === 'overall' ? '' : ` · ${tab === 'female' ? 'Female' : 'Male'}`}
                  </div>
                  <div className="fx-results">
                    {dayRows.map((r, index) => {
                      const sides = resultSides(r.scores)
                      if (!sides) return null
                      const winner = resultWinner(r.scores)
                      return (
                        <div
                          className="fx-result"
                          key={`${r.gender}-${r.label}-${sides.left}-${sides.right}-${index}`}
                        >
                          <div className="fx-result-weight">
                            {r.label || sportName(sport)}
                            {tab === 'overall' && r.gender
                              ? ` · ${r.gender === 'female' ? 'Female' : 'Male'}`
                              : ''}
                            {r.note ? ` · ${r.note}` : ''}
                          </div>
                          <div className="fx-result-score">
                            <span className={`fx-side${winner === sides.left ? ' win' : ''}`}>
                              <span className="fx-code sm">{sides.left}</span>
                              {teamShort(sides.left)}
                              <strong>{sides.leftScore}</strong>
                            </span>
                            <span className="fx-vs-label">–</span>
                            <span className={`fx-side${winner === sides.right ? ' win' : ''}`}>
                              <span className="fx-code sm">{sides.right}</span>
                              {teamShort(sides.right)}
                              <strong>{sides.rightScore}</strong>
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </>
          )}

          {pending.length > 0 && (
            <>
              <div className="reg-section-title" style={{ marginTop: 24 }}>
                Upcoming
              </div>
              <div className="fx-results">
                {pending.map((m) => (
                  <div className="fx-result" key={`${m.label}-${m.home}-${m.away}`}>
                    <div className="fx-result-weight">
                      {m.label}
                      {m.venue ? ` · ${m.venue}` : ''}
                    </div>
                    <div className="fx-result-score">
                      <span className="fx-side">
                        <span className="fx-code sm">{m.home}</span>
                        {teamShort(m.home)}
                      </span>
                      <span className="fx-vs-label">vs</span>
                      <span className="fx-side">
                        <span className="fx-code sm">{m.away}</span>
                        {teamShort(m.away)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default Leaderboard
