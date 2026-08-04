import { BARRACKS, SPORTS } from './event.js'

export const TEAMS = BARRACKS.map((b) => ({
  code: b.code,
  name: b.name,
  short: b.short,
}))

/**
 * Competition fixtures. Day 2 updated from official LOC notice (4 Aug 2026).
 * Basketball / volleyball Day 2 slots are Male & Female.
 */
export const FIXTURES = [
  // —— Day 1 (3 Aug 2026) ——
  { day: 'Day 1', date: '3 Aug 2026', time: '1200', home: 'NNB', away: 'NVY', sport: 'basketball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1200', home: 'MOG', away: 'NBC', sport: 'volleyball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1330', home: 'NBC', away: 'MOG', sport: 'basketball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1330', home: 'NVY', away: 'NNB', sport: 'volleyball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1500', home: 'MAM', away: 'SHA', sport: 'basketball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1500', home: 'AZA', away: 'MAM', sport: 'volleyball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1630', home: 'LUN', away: 'AZA', sport: 'basketball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: '1630', home: 'SHA', away: 'LUN', sport: 'volleyball', gender: 'both' },
  { day: 'Day 1', date: '3 Aug 2026', time: 'Day 1', home: 'MOG', away: 'MAM', sport: 'football', gender: 'male', note: 'Male' },
  { day: 'Day 1', date: '3 Aug 2026', time: 'Day 1', home: 'NBC', away: 'NNB', sport: 'football', gender: 'female', note: 'Female' },
  { day: 'Day 1', date: '3 Aug 2026', time: 'Day 1', home: 'NVY', away: 'MOG', sport: 'football', gender: 'female', note: 'Female · After penalties' },

  // —— Day 2 (4 Aug 2026) — official fixtures ——
  // Female football
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0900',
    home: 'NVY',
    away: 'NNB',
    sport: 'football',
    gender: 'female',
    venue: 'Mogadishu Sports Complex · Football Field',
    note: 'Female 3rd place',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1400',
    home: 'NBC',
    away: 'MOG',
    sport: 'football',
    gender: 'female',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Female Final · Opening ceremony',
  },

  // Male football — Aguiyi Ironsi
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0800',
    home: 'NBC',
    away: 'LUN',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G1',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0900',
    home: 'NVY',
    away: 'SHA',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G2',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1000',
    home: 'AZA',
    away: 'NNB',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G3',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1100',
    home: 'LUN',
    away: 'AZA',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G4',
  },

  // Basketball M/F — Mogadishu basketball court
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0800',
    home: 'NVY',
    away: 'SHA',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G1',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0900',
    home: 'NBC',
    away: 'LUN',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G2',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1000',
    home: 'MAM',
    away: 'NNB',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G3',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1100',
    home: 'AZA',
    away: 'MOG',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G4',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1400',
    home: 'NVY',
    away: 'MAM',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G5',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1500',
    home: 'NBC',
    away: 'AZA',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G6',
  },

  // Volleyball M/F — Mogadishu volleyball court
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0800',
    home: 'NBC',
    away: 'MAM',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G1',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '0900',
    home: 'NVY',
    away: 'SHA',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G2',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1000',
    home: 'AZA',
    away: 'MOG',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G3',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1100',
    home: 'NNB',
    away: 'LUN',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G4',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1400',
    home: 'MOG',
    away: 'MAM',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G5',
  },
  {
    day: 'Day 2',
    date: '4 Aug 2026',
    time: '1500',
    home: 'LUN',
    away: 'NVY',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G6',
  },
]

/** Match results — scores keyed by barrack code. */
export const RESULTS = {
  volleyball: {
    male: [
      { label: 'Day 1 · Game 1', scores: { MOG: 2, NBC: 0 } },
      { label: 'Day 1 · Game 2', scores: { NNB: 2, NVY: 0 } },
      { label: 'Day 1 · Game 3', scores: { MAM: 2, AZA: 0 } },
      { label: 'Day 1 · Game 4', scores: { SHA: 0, LUN: 2 } },
    ],
    female: [
      { label: 'Day 1 · Game 1', scores: { MOG: 2, NBC: 0 } },
      { label: 'Day 1 · Game 2', scores: { NNB: 2, NVY: 0 } },
      { label: 'Day 1 · Game 3', scores: { MAM: 0, AZA: 2 } },
      {
        label: 'Day 1 · Game 4 · Bye',
        note: 'Shittu Alao absent — Lungi bye',
        scores: { SHA: 0, LUN: 2 },
      },
    ],
  },
  basketball: {
    male: [
      { label: 'Day 1 · Game 1', scores: { NNB: 43, NVY: 34 } },
      { label: 'Day 1 · Game 2', scores: { NBC: 27, MOG: 30 } },
      { label: 'Day 1 · Game 3', scores: { SHA: 17, MAM: 61 } },
      { label: 'Day 1 · Game 4', scores: { LUN: 51, AZA: 16 } },
    ],
    female: [
      { label: 'Day 1 · Game 1', scores: { NNB: 12, NVY: 43 } },
      { label: 'Day 1 · Game 2', scores: { NBC: 15, MOG: 13 } },
      {
        label: 'Day 1 · Game 3 · Walkover',
        note: 'Shittu Alao walked over',
        scores: { SHA: 0, MAM: 20 },
      },
      { label: 'Day 1 · Game 4', scores: { LUN: 30, AZA: 32 } },
    ],
  },
  football: {
    male: [
      { label: 'Day 1', scores: { MOG: 1, MAM: 1 } },
    ],
    female: [
      { label: 'Day 1', scores: { NBC: 4, NNB: 0 } },
      {
        label: 'Day 1 · After penalties',
        note: 'NAF Valley 4–6 Mogadishu (penalties)',
        scores: { NVY: 4, MOG: 6 },
      },
    ],
  },
}

/** Upcoming knockout ties without a final score yet */
export const PENDING_MATCHES = [
  {
    sport: 'football',
    gender: 'female',
    label: 'Female 3rd place · 09:00',
    home: 'NVY',
    away: 'NNB',
    venue: 'Mogadishu Sports Complex · Football Field',
  },
  {
    sport: 'football',
    gender: 'female',
    label: 'Female Final · 14:00 · Opening ceremony',
    home: 'NBC',
    away: 'MOG',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
  },
]

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

/** '1200–1330' -> '12:00 PM'. Non-numeric labels pass through unchanged. */
export function formatFixtureTime(time) {
  const start = String(time || '').split(/[–-]/)[0].trim()
  if (!/^\d{3,4}$/.test(start)) return time

  const padded = start.padStart(4, '0')
  const hours24 = Number(padded.slice(0, 2))
  const minutes = padded.slice(2)
  const suffix = hours24 >= 12 ? 'PM' : 'AM'
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12

  return `${String(hours12).padStart(2, '0')}:${minutes} ${suffix}`
}
