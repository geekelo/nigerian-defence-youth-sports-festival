import { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'
import LoginForm from '../components/LoginForm.jsx'
import { fetchTeamRegistrations } from '../api/registrations.js'
import { teamDisplayName } from '../data/event.js'
import { EVENT } from '../brand.js'
import PageHero from '../components/PageHero.jsx'
import { icon } from '../icons.jsx'

function formatDate(value) {
  if (!value) return '—'
  try {
    return new Date(value).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return value
  }
}

function teamPlayers(team) {
  if (Array.isArray(team.players)) {
    return team.players
      .map((name) => (typeof name === 'string' ? name.trim() : ''))
      .filter(Boolean)
  }
  return Array.from({ length: 24 }, (_, i) => team[`player_${i + 1}`])
    .map((name) => (typeof name === 'string' ? name.trim() : ''))
    .filter(Boolean)
}

function Registrations() {
  const { isAuthenticated } = useAuth()
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [teamError, setTeamError] = useState(null)

  useEffect(() => {
    if (!isAuthenticated) {
      setTeams([])
      setTeamError(null)
      return
    }

    let cancelled = false

    async function loadRegistrations() {
      setLoading(true)
      setTeamError(null)

      try {
        const list = await fetchTeamRegistrations()
        if (!cancelled) setTeams(list)
      } catch (err) {
        if (!cancelled) {
          setTeams([])
          setTeamError(err.message || 'Unable to load team registrations.')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadRegistrations()
    return () => {
      cancelled = true
    }
  }, [isAuthenticated])

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Registrations"
        subtitle={
          isAuthenticated
            ? 'View team registrations'
            : 'Sign in to view registrations'
        }
      />

      <div className="reg-body">
        {!isAuthenticated ? (
          <div className="login-wrap">
            <LoginForm
              title="LOGIN REQUIRED"
              subtitle="Sign in to view team registrations"
            />
          </div>
        ) : (
          <section className="reg-card regs-card">
            <div className="reg-card-head">
              <span className="reg-card-icon green">{icon.teams}</span>
              <div>
                <h2>TEAM REGISTRATIONS</h2>
                <p>
                  Barracks · Sport · Gender teams
                  {loading ? '' : ` · ${teams.length} registered`}
                </p>
              </div>
            </div>

            {teamError && <p className="reg-status err">{teamError}</p>}

            {loading ? (
              <p className="regs-empty">Loading team registrations…</p>
            ) : teams.length === 0 && !teamError ? (
              <p className="regs-empty">No team registrations yet.</p>
            ) : teams.length > 0 ? (
              <div className="team-regs-list">
                {teams.map((t, index) => {
                  const players = teamPlayers(t)
                  return (
                    <article
                      className="team-reg-card"
                      key={t.id ?? `${t.team_captain}-${index}`}
                    >
                      <div className="team-reg-top">
                        <span className="team-reg-index">{index + 1}</span>
                        <div className="team-reg-meta">
                          <h3>
                            {teamDisplayName({
                              barracks: t.barracks,
                              sport: t.sport,
                              gender: t.team_gender || t.gender,
                            })}
                          </h3>
                          <p>
                            Captain: <strong>{t.team_captain || '—'}</strong>
                            {t.coach ? ` · Coach: ${t.coach}` : ''}
                          </p>
                        </div>
                      </div>

                      <div className="team-reg-stats">
                        <div>
                          <span>Barracks</span>
                          <strong>{t.barracks || '—'}</strong>
                        </div>
                        <div>
                          <span>Sport</span>
                          <strong>{t.sport || '—'}</strong>
                        </div>
                        <div>
                          <span>Gender</span>
                          <strong>{t.team_gender || t.gender || '—'}</strong>
                        </div>
                        <div>
                          <span>Players</span>
                          <strong>{players.length}</strong>
                        </div>
                        <div>
                          <span>Date</span>
                          <strong>{formatDate(t.created_at)}</strong>
                        </div>
                      </div>

                      <div className="team-reg-players">
                        <h4>Players ({players.length})</h4>
                        {players.length === 0 ? (
                          <p className="regs-empty">No player names provided.</p>
                        ) : (
                          <ol>
                            {players.map((name, i) => (
                              <li key={`${t.id || index}-p${i}`}>
                                <span className="player-no">{i + 1}</span>
                                <span className="player-name">{name}</span>
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : null}
          </section>
        )}
      </div>
    </div>
  )
}

export default Registrations
