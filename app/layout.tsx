import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XCDGOC PVT LTD - Canada & USA Dispatch Solutions",
  description: "Canada's leading and largest dispatch service provider for Amazon & Non Amazon owner operators and fleet companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
        
        {/* WhatsApp Floating Click-to-Chat Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}