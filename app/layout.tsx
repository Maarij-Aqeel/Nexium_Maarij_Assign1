import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/navigation";
import Random_image from "@/components/Random_image"
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quotify",
  description: "Quote Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Random_image>
          <header className="fixed top-0 left-0 z-50 w-full bg-white/30 backdrop-blur-md px-6 py-4">
            <h1 className="text-3xl font-bold text-black-600 text-left">Quotify</h1>
            <div className="flex justify-center mt-2">
              <Navigation />
            </div>
          </header>
          {children}
          <footer className="text-center  p-3 mb-6 font-semibold ">
            <h2 className="text-xl font-medium tracking-wide italic">
              ✨ Let today's wisdom guide your journey ✨
            </h2>
          </footer>
        </Random_image>
      </body>
    </html>
  );
}
