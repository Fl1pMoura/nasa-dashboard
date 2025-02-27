import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Aside from "./_components/Aside";
import Header from "./_components/Header";
import ReactQueryProvider from "./_components/ReactQueryProvider"; // Importa o provider
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Aside />
            <div className="ml-16">
              <Header />
              {children}
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
