import { apiGet, apiPost } from './client.js'
import { getStoredToken } from './auth.js'
import { barrackByCode, rosterSizeForSport, sportById } from '../data/event.js'

const TEAM_PATH = '/api/v1/dhqysc_team_registrations'

function titleCase(value) {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export function createTeamRegistration(team) {
  const size = rosterSizeForSport(team.sport)
  const players = team.players.slice(0, size).map((name) => name.trim())
  const barracks =
    team.barracksName ||
    barrackByCode(team.barracks)?.name ||
    team.barracks
  const sport = sportById(team.sport)?.name || titleCase(team.sport)

  return apiPost(TEAM_PATH, {
    dhqysc_team_registration: {
      barracks,
      sport,
      team_gender: titleCase(team.gender),
      team_captain: team.captain.trim(),
      coach: team.coach.trim(),
      players,
      travel_mode: 'Not needed',
      accommodation: false,
    },
  })
}

function normalizeList(data, keys = []) {
  if (Array.isArray(data)) return data
  for (const key of keys) {
    if (Array.isArray(data?.[key])) return data[key]
  }
  if (Array.isArray(data?.data)) return data.data
  return []
}

export async function fetchTeamRegistrations() {
  const data = await apiGet(TEAM_PATH, {
    token: getStoredToken(),
  })
  return normalizeList(data, [
    'dhqysc_team_registrations',
    'team_registrations',
    'teams',
  ])
}

export async function fetchTeamRegistration(id) {
  return apiGet(`${TEAM_PATH}/${id}`, {
    token: getStoredToken(),
  })
}
