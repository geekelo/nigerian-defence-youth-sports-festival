import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { SCHEDULE, SCHEDULE_DAYS } from '../data/schedule.js'
import { EVENT } from '../brand.js'
import { BrandLogos } from '../components/BrandLogos.jsx'
import { icon } from '../icons.jsx'

function Schedule() {
  const { openNav } = useOutletContext()
  const [day, setDay] = useState('all')

  const items = useMemo(
    () => (day === 'all' ? SCHEDULE : SCHEDULE.filter((row) => row.day === day)),
    [day],
  )

  return (
    <div className="reg-main">
      <header className="reg-topbar">
        <div className="reg-topbar-lead">
          <BrandLogos />
          <div className="reg-topbar-title">
            <h1>SCHEDULE</h1>
            <p>{EVENT.name} programme</p>
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

      <div className="reg-body">
        <div className="sched-day-toggle" role="tablist" aria-label="Filter by day">
          {SCHEDULE_DAYS.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={day === d.id}
              className={`sched-day-btn${day === d.id ? ' active' : ''}`}
              onClick={() => setDay(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>

        <section className="reg-card regs-card">
          <div className="reg-card-head">
            <span className="reg-card-icon blue">{icon.schedule}</span>
            <div>
              <h2>EVENT SCHEDULE</h2>
              <p>
                {day === 'all'
                  ? `${items.length} items · ${EVENT.dates}`
                  : `${items.length} items · ${items[0]?.date || ''}`}
              </p>
            </div>
          </div>

          <div className="regs-table-wrap">
            <table className="regs-table sched-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Day / Date</th>
                  <th>Time</th>
                  <th>Event</th>
                  <th>Responsibility</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr key={`${row.sn}-${row.event}-${row.time}`}>
                    <td>{row.sn}</td>
                    <td>
                      <strong>{row.day}</strong>
                      <div className="sched-date">{row.date}</div>
                    </td>
                    <td>{row.time}</td>
                    <td>{row.event}</td>
                    <td>{row.responsibility}</td>
                    <td>{row.remarks || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Schedule
