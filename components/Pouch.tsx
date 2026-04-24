export default function Pouch() {
  return (
    <svg className="pouch-svg" viewBox="0 0 320 440" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="pG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e3520" />
          <stop offset="1" stopColor="#0f1d12" />
        </linearGradient>
        <linearGradient id="pHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B6B10" stopOpacity=".45" />
          <stop offset="1" stopColor="#3B6B10" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M60 40 L260 40 L268 62 L52 62 Z" fill="#0a140c" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={60 + i * 15} y="40" width="6" height="22" fill="#05090a" opacity=".5" />
      ))}
      <path
        d="M52 62 L268 62 L272 400 Q272 418 254 418 L66 418 Q48 418 48 400 Z"
        fill="url(#pG)"
      />
      <path d="M60 70 Q140 92 260 75 L265 200 Q150 210 55 195 Z" fill="url(#pHi)" />
      <g transform="translate(160 138)">
        <path
          d="M30 -22 A27 27 0 1 0 30 22"
          stroke="#C0DD97"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 -11 A14 14 0 1 0 22 11"
          stroke="#C0DD97"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <text
        x="160"
        y="220"
        textAnchor="middle"
        fill="#f9f7ea"
        fontFamily="var(--font-figtree), sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="3"
      >
        CREOGUM
      </text>
      <line x1="100" y1="245" x2="220" y2="245" stroke="#C0DD97" strokeWidth=".5" opacity=".5" />
      <text
        x="160"
        y="267"
        textAnchor="middle"
        fill="#C0DD97"
        fontFamily="var(--font-dm-mono), monospace"
        fontSize="9"
        letterSpacing="3.5"
      >
        FUNCTIONAL · CREATINE
      </text>
      <g transform="translate(160 335)">
        <text
          textAnchor="middle"
          fill="#f9f7ea"
          fontFamily="var(--font-playfair), serif"
          fontStyle="italic"
          fontWeight="900"
          fontSize="54"
        >
          175
        </text>
        <text
          y="22"
          textAnchor="middle"
          fill="#C0DD97"
          fontFamily="var(--font-dm-mono), monospace"
          fontSize="9"
          letterSpacing="3"
        >
          MG · PER PIECE
        </text>
      </g>
      <text
        x="160"
        y="402"
        textAnchor="middle"
        fill="rgba(249,247,234,.35)"
        fontFamily="var(--font-dm-mono), monospace"
        fontSize="7.5"
        letterSpacing="3"
      >
        BATCH 001 · NET 60G
      </text>
    </svg>
  );
}
