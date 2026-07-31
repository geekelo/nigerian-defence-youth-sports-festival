import { apiGet, apiPost } from './client.js'
import { getStoredToken } from './auth.js'
import { rosterSizeForSport } from '../data/event.js'

export function createGuestRegistration(guest) {
  return apiPost('/api/v1/guest_registrations', {
    guest_registration: {
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

  return apiPost('/api/v1/team_registrations', {
    team_registration: {
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
  const data = await apiGet('/api/v1/guest_registrations', {
    token: getStoredToken(),
  })
  return normalizeList(data, ['guest_registrations', 'guests'])
}

export async function fetchTeamRegistrations() {
  const data = await apiGet('/api/v1/team_registrations', {
    token: getStoredToken(),
  })
  return normalizeList(data, ['team_registrations', 'teams'])
}
