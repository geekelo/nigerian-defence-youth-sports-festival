import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { EVENT } from '../brand.js'
import { icon } from '../icons.jsx'

function NotFound() {
  const location = useLocation()

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Page Not Found"
        subtitle="The page you requested does not exist."
      />

      <div className="reg-body">
        <section className="reg-card not-found-card">
          <div className="not-found">
            <span className="not-found-code">404</span>
            <h2>This route is off the pitch</h2>
            <p>
              No page matches <code>{location.pathname}</code>. Check the URL
              or head back to registration.
            </p>
            <div className="not-found-actions">
              <Link className="reg-btn primary" to="/register">
                {icon.registration} Go to Register {icon.arrow}
              </Link>
              <Link className="reg-btn" to="/match-fixtures">
                {icon.matches} Match Fixtures
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NotFound
