import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTeamRegistration } from '../api/registrations.js'
import {
  BARRACKS,
  GENDERS,
  SPORTS,
  TOTAL_TEAM_SLOTS,
  rosterSizeForSport,
} from '../data/event.js'
import { EVENT } from '../brand.js'
import PageHero from '../components/PageHero.jsx'
import { icon } from '../icons.jsx'

function emptyTeam(sport = 'basketball') {
  const size = rosterSizeForSport(sport)
  return {
    captain: '',
    coach: '',
    barracks: '',
    sport,
    gender: 'male',
    players: Array(size).fill(''),
    travel: 'road',
    accommodation: 'yes',
  }
}

function validateTeam(team) {
  if (!team.barracks) return 'Barracks is required.'
  if (!team.sport) return 'Sport / Event is required.'
  if (!team.gender) return 'Team gender is required.'
  if (!team.captain.trim()) return 'Team captain is required.'
  if (!team.coach.trim()) return 'Coach / Team leader is required.'
  const size = rosterSizeForSport(team.sport)
  if (team.players.length < size) return `Enter all ${size} player names.`
  if (team.players.some((p) => !p.trim())) {
    return `All ${size} player names are required.`
  }
  return null
}

function Register() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const [team, setTeam] = useState(() => emptyTeam())

  const rosterSize = useMemo(
    () => rosterSizeForSport(team.sport),
    [team.sport],
  )

  const setT = (k, v) => setTeam((p) => ({ ...p, [k]: v }))

  const setSport = (sport) => {
    const size = rosterSizeForSport(sport)
    setTeam((p) => {
      const players = Array(size)
        .fill('')
        .map((_, i) => p.players[i] || '')
      return { ...p, sport, players }
    })
  }

  const setPlayer = (i, v) =>
    setTeam((p) => {
      const players = [...p.players]
      players[i] = v
      return { ...p, players }
    })

  const handleSubmit = async () => {
    setStatus(null)

    const error = validateTeam(team)
    if (error) {
      setStatus({ type: 'err', message: error })
      return
    }

    setSubmitting(true)
    try {
      const barracks = BARRACKS.find((b) => b.code === team.barracks)
      await createTeamRegistration({
        ...team,
        barracksName: barracks?.name || team.barracks,
      })
      setTeam(emptyTeam(team.sport))
      setStatus({
        type: 'ok',
        message: 'Registration submitted successfully.',
      })
    } catch (err) {
      setStatus({
        type: 'err',
        message: err.message || 'Unable to submit registration. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Registration"
        subtitle={`Register a barracks team (male or female) for basketball, football or volleyball — ${TOTAL_TEAM_SLOTS} team slots across 8 barracks.`}
      />

      <div className="reg-body">
        <div className="reg-cards">
          <section className="reg-card card-team">
            <div className="reg-card-head">
              <span className="reg-card-icon green">{icon.teams}</span>
              <div>
                <h2>TEAM REGISTRATION</h2>
                <p>One male and one female team per barracks, per sport</p>
              </div>
            </div>

            <div className="reg-grid-2">
              <div className="reg-field">
                <label>Barracks <span className="req">*</span></label>
                <select
                  value={team.barracks}
                  onChange={(e) => setT('barracks', e.target.value)}
                >
                  <option value="">Select Barracks</option>
                  {BARRACKS.map((b) => (
                    <option key={b.code} value={b.code}>{b.name}</option>
                  ))}
                </select>
              </div>
              <div className="reg-field">
                <label>Sport / Event <span className="req">*</span></label>
                <select
                  value={team.sport}
                  onChange={(e) => setSport(e.target.value)}
                >
                  {SPORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.rosterSize} players)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="reg-field">
              <label>Team Gender <span className="req">*</span></label>
              <div className="reg-seg">
                {GENDERS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={team.gender === g.id ? 'active' : ''}
                    onClick={() => setT('gender', g.id)}
                  >
                    {icon.user} {g.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="reg-grid-2">
              <div className="reg-field">
                <label>Team Captain <span className="req">*</span></label>
                <input
                  placeholder="Enter team captain name"
                  value={team.captain}
                  onChange={(e) => setT('captain', e.target.value)}
                />
              </div>
              <div className="reg-field">
                <label>Coach / Team Leader <span className="req">*</span></label>
                <input
                  placeholder="Enter coach or team leader name"
                  value={team.coach}
                  onChange={(e) => setT('coach', e.target.value)}
                />
              </div>
            </div>

            <div className="reg-section-title">
              TEAM PLAYERS ({rosterSize} REQUIRED)
            </div>
            <div className="reg-players">
              {team.players.map((val, i) => (
                <div className="reg-player" key={i}>
                  <span className="reg-player-no">{i + 1}</span>
                  <span className="reg-player-lbl">
                    Player {i + 1} <span className="req">*</span>
                  </span>
                  <input
                    placeholder="Enter full name"
                    value={val}
                    onChange={(e) => setPlayer(i, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="reg-grid-2" style={{ marginTop: '18px' }}>
              <div className="reg-field">
                <label>Travel Mode <span className="req">*</span></label>
                <div className="reg-seg">
                  <button type="button" className={team.travel === 'air' ? 'active' : ''} onClick={() => setT('travel', 'air')}>{icon.plane} Air</button>
                  <button type="button" className={team.travel === 'road' ? 'active' : ''} onClick={() => setT('travel', 'road')}>{icon.car} Road</button>
                </div>
              </div>
              <div className="reg-field">
                <label>Accommodation <span className="req">*</span></label>
                <div className="reg-seg green">
                  <button type="button" className={team.accommodation === 'yes' ? 'active' : ''} onClick={() => setT('accommodation', 'yes')}>{icon.check} Yes</button>
                  <button type="button" className={team.accommodation === 'no' ? 'active' : ''} onClick={() => setT('accommodation', 'no')}>{icon.x} No</button>
                </div>
              </div>
            </div>

            <div className="reg-note">
              {icon.info}
              <span>
                <strong>Note:</strong> Each barracks may register one male and one female
                team for each of basketball, football and volleyball ({TOTAL_TEAM_SLOTS} teams total).
              </span>
            </div>
          </section>
        </div>
      </div>

      <footer className="reg-footer">
        {status && (
          <p className={`reg-status ${status.type === 'ok' ? 'ok' : 'err'}`}>
            {status.message}
          </p>
        )}
        <div className="reg-footer-actions">
          <button className="reg-btn ghost" type="button" onClick={() => navigate('/')}>
            {icon.x} Cancel
          </button>
          <button
            className="reg-btn primary"
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? 'Submitting…' : 'Submit'} {icon.arrow}
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Register
