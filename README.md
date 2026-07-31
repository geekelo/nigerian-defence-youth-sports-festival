# CDS Abuja Military Barracks Youths Sports Championship 2026

Registration and event portal for the Defence Headquarters youth sports festival.

## Event

- **Dates:** 3–7 August 2026
- **Venues:** Mogadishu Cantonment Sports Complex · Aguiyi Ironsi Sports Complex
- **Sports:** Basketball, Football, Volleyball
- **Barracks:** 8 participating barracks
- **Teams:** 2 per barracks per sport (male + female) → **48 team slots**

## Stack

React 19 + Vite 8 + React Router. Registrations talk to the Rails API at `https://naval-wrestle-pulse-api.onrender.com` (override with `VITE_API_BASE`).

## Run

```bash
npm install
npm run dev
```

## Admin login

Uses the API authentication endpoint. Seed credentials match the wrestling portal admin unless changed on the server.

## Team registration

Each submission posts to `POST /api/v1/dhqysc_team_registrations`:

```json
{
  "dhqysc_team_registration": {
    "barracks": "Mogadishu Barracks",
    "sport": "Football",
    "team_gender": "Male",
    "team_captain": "Jane Doe",
    "coach": "John Coach",
    "players": ["Player 1", "Player 2"],
    "travel_mode": "Road",
    "accommodation": true
  }
}
```

Roster sizes: Basketball 12 · Football 18 · Volleyball 12.

## Pages

| Route | Purpose |
|-------|---------|
| `/register` | Team registration |
| `/registrations` | Admin list (login required) |
| `/schedule` | Programme of events |
| `/match-fixtures` | Barracks fixtures by sport |
| `/leaderboard` | Standings by sport / gender |
| `/live` | Live stream placeholders |

## Remote API

```bash
VITE_API_BASE=https://your-api.example.com npm run dev
```
