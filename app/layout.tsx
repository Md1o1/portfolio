import type { Metadata } from 'next';
import Script from 'next/script';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Kelvin Mendes | Portfolio',
    template: 'Kelvin Mendes | %s',
  },
  description:
    "Kelvin Mendes é um estudante de engenharia de software.",
  keywords: [
    'kelvin mendes',
    'kelvin',
    'mendes',
    'web developer portfolio',
    'kelvin web developer',
    'kelvin developer',
    'mern stack',
    'kelvin mendes portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Kelvin Mendes Portfolio",
    description:
      "Estudante de engenharia de software.",
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://vscode-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
