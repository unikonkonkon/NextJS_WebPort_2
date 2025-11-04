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
  title: 'Test Portfolio',
  description: 'Test Portfolio - Test Developer with test years of experience in web development',
  keywords: ['test', 'portfolio', 'developer', 'test'],
  authors: [{ name: 'Test User' }],
  creator: 'Test User',
  publisher: 'Test Publisher',
  robots: 'index, follow',
  openGraph: {
    title: 'Test Portfolio',
    description: 'Test Portfolio - Test Developer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Portfolio',
    description: 'Test Portfolio - Test Developer',
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
