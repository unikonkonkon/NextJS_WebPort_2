import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio FaradayBanana',
  description: 'Portfolio by Suthep Jantawee - Full Stack Developer with 3+ years of experience in web development',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Suthep Jantawee' }],
  creator: 'Suthep Jantawee',
  publisher: 'FaradayBanana',
  robots: 'index, follow',
  openGraph: {
    title: 'Portfolio FaradayBanana',
    description: 'Portfolio by Suthep Jantawee - Full Stack Developer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio FaradayBanana',
    description: 'Portfolio by Suthep Jantawee - Full Stack Developer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
