type LogoProps = {
  color?: string;
  size?: number;
};

export default function Logo({ color = 'currentColor', size = 22 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M24 8.5 A10 10 0 1 0 24 23.5"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M22 13 A6 6 0 1 0 22 19"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
