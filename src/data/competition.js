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

  // —— Day 3 (5 Aug 2026) — male football ——
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0800',
    home: 'SHA',
    away: 'MAM',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G1',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0900',
    home: 'NNB',
    away: 'NBC',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G2',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1000',
    home: 'MOG',
    away: 'NVY',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G3',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1100',
    home: 'LUN',
    away: 'NNB',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G4',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1200',
    home: 'SHA',
    away: 'MOG',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G5',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1300',
    home: 'AZA',
    away: 'NBC',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G6',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1400',
    home: 'NVY',
    away: 'MAM',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Male · G7',
  },

  // —— Day 3 (5 Aug 2026) — basketball M/F ——
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0800',
    home: 'SHA',
    away: 'NNB',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G1',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0930',
    home: 'LUN',
    away: 'MOG',
    sport: 'basketball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Male & Female · G2',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1300',
    home: 'NNB',
    away: 'MOG',
    sport: 'basketball',
    gender: 'male',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Semi-final 1 · Male',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1300',
    home: 'AZA',
    away: 'MAM',
    sport: 'basketball',
    gender: 'female',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Semi-final 1 · Female',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1500',
    home: 'LUN',
    away: 'NVY',
    sport: 'basketball',
    gender: 'male',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Semi-final 2 · Male',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1500',
    home: 'LUN',
    away: 'NVY',
    sport: 'basketball',
    gender: 'female',
    venue: 'Mogadishu Sports Complex · Basketball Court',
    note: 'Semi-final 2 · Female',
  },

  // —— Day 3 (5 Aug 2026) — volleyball M/F ——
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0800',
    home: 'NBC',
    away: 'AZA',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G1',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '0930',
    home: 'NNB',
    away: 'SHA',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Male & Female · G2',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1300',
    home: 'WA',
    away: 'RB',
    homeLabel: 'Winner A',
    awayLabel: 'Runner-up B',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Semi-final · Winner Group A vs Runner-up Group B',
  },
  {
    day: 'Day 3',
    date: '5 Aug 2026',
    time: '1500',
    home: 'WB',
    away: 'RA',
    homeLabel: 'Winner B',
    awayLabel: 'Runner-up A',
    sport: 'volleyball',
    gender: 'both',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Semi-final · Winner Group B vs Runner-up Group A',
  },

  // —— Day 4 (6 Aug 2026) — volleyball M/F knockouts ——
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '0900',
    home: 'NNB',
    away: 'AZA',
    sport: 'volleyball',
    gender: 'female',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: '3rd place · Female',
  },
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '0900',
    home: 'NNB',
    away: 'MAM',
    sport: 'volleyball',
    gender: 'male',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: '3rd place · Male',
  },
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '1200',
    home: 'MOG',
    away: 'LUN',
    sport: 'volleyball',
    gender: 'female',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Final · Female',
  },
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '1200',
    home: 'MOG',
    away: 'LUN',
    sport: 'volleyball',
    gender: 'male',
    venue: 'Mogadishu Sports Complex · Volleyball Court',
    note: 'Final · Male',
  },

  // —— Day 4 (6 Aug 2026) — male football knockouts ——
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '0900',
    home: 'LUN',
    away: 'MOG',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Semi-final 1 · Male',
  },
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '1100',
    home: 'MAM',
    away: 'AZA',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Semi-final 2 · Male',
  },
  {
    day: 'Day 4',
    date: '6 Aug 2026',
    time: '1400',
    home: 'MOG',
    away: 'AZA',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: '3rd place · Male',
  },

  // —— Day 5 (7 Aug 2026) — male football final ——
  {
    day: 'Day 5',
    date: '7 Aug 2026',
    time: '1100',
    home: 'LUN',
    away: 'MAM',
    sport: 'football',
    gender: 'male',
    venue: 'Aguiyi Ironsi Sports Complex · Football Field',
    note: 'Final · Male',
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
      { label: 'Day 2 · Game 1', scores: { NBC: 0, MAM: 2 } },
      { label: 'Day 2 · Game 2', scores: { NVY: 2, SHA: 0 } },
      { label: 'Day 2 · Game 3', scores: { AZA: 0, MOG: 2 } },
      { label: 'Day 2 · Game 4', scores: { NNB: 0, LUN: 2 } },
      { label: 'Day 2 · Game 5', scores: { MOG: 2, MAM: 1 } },
      { label: 'Day 2 · Game 6', scores: { LUN: 2, NVY: 0 } },
      {
        label: 'Day 4 · 3rd place',
        note: 'NN Barracks — 3rd position',
        scores: { NNB: 2, MAM: 0 },
      },
      {
        label: 'Day 4 · Final',
        note: 'Mogadishu — 1st · Lungi — 2nd · MVP #15 Mosses (Mogadishu)',
        scores: { MOG: 3, LUN: 2 },
      },
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
      { label: 'Day 2 · Game 1', scores: { NBC: 0, MAM: 2 } },
      {
        label: 'Day 2 · Game 2 · Bye',
        note: 'Shittu Alao absent — NAF Valley bye',
        scores: { NVY: 2, SHA: 0 },
      },
      { label: 'Day 2 · Game 3', scores: { AZA: 1, MOG: 2 } },
      { label: 'Day 2 · Game 4', scores: { NNB: 0, LUN: 2 } },
      { label: 'Day 2 · Game 5', scores: { MOG: 2, MAM: 1 } },
      { label: 'Day 2 · Game 6', scores: { LUN: 2, NVY: 0 } },
      {
        label: 'Day 4 · 3rd place',
        note: 'NN Barracks — 3rd position',
        scores: { NNB: 2, AZA: 0 },
      },
      {
        label: 'Day 4 · Final',
        note: 'Lungi — 1st · Mogadishu — 2nd · MVP #3 Anebi Blessing (Lungi)',
        scores: { MOG: 0, LUN: 3 },
      },
    ],
  },
  basketball: {
    male: [
      { label: 'Day 1 · Game 1', scores: { NNB: 43, NVY: 34 } },
      { label: 'Day 1 · Game 2', scores: { NBC: 27, MOG: 30 } },
      { label: 'Day 1 · Game 3', scores: { SHA: 17, MAM: 61 } },
      { label: 'Day 1 · Game 4', scores: { LUN: 51, AZA: 16 } },
      { label: 'Day 2 · Game 1', scores: { NVY: 72, SHA: 24 } },
      { label: 'Day 2 · Game 2', scores: { NBC: 38, LUN: 48 } },
      { label: 'Day 2 · Game 3', scores: { MAM: 27, NNB: 41 } },
      { label: 'Day 2 · Game 4', scores: { AZA: 30, MOG: 31 } },
      { label: 'Day 2 · Game 5', scores: { NVY: 39, MAM: 30 } },
      { label: 'Day 2 · Game 6', scores: { NBC: 39, AZA: 25 } },
      { label: 'Day 3 · Game 1', scores: { SHA: 21, NNB: 56 } },
      { label: 'Day 3 · Game 2', scores: { LUN: 25, MOG: 16 } },
      { label: 'Day 3 · Semi-final 1', scores: { NNB: 44, MOG: 32 } },
      { label: 'Day 3 · Semi-final 2', scores: { LUN: 39, NVY: 17 } },
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
      {
        label: 'Day 2 · Game 1 · Walkover',
        note: 'Shittu Alao walked over',
        scores: { NVY: 20, SHA: 0 },
      },
      { label: 'Day 2 · Game 2', scores: { NBC: 18, LUN: 21 } },
      { label: 'Day 2 · Game 3', scores: { MAM: 37, NNB: 24 } },
      { label: 'Day 2 · Game 4', scores: { AZA: 39, MOG: 19 } },
      { label: 'Day 2 · Game 5', scores: { NVY: 67, MAM: 19 } },
      { label: 'Day 2 · Game 6', scores: { NBC: 30, AZA: 60 } },
      {
        label: 'Day 3 · Game 1 · Walkover',
        note: 'Shittu Alao walked over',
        scores: { SHA: 0, NNB: 20 },
      },
      { label: 'Day 3 · Game 2', scores: { LUN: 31, MOG: 24 } },
      { label: 'Day 3 · Semi-final 1', scores: { AZA: 33, MAM: 16 } },
      { label: 'Day 3 · Semi-final 2', scores: { LUN: 15, NVY: 55 } },
    ],
  },
  football: {
    male: [
      { label: 'Day 1', scores: { MOG: 1, MAM: 1 } },
      { label: 'Day 2 · Game 1', scores: { LUN: 5, NBC: 0 } },
      { label: 'Day 2 · Game 2', scores: { NNB: 0, AZA: 5 } },
      { label: 'Day 2 · Game 3', scores: { NVY: 2, SHA: 0 } },
      { label: 'Day 2 · Game 4', scores: { LUN: 3, AZA: 0 } },
      { label: 'Day 4 · Semi-final 1', scores: { LUN: 4, MOG: 0 } },
      { label: 'Day 4 · Semi-final 2', scores: { MAM: 3, AZA: 2 } },
      {
        label: 'Day 4 · 3rd place',
        note: 'Gen. Azazi — 3rd position',
        scores: { MOG: 0, AZA: 2 },
      },
    ],
    female: [
      { label: 'Day 1', scores: { NBC: 4, NNB: 0 } },
      {
        label: 'Day 1 · After penalties',
        note: 'NAF Valley 4–6 Mogadishu (penalties)',
        scores: { NVY: 4, MOG: 6 },
      },
      {
        label: 'Day 2 · 3rd place',
        note: 'NAF Valley — 3rd position',
        scores: { NVY: 3, NNB: 0 },
      },
      {
        label: 'Day 2 · Final · After penalties',
        note: 'Mogadishu — 1st · Bill Clinton — 2nd',
        scores: { MOG: 6, NBC: 4 },
      },
    ],
  },
}

/** Final podium + MVP once a category is decided */
export const PODIUMS = {
  volleyball: {
    male: {
      first: 'MOG',
      second: 'LUN',
      third: 'NNB',
      mvp: { jersey: '15', name: 'Mosses', team: 'MOG' },
    },
    female: {
      first: 'LUN',
      second: 'MOG',
      third: 'NNB',
      mvp: { jersey: '3', name: 'Anebi Blessing', team: 'LUN' },
    },
  },
  football: {
    female: {
      first: 'MOG',
      second: 'NBC',
      third: 'NVY',
      mvp: null,
    },
  },
}

/** Upcoming knockout ties without a final score yet */
export const PENDING_MATCHES = []

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
