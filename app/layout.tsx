import type { Metadata } from 'next';
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from 'next/font/local';
import "@fortawesome/fontawesome-svg-core/styles.css";
import './globals.css';

const kollektif = localFont({ src: './fonts/Kollektif.ttf' });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Royal Hackaway v7',
  description: 'Official website of Royal Hackaway v7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kollektif.className}>
        {children}
      </body>
    </html>
  );
}
