export type Dose = {
  n: string;
  t: string;
  time: string;
  angle: number;
  quip: string;
};

export const DOSES: Dose[] = [
  { n: '01', t: 'Morning', time: '7:00 AM', angle: -90, quip: 'With first coffee' },
  { n: '02', t: 'Midday', time: '12:00 PM', angle: 0, quip: 'Before lunch' },
  { n: '03', t: 'Evening', time: '9:00 PM', angle: 120, quip: 'After dinner' },
];

export type TickerItem = { t: string; hi: boolean };

export const TICKER_ITEMS: TickerItem[] = [
  { t: '175 MG · PER PIECE', hi: true },
  { t: "Chew · Don't Shake", hi: false },
  { t: 'Consistency is the dose', hi: true },
  { t: 'Batch 001 · Mid-July 2026', hi: false },
  { t: 'Made in Toronto', hi: true },
  { t: 'Dietary creatine · 3 pieces daily', hi: false },
  { t: 'Founding Price · Locked Forever', hi: true },
];

export const BATCH = { claimed: 143, total: 7000 };
