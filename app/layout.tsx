import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IRON AI - Transform Your Business with Intelligent AI",
  description: "Leading AI Automation Solutions. We build cutting-edge AI automations, intelligent agents, and custom applications that streamline your operations and accelerate growth.",
  keywords: "AI automation, chatbots, intelligent agents, web development, mobile apps, Calgary",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}