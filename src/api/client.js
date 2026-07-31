/**
 * Local-first API client.
 * Set VITE_API_BASE to a remote Rails API when available; otherwise uses localStorage.
 */
const REMOTE_BASE = import.meta.env.VITE_API_BASE || ''
const USE_REMOTE = Boolean(REMOTE_BASE)

const STORE_KEYS = {
  guests: 'ysf_guest_registrations',
  teams: 'ysf_team_registrations',
}

function readStore(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

async function parseResponse(response) {
  let data = null
  const text = await response.text()
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = { message: text }
    }
  }

  if (!response.ok) {
    const message =
      data?.errors?.join?.(', ') ||
      data?.error ||
      data?.message ||
      `Request failed (${response.status})`
    throw new Error(message)
  }

  return data
}

function authHeaders(token) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Bearer ${token}`
  return headers
}

async function remotePost(path, body, { token } = {}) {
  const response = await fetch(`${REMOTE_BASE}${path}`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(body),
  })
  return parseResponse(response)
}

async function remoteGet(path, { token } = {}) {
  const response = await fetch(`${REMOTE_BASE}${path}`, {
    method: 'GET',
    headers: authHeaders(token),
  })
  return parseResponse(response)
}

/** Local guest create */
function localCreateGuest(payload) {
  const list = readStore(STORE_KEYS.guests)
  const record = {
    id: uid('guest'),
    created_at: new Date().toISOString(),
    ...payload,
  }
  list.unshift(record)
  writeStore(STORE_KEYS.guests, list)
  return record
}

/** Local team create with uniqueness on barracks+sport+gender */
function localCreateTeam(payload) {
  const list = readStore(STORE_KEYS.teams)
  const duplicate = list.find(
    (t) =>
      t.barracks_code === payload.barracks_code &&
      t.sport === payload.sport &&
      t.gender === payload.gender,
  )
  if (duplicate) {
    throw new Error(
      'This barracks already has a registered team for that sport and gender.',
    )
  }
  const record = {
    id: uid('team'),
    created_at: new Date().toISOString(),
    ...payload,
  }
  list.unshift(record)
  writeStore(STORE_KEYS.teams, list)
  return record
}

export async function apiPost(path, body, { token } = {}) {
  if (USE_REMOTE) return remotePost(path, body, { token })

  if (path === '/api/v1/authentication') {
    const email = body?.user?.email?.trim().toLowerCase()
    const password = body?.user?.password
    if (email === 'admin@ysf.org.ng' && password === 'password123') {
      return {
        token: `local_${uid('tok')}`,
        user: { email, name: 'YSF Admin', role: 'admin' },
      }
    }
    throw new Error('Invalid email or password.')
  }

  if (path === '/api/v1/guest_registrations') {
    return localCreateGuest(body.guest_registration)
  }

  if (path === '/api/v1/team_registrations') {
    return localCreateTeam(body.team_registration)
  }

  throw new Error(`Unknown local API path: ${path}`)
}

export async function apiGet(path, { token } = {}) {
  if (USE_REMOTE) return remoteGet(path, { token })

  if (path === '/api/v1/guest_registrations') {
    return readStore(STORE_KEYS.guests)
  }

  if (path === '/api/v1/team_registrations') {
    return readStore(STORE_KEYS.teams)
  }

  throw new Error(`Unknown local API path: ${path}`)
}

export function isRemoteApi() {
  return USE_REMOTE
}
