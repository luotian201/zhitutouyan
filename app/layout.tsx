import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "智图投研 - 基于AI图形识别的下一代智能投研决策平台",
  description: "智图投研利用先进的AI图形识别技术，为投资者提供可回溯、可量化的历史规律支撑，精准匹配K线形态，助力投资决策。",
  keywords: "AI投研, 智能投资, K线分析, 量化交易, 图形识别, 金融科技",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
