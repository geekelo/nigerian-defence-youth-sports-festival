import { icon } from '../icons.jsx'

/** Decorative stadium lights, sweeping arcs and an athlete silhouette. */
function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-arc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
            <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hero-figure" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6f0ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stadium floodlight haze */}
        <ellipse cx="300" cy="30" rx="180" ry="90" fill="url(#hero-glow)" />
        <ellipse cx="470" cy="10" rx="130" ry="70" fill="url(#hero-glow)" />

        {/* Sweeping ribbons */}
        <path
          d="M430 280 C 430 168, 492 84, 588 12 L 620 34 C 528 100, 476 180, 476 280 Z"
          fill="url(#hero-arc)"
          opacity="0.5"
        />
        <path
          d="M492 280 C 492 182, 548 106, 620 56 L 620 108 C 566 148, 538 208, 538 280 Z"
          fill="url(#hero-arc)"
          opacity="0.85"
        />

        {/* Athlete silhouette */}
        <g
          stroke="url(#hero-figure)"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M348 84 L 334 132" />
          <path d="M342 96 L 374 112 L 366 138" />
          <path d="M342 96 L 312 80 L 292 96" />
          <path d="M334 132 L 368 156 L 356 200" />
          <path d="M334 132 L 302 152 L 310 196" />
        </g>
        <circle cx="352" cy="60" r="15" fill="url(#hero-figure)" />
        <circle
          cx="396"
          cy="212"
          r="17"
          fill="none"
          stroke="#dbeafe"
          strokeWidth="3"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}

/**
 * Hero banner used at the top of every page.
 * `badge` renders a pill above the headline; defaults to the event dates.
 */
function PageHero({ title, subtitle, badge, children }) {
  return (
    <header className="hero">
      <HeroArt />
      <div className="hero-inner">
        {badge && (
          <span className="hero-badge">
            {icon.schedule}
            {badge}
          </span>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </header>
  )
}

export default PageHero
