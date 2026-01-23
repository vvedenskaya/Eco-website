import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
      <body className="min-h-screen relative font-exo">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
