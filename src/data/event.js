/** Participating barracks (8) */
export const BARRACKS = [
  { code: 'MAM', name: 'Mambilla Barracks', short: 'Mambilla' },
  { code: 'MOG', name: 'Mogadishu Barracks', short: 'Mogadishu' },
  { code: 'NVY', name: 'NAF Valley Base', short: 'NAF Valley' },
  { code: 'NNB', name: 'Nigerian Navy Base', short: 'NN Base' },
  { code: 'AZA', name: 'General AO Azazi Barracks', short: 'Azazi' },
  { code: 'NBC', name: 'NAF Bill Clinton Base', short: 'Bill Clinton' },
  { code: 'SHA', name: 'Shittu Alao Barracks', short: 'Shittu Alao' },
  { code: 'LUN', name: 'Lungi Barracks', short: 'Lungi' },
]

/** Competition sports */
export const SPORTS = [
  { id: 'basketball', name: 'Basketball', rosterSize: 12 },
  { id: 'football', name: 'Football', rosterSize: 18 },
  { id: 'volleyball', name: 'Volleyball', rosterSize: 12 },
]

export const GENDERS = [
  { id: 'male', name: 'Male' },
  { id: 'female', name: 'Female' },
]

/** 8 barracks × 3 sports × 2 genders = 48 team slots */
export const TOTAL_TEAM_SLOTS = BARRACKS.length * SPORTS.length * GENDERS.length

export function barrackByCode(code) {
  return BARRACKS.find((b) => b.code === code)
}

export function barrackByName(name) {
  return BARRACKS.find((b) => b.name === name || b.short === name)
}

export function sportById(id) {
  return SPORTS.find((s) => s.id === id)
}

export function rosterSizeForSport(sportId) {
  return sportById(sportId)?.rosterSize ?? 12
}

export function teamSlotKey(barracks, sport, gender) {
  return `${barracks}::${sport}::${gender}`
}

export function teamDisplayName({ barracks, sport, gender }) {
  const b = barrackByCode(barracks) || barrackByName(barracks)
  const s = sportById(sport)
  const g = GENDERS.find((x) => x.id === gender)
  const barrackLabel = b?.short || barracks || 'Team'
  const sportLabel = s?.name || sport || ''
  const genderLabel = g?.name || gender || ''
  return [barrackLabel, sportLabel, genderLabel].filter(Boolean).join(' · ')
}
