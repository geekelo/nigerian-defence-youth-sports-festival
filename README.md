# CDS Abuja Military Barracks Youths Sports Championship 2026

Registration and event portal for the Defence Headquarters youth sports festival.

## Event

- **Dates:** 3–7 August 2026
- **Venues:** Mogadishu Cantonment Sports Complex · Aguiyi Ironsi Sports Complex
- **Sports:** Basketball, Football, Volleyball
- **Barracks:** 8 participating barracks
- **Teams:** 2 per barracks per sport (male + female) → **48 team slots**

## Stack

React 19 + Vite 8 + React Router. Registrations and admin login use **localStorage** by default so the app runs without a backend. Point `VITE_API_BASE` at a Rails API when ready.

## Run

```bash
npm install
npm run dev
```

## Admin login (local mode)

- Email: `admin@ysf.org.ng`
- Password: `password123`

## Team registration

Each submission is one team identified by:

1. Barracks (dropdown of 8)
2. Sport (basketball / football / volleyball)
3. Gender (male / female)
4. Captain, coach, and full roster (12 / 18 / 12 players by sport)

Duplicate barracks + sport + gender combinations are rejected.

## Pages

| Route | Purpose |
|-------|---------|
| `/register` | Guest & team registration |
| `/registrations` | Admin list (login required) |
| `/schedule` | Programme of events |
| `/match-fixtures` | Barracks fixtures by sport |
| `/leaderboard` | Standings by sport / gender |
| `/live` | Live stream placeholders |

## Remote API

```bash
VITE_API_BASE=https://your-api.example.com npm run dev
```
