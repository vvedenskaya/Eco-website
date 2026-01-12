import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lit Hub | StewardWorks",
  description: "Roadmap to environmental careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} book-container paper-texture`}>
        {/* Immersive Lofi Scene */}
        <div className="scene-lighting" />
        
        {/* Large Aesthetic Objects (Positioned as Room Corners) */}
        <div className="cozy-object main-lamp">
          <Image src="/61Z1YjN3V0L.jpeg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        
        <div className="cozy-object main-books">
          <Image src="/81BIXdnUHmL._AC_UL495_SR435,495_.jpeg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="cozy-object main-decor">
          <Image src="/BOTTICELLI.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="desk-vibe" />

        <div className="book-edge-left" />
        <div className="book-edge-right" />
        
        <LanguageProvider>
          {/* Main Content Wrapper */}
          <div className="relative z-10">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
