import type { Metadata } from 'next';
import { Playfair_Display, Figtree, DM_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CREOGUM — The habit that actually sticks.',
  description:
    'A premium functional gum delivering 175mg of creatine per piece. No scoops, no shakes — just the habit that actually sticks.',
  openGraph: {
    title: 'CREOGUM',
    description: 'Consistency is the dose.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${figtree.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
