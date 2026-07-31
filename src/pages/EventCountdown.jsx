import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { EVENT, logos } from '../brand.js'
import { BrandLogos } from '../components/BrandLogos.jsx'
import { icon } from '../icons.jsx'

const EVENT_DATE = new Date(EVENT.startDate)

function getRemaining() {
  const total = EVENT_DATE.getTime() - Date.now()
  const clamp = Math.max(0, total)
  return {
    total,
    days: Math.floor(clamp / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamp / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamp / (1000 * 60 * 60)) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  }
}

function EventCountdown({ title = 'Home', subtitle = 'Countdown to the main event' }) {
  const { openNav } = useOutletContext()
  const [time, setTime] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Minutes', time.minutes],
    ['Seconds', time.seconds],
  ]

  return (
    <div className="reg-main">
      <header className="reg-topbar">
        <div className="reg-topbar-lead">
          <BrandLogos />
          <div className="reg-topbar-title">
            <h1>{title.toUpperCase()}</h1>
            <p>{subtitle}</p>
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

      <div className="reg-body cd-body">
        <div className="cd">
          <img className="cd-logo" src={logos.event} alt={logos.eventAlt} />
          <span className="cd-badge">Countdown to Event · {EVENT.dates}</span>
          <h2 className="cd-title">{EVENT.name}</h2>

          {time.total <= 0 ? (
            <p className="cd-live">The championship is underway. Onward together!</p>
          ) : (
            <div className="cd-timer">
              {units.map(([label, value]) => (
                <div className="cd-unit" key={label}>
                  <span className="cd-value">{String(value).padStart(2, '0')}</span>
                  <span className="cd-label">{label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="cd-note">
            Registration is open — register barracks teams for basketball, football and volleyball.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventCountdown
