import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vispaico Demo',
  description: 'Vispaico Site Agent demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
