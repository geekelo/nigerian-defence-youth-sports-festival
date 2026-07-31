import { BARRACKS, SPORTS } from './event.js'

export const TEAMS = BARRACKS.map((b) => ({
  code: b.code,
  name: b.name,
  short: b.short,
}))

/**
 * Sample group-stage style fixtures drawn from the 2026 programme.
 * Each entry is one scheduled pairing (M/F both play in that slot).
 */
export const FIXTURES = [
  { day: 'Day 1', date: '3 Aug 2026', time: '1200–1330', home: 'NNB', away: 'NVY', sport: 'basketball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1200–1330', home: 'MOG', away: 'NBC', sport: 'volleyball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1330–1500', home: 'NBC', away: 'MOG', sport: 'basketball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1330–1500', home: 'NVY', away: 'NNB', sport: 'volleyball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1500–1630', home: 'MAM', away: 'SHA', sport: 'basketball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1500–1630', home: 'AZA', away: 'MAM', sport: 'volleyball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1630–1730', home: 'LUN', away: 'AZA', sport: 'basketball' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1630–1730', home: 'SHA', away: 'LUN', sport: 'volleyball' },

  { day: 'Day 2', date: '4 Aug 2026', time: '0800–0900', home: 'NBC', away: 'LUN', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '0800–0900', home: 'SHA', away: 'NVY', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '0800–0900', home: 'NBC', away: 'MAM', sport: 'volleyball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '0900–1000', home: 'NVY', away: 'SHA', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '0900–1000', home: 'NBC', away: 'LUN', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '0900–1000', home: 'SHA', away: 'NVY', sport: 'volleyball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1000–1100', home: 'AZA', away: 'NNB', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1000–1100', home: 'NNB', away: 'MAM', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1000–1100', home: 'AZA', away: 'MOG', sport: 'volleyball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1100–1200', home: 'MOG', away: 'MAM', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1100–1200', home: 'AZA', away: 'MOG', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1100–1200', home: 'NNB', away: 'LUN', sport: 'volleyball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1400–1500', home: 'LUN', away: 'AZA', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1400–1500', home: 'NVY', away: 'MAM', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1400–1500', home: 'MOG', away: 'MAM', sport: 'volleyball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1500–1600', home: 'MAM', away: 'SHA', sport: 'football' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1500–1600', home: 'NBC', away: 'AZA', sport: 'basketball' },
  { day: 'Day 2', date: '4 Aug 2026', time: '1500–1600', home: 'LUN', away: 'NVY', sport: 'volleyball' },

  { day: 'Day 3', date: '5 Aug 2026', time: '0800–0930', home: 'NNB', away: 'NBC', sport: 'football' },
  { day: 'Day 3', date: '5 Aug 2026', time: '0800–0930', home: 'SHA', away: 'NNB', sport: 'basketball' },
  { day: 'Day 3', date: '5 Aug 2026', time: '0800–0930', home: 'NBC', away: 'AZA', sport: 'volleyball' },
  { day: 'Day 3', date: '5 Aug 2026', time: '0930–1100', home: 'MOG', away: 'NVY', sport: 'football' },
  { day: 'Day 3', date: '5 Aug 2026', time: '0930–1100', home: 'LUN', away: 'MOG', sport: 'basketball' },
  { day: 'Day 3', date: '5 Aug 2026', time: '0930–1100', home: 'NNB', away: 'SHA', sport: 'volleyball' },
  { day: 'Day 3', date: '5 Aug 2026', time: '1100–1200', home: 'LUN', away: 'NNB', sport: 'football' },
  { day: 'Day 3', date: '5 Aug 2026', time: '1200–1300', home: 'SHA', away: 'MOG', sport: 'football' },
  { day: 'Day 3', date: '5 Aug 2026', time: '1300–1400', home: 'AZA', away: 'NBC', sport: 'football' },
  { day: 'Day 3', date: '5 Aug 2026', time: '1400–1500', home: 'NVY', away: 'MAM', sport: 'football' },

  { day: 'Day 5', date: '7 Aug 2026', time: 'Finals', home: 'W1', away: 'W2', sport: 'football', note: 'Football (Male) Final' },
]

/** Placeholder results — update as matches are played. Scores keyed by barrack code. */
export const RESULTS = {
  basketball: { male: [], female: [] },
  football: { male: [], female: [] },
  volleyball: { male: [], female: [] },
}

export function teamName(code) {
  return TEAMS.find((t) => t.code === code)?.name || code
}

export function teamShort(code) {
  return TEAMS.find((t) => t.code === code)?.short || code
}

export function sportName(id) {
  return SPORTS.find((s) => s.id === id)?.name || id
}

export function resultSides(scores) {
  const entries = Object.entries(scores || {})
  if (entries.length < 2) return null
  const [[left, leftScore], [right, rightScore]] = entries
  return { left, leftScore, right, rightScore }
}

export function resultKey(row, sport, gender) {
  const sides = resultSides(row.scores)
  if (!sides) return `${sport}-${gender}-${row.label || 'row'}`
  return `${sport}-${gender}-${sides.left}-${sides.right}-${row.label || ''}`
}

export function resultWinner(scores) {
  const sides = resultSides(scores)
  if (!sides) return null
  if (sides.leftScore > sides.rightScore) return sides.left
  if (sides.rightScore > sides.leftScore) return sides.right
  return null
}

/** Build standings for a list of { scores: { CODE: points } } results. */
export function buildStandings(resultRows = []) {
  const table = Object.fromEntries(
    TEAMS.map((t) => [
      t.code,
      {
        code: t.code,
        name: t.name,
        short: t.short,
        played: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        diff: 0,
        points: 0,
      },
    ]),
  )

  for (const row of resultRows) {
    const entries = Object.entries(row.scores || {})
    if (entries.length < 2) continue

    const [[left, leftScore], [right, rightScore]] = entries
    if (!table[left] || !table[right]) continue

    table[left].played += 1
    table[right].played += 1
    table[left].pointsFor += leftScore
    table[left].pointsAgainst += rightScore
    table[right].pointsFor += rightScore
    table[right].pointsAgainst += leftScore

    if (leftScore > rightScore) {
      table[left].wins += 1
      table[left].points += 3
      table[right].losses += 1
    } else if (rightScore > leftScore) {
      table[right].wins += 1
      table[right].points += 3
      table[left].losses += 1
    } else {
      table[left].draws += 1
      table[right].draws += 1
      table[left].points += 1
      table[right].points += 1
    }
  }

  return Object.values(table)
    .map((row) => ({
      ...row,
      diff: row.pointsFor - row.pointsAgainst,
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.diff !== a.diff) return b.diff - a.diff
      return b.pointsFor - a.pointsFor
    })
}

export function fixturesForSport(sportId) {
  return FIXTURES.filter((f) => f.sport === sportId)
}
