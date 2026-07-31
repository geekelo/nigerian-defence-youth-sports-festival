import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import { EVENT, logos } from '../brand.js'
import { icon } from '../icons.jsx'
import './Sidebar.css'

const NAV = [
  { label: 'Live Stream', to: '/live', ic: icon.live },
  { label: 'Leaderboard', to: '/leaderboard', ic: icon.leaderboard },
  { label: 'Match Fixtures', to: '/match-fixtures', ic: icon.matches },
  { label: 'Schedule', to: '/schedule', ic: icon.schedule },
  { label: 'Registrations', to: '/registrations', ic: icon.list },
  { label: 'Register', to: '/register', ic: icon.registration },
]

function userInitials(user) {
  const name = user?.name || user?.full_name || user?.email || '?'
  if (user?.email && !user?.name && !user?.full_name) {
    return user.email.slice(0, 1).toUpperCase()
  }
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || '?'
}

function Sidebar({ open = false, onNavigate }) {
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    onNavigate?.()
    navigate('/login')
  }

  return (
    <aside className={`nwp-sidebar${open ? ' open' : ''}`}>
      <div className="nwp-brand">
        <button
          className="nwp-close"
          type="button"
          onClick={onNavigate}
          aria-label="Close menu"
        >
          {icon.x}
        </button>
        <div className="nwp-logos">
          <img className="nwp-brand-mark" src={logos.defence} alt={logos.defenceAlt} />
          <img className="nwp-brand-mark" src={logos.event} alt={logos.eventAlt} />
        </div>
        <span className="nwp-brand-text">{EVENT.name}</span>
      </div>

      <nav className="nwp-nav">
        {NAV.map(({ label, to, ic }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={onNavigate}
          >
            {ic}
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="nwp-account">
        {isAuthenticated ? (
          <>
            <div className="nwp-account-user">
              <span className="nwp-avatar" aria-hidden="true">
                {userInitials(user)}
              </span>
              <div className="nwp-account-meta">
                <div className="nwp-account-label">Signed in</div>
                <div className="nwp-account-email">
                  {user?.email || user?.name || 'Admin'}
                </div>
              </div>
            </div>
            <button className="nwp-account-btn" type="button" onClick={handleLogout}>
              {icon.logout}
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => `nwp-account-btn${isActive ? ' active' : ''}`}
            onClick={onNavigate}
          >
            <span className="nwp-avatar placeholder" aria-hidden="true">
              {icon.user}
            </span>
            Login
          </NavLink>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
