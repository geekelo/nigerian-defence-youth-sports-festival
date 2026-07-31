import { logos } from '../brand.js'

/** Shared topbar logos used across pages */
export function BrandLogos({ className = 'reg-topbar-logo' }) {
  return (
    <>
      <img className={className} src={logos.defence} alt={logos.defenceAlt} />
      <img className={className} src={logos.event} alt={logos.eventAlt} />
    </>
  )
}
