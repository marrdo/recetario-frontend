"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import Logo from "@/assets/img/Logo-no_bg.png"
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { csrf, login, getUsuarioActual } from "@/services/auth.service";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const [mostrarPassword, ocultarPassword] = useState(false);
  const [estaCargando, setCargando] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);

    try {
      // Inicializar Sanctum
      await csrf();

      // Login
      await login(email, password);

      // Verificar sesión activa
      await getUsuarioActual();

      // 4️⃣ Redirigimos
      router.push("/dashboard");
    } catch (error: any) {
      alert(
        error.response?.data?.message ?? "Error al iniciar sesión"
      );
    } finally {
      setCargando(false);
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center flex-column ">
      <nav className="fixed top-4 right-4">
        <ThemeToggle />
      </nav>
      <h1 className="text-2xl font-bold">
        
      </h1>
      {/* Login Card */}
      <section className="card md:w-xl">
        <article className="bg-card border border-border rounded-lg shadow-lg p-4 md:p-8">
          {/* Logo y titulo */}
          <header className="flex flex-col items-center mb-8">
            <figure className="w-32 h-32 rounded-xl flex items-center justify-center">
              <Image 
                src={Logo} 
                alt="FitRecipe Logo" 
                width={128} 
                height={128} 
                priority 
              />
            </figure>
            <h1 className="text-2xl font-semibold text-foreground">RecetAppRio</h1>
            <p className="text-muted-foreground text-sm mt-2">Iniciar sesión</p>
          </header>
          {/* Formulario de login */}
          <form onSubmit={manejarEnvio}>
            <div className="my-4">
              {/* Campo de email */}
              <Label htmlFor="email" id="email-label">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="my-4">
              {/* Campo de password*/}
              <Label htmlFor="password">
                Contraseña
              </Label>
              <div className="relative bg-background ">
                <Input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Introduce tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-0 h-full bg-transparent hover:bg-transparent cursor-pointer"
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

            <div className="flex items-center justify-end my-4">
              <a
                href="/recuperar-password"
                className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Recupera tu contraseña
              </a>
            </div>

            <Button
              type="submit"
              disabled={estaCargando}
              fullWidth
              variant="primary"
            >
              {estaCargando ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
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
