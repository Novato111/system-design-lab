import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { VerticalMarquee } from "@/components/VerticalMarquee";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SysDesign Lab",
  description:
    "Practice system design with an interactive canvas, simulations, and AI feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body>
        {children}
        
        {/* Thin, vertical flowing ribbon on the right edge */}
      
        
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}


