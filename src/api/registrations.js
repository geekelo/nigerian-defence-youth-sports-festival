import { apiGet, apiPost } from './client.js'
import { getStoredToken } from './auth.js'
import { rosterSizeForSport } from '../data/event.js'

const GUEST_PATH = '/api/v1/dhqysc_guest_registrations'
const TEAM_PATH = '/api/v1/dhqysc_team_registrations'

export function createGuestRegistration(guest) {
  return apiPost(GUEST_PATH, {
    dhqysc_guest_registration: {
      country: guest.country,
      full_name: guest.name,
      rank_title: guest.rank,
      organization_unit: guest.org,
      appointment: guest.appointment,
      travel_mode: guest.travel,
      accommodation: guest.accommodation === 'yes',
    },
  })
}

export function createTeamRegistration(team) {
  const size = rosterSizeForSport(team.sport)
  const players = team.players.slice(0, size).map((name) => name.trim())

  return apiPost(TEAM_PATH, {
    dhqysc_team_registration: {
      team_captain: team.captain.trim(),
      coach_name: team.coach.trim(),
      barracks_code: team.barracks,
      barracks_name: team.barracksName,
      sport: team.sport,
      gender: team.gender,
      organization_unit: team.barracksName,
      player_count: players.length,
      players,
      travel_mode: team.travel,
      accommodation: team.accommodation === 'yes',
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

export async function fetchGuestRegistrations() {
  const data = await apiGet(GUEST_PATH, {
    token: getStoredToken(),
  })
  return normalizeList(data, [
    'dhqysc_guest_registrations',
    'guest_registrations',
    'guests',
  ])
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
