import { TICKER_ITEMS } from '@/lib/content';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((it, i) => (
          <span key={i} className={`ticker-item${it.hi ? ' hi' : ''}`}>
            {it.t}
          </span>
        ))}
      </div>
    </div>
  );
}
