import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'
import '../dashboard.css'

function DashboardLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)

  useEffect(() => {
    if (!navOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [navOpen])

  return (
    <div className={`reg${navOpen ? ' nav-open' : ''}`}>
      <TopNav
        open={navOpen}
        onToggle={() => setNavOpen((v) => !v)}
        onNavigate={closeNav}
      />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
