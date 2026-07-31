import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import { EVENT, logos } from '../brand.js'
import { icon } from '../icons.jsx'
import './TopNav.css'

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

function TopNav({ open = false, onToggle, onNavigate }) {
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    onNavigate?.()
    navigate('/login')
  }

  return (
    <header className={`ysf-topnav${open ? ' open' : ''}`}>
      <div className="ysf-topnav-inner">
        <div className="ysf-topnav-brand">
          <img className="ysf-topnav-mark" src={logos.defence} alt={logos.defenceAlt} />
          <img className="ysf-topnav-mark" src={logos.event} alt={logos.eventAlt} />
          <div className="ysf-topnav-brand-text">
            <span className="ysf-topnav-title">
              Barracks Youths
              <br />
              Sports Championship
            </span>
            <span className="ysf-topnav-sub">
              {icon.schedule}
              {EVENT.dateRangeShort}
            </span>
          </div>
        </div>

        <nav className="ysf-topnav-links" aria-label="Main">
          {NAV.map(({ label, to, ic }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={onNavigate}
            >
              {ic}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="ysf-topnav-account">
          {isAuthenticated ? (
            <>
              <div className="ysf-topnav-user" title={user?.email || 'Admin'}>
                <span className="ysf-topnav-avatar" aria-hidden="true">
                  {userInitials(user)}
                </span>
                <span className="ysf-topnav-email">
                  {user?.email || user?.name || 'Admin'}
                </span>
              </div>
              <button
                className="ysf-topnav-auth-btn"
                type="button"
                onClick={handleLogout}
              >
                {icon.logout}
                <span>Logout</span>
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `ysf-topnav-auth-btn${isActive ? ' active' : ''}`
              }
              onClick={onNavigate}
            >
              {icon.user}
              <span>Login</span>
            </NavLink>
          )}
        </div>

        <button
          className="ysf-topnav-toggle"
          type="button"
          onClick={onToggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? icon.x : icon.menu}
        </button>
      </div>

      <div className="ysf-topnav-drawer">
        <nav className="ysf-topnav-drawer-links" aria-label="Mobile">
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
        <div className="ysf-topnav-drawer-account">
          {isAuthenticated ? (
            <>
              <div className="ysf-topnav-user">
                <span className="ysf-topnav-avatar" aria-hidden="true">
                  {userInitials(user)}
                </span>
                <span className="ysf-topnav-email">
                  {user?.email || user?.name || 'Admin'}
                </span>
              </div>
              <button
                className="ysf-topnav-auth-btn"
                type="button"
                onClick={handleLogout}
              >
                {icon.logout}
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `ysf-topnav-auth-btn${isActive ? ' active' : ''}`
              }
              onClick={onNavigate}
            >
              {icon.user}
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopNav
