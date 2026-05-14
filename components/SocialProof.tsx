import { BATCH } from '@/lib/content';

const QUOTES = [
  { q: "Finally a creatine format I actually remember to take.", a: "Alex T.", t: "Founding Member" },
  { q: "The ritual aspect is smart. I chew one with my coffee and it's just automatic.", a: "Jordan K.", t: "Beta Tester" },
  { q: "No bloating, no mixing, no 'did I take it today'. This is how it should work.", a: "Sam R.", t: "Pre-Sale" },
  { q: "I've been taking creatine for 8 years. This is the most consistent I've ever been.", a: "Maya L.", t: "Founding Member" },
  { q: "My partner started taking it too. Now we fight over the last piece.", a: "Chris W.", t: "Beta Tester" },
  { q: "Tastes like gum. Acts like creatine. I don't know why this took so long to exist.", a: "Taylor M.", t: "Pre-Sale" },
  { q: "Chewed it before my morning run. Habit locked in within a week.", a: "Priya S.", t: "Beta Tester" },
  { q: "The science-backed dose in the most convenient format I've ever seen.", a: "Marcus D.", t: "Founding Member" },
];

export default function SocialProof() {
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <section className="proof-sec">
      <div className="proof-headline">
        <span className="n">{BATCH.claimed}</span>
        <span className="l">founding members — and counting</span>
      </div>
      <div className="proof-scroller">
        <div className="proof-track">
          {doubled.map((item, i) => (
            <div key={i} className="proof-card">
              <div className="q">&ldquo;{item.q}&rdquo;</div>
              <div className="author">{item.a} · {item.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
