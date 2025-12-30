// Para aprender a crear distintos layouts voy a crear este específico para la página de login, con un título y descripción personalizados.
import type React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
}: Readonly<{ children: React.ReactNode }>) { // Que hace este readonlu aqui en medio? children entra como un parametro en la funcion?
    return (
        <html lang="es">{/* en Vercel me pone despues del lang lo siguiente suppressHydrationWarning-> esto que es??*/}
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >{/*Aqui arriba y abajo iria un componente Themeprovider segun vercel, imagino que es el componente para los temas calros y oscuros*/}
                {children}
                {/*Aqui abajo aprte del cierre del themeprovider ha metido también un componente analytichs que luego observaremos, de momento vamos a lo sencillo para aprender.*/}
            </body>
        </html>
    )}