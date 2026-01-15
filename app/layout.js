import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/landing/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Component Library - Ready-to-go Components",
  description: "Production-ready components you can copy, paste, and customize in minutes. Build faster without starting from scratch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
