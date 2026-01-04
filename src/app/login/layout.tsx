
import type React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-provider"
import "@/app/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login de RecetAPPrio",
  description: "Login al panel de administración de Recet App Río para gestionar el contenido de la aplicación.",
};

export default function LoginLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="es" suppressHydrationWarning>
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </body>
      </html>
  )
}