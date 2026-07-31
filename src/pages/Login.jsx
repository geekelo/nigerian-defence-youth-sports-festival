import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import LoginForm from '../components/LoginForm.jsx'
import PageHero from '../components/PageHero.jsx'
import { EVENT } from '../brand.js'
import { icon } from '../icons.jsx'

function Login() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="reg-main">
      <PageHero
        badge={EVENT.dateRangeShort}
        title="Login"
        subtitle="Sign in to manage the championship"
      />

      <div className="reg-body">
        <div className="login-wrap">
          {isAuthenticated ? (
            <section className="reg-card login-card">
              <div className="reg-card-head">
                <span className="reg-card-icon blue">{icon.login}</span>
                <div>
                  <h2>ADMIN LOGIN</h2>
                  <p>Signed in as {user?.email || 'user'}</p>
                </div>
              </div>
              <div className="login-already">
                <p>You are already signed in.</p>
                <Link className="reg-btn primary" to="/registrations">
                  View Registrations {icon.arrow}
                </Link>
              </div>
            </section>
          ) : (
            <LoginForm onSuccess={() => navigate('/registrations')} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
