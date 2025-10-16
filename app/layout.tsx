import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zhitutouyan.com'),
  title: "智图投研 - 基于AI图形识别的下一代智能投研决策平台",
  description: "智图投研利用先进的AI图形识别技术，为投资者提供可回溯、可量化的历史规律支撑，精准匹配K线形态，助力投资决策。",
  authors: [{ name: "智图投研" }],
  creator: "智图投研",
  publisher: "智图投研",

  // Open Graph (微信、Facebook、LinkedIn等)
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://zhitutouyan.com/',
    siteName: '智图投研',
    title: '智图投研 - 基于AI图形识别的下一代智能投研决策平台',
    description: '智图投研利用先进的AI图形识别技术，为投资者提供可回溯、可量化的历史规律支撑，精准匹配K线形态，助力投资决策。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '智图投研 Logo',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '智图投研 - 基于AI图形识别的下一代智能投研决策平台',
    description: '智图投研利用先进的AI图形识别技术，为投资者提供可回溯、可量化的历史规律支撑，精准匹配K线形态，助力投资决策。',
    images: ['/og-image.png'],
  },

  // 其他平台
  other: {
    'og:image:type': 'image/png',
  },

  // Icons
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },

  // Verification
  verification: {
    google: 'google-site-verification-code', // 需要时替换
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Alternates (Canonical)
  alternates: {
    canonical: 'https://zhitutouyan.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://zhitutouyan.com/" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1081c379-fac2-408c-a1d6-48e29f3ae596"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
