"use client";

import type React from "react";

import { useState } from "react";
import { Apple, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [mostrarPassword, ocultarPassword] = useState(false);
  const [estaCargando, setCargando] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const maneharEnvio = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setCargando(true);
    // TODO: implementar la logica para enviar datos al servidor.
    console.log("Email:", email);
    setTimeout(() => {setCargando(false)}, 1500); // simular llamada al servidor
  }
  return (
    <main className="min-h-screen flex items-center justify-center flex-column ">
      <nav className="fixed top-4 right-4">
        {/* <ThemeToggle /> Cuando lo hagamos y carguemos x*/}
      </nav>
      <h1 className="text-2xl font-bold">
        
      </h1>
      {/* Login Card */}
      <section className="w-full max-w-md">
        <article className="bg-card border border-border rounded-lg shadow-lg p-8">
          {/* Logo y titulo */}
          <header className="flex flex-col items-center mb-8">
            <figure className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-4">
              {/* <Apple className="w-9 h-9 text-primary-foreground" /> Esto lo mete vercel como imagen de principal, como se las iamgenes e iconos que hay aqui?¿*/}
              <Apple className="w-9 h-9 text-primary-foreground" />
            </figure>
            <h1 className="text-2xl font-semibold text-foreground">Recet App Río</h1>
            <p className="text-muted-foreground text-sm mt-2">Iniciar sesión</p>
          </header>
          {/* Formulario de login */}
          <form action="">
            <div className="space-y-2">
              {/* Campo de email */}
              <label htmlFor="email" className="">
                Email
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className=""
                  />
              </div>
            </div>

            <div className="space-y-2">
              {/* Campo de password*/}
              <label htmlFor="password" className="text-foreground">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password password"
                  className="bg-background pr-10"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full hover:bg-transparent"
                  onClick={() => ocultarPassword(!mostrarPassword)}
                  aria-label={mostrarPassword ? "Hide password" : "Show password"}
                >
                  {mostrarPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <a
                href="/recuperar-password"
                className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                ¿Olvidaste la contraseña?
              </a>
            </div>

            <button type="submit" className="w-full" disabled={estaCargando}>
              {estaCargando ? "Signing in..." : "Sign in"}
            </button>
          </form>
          {/* Footer text */}
          <footer  className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">Plataforma de gestión fitness y nutrición</p>
          </footer>
        </article>
      </section>
    </main>
  );
}
