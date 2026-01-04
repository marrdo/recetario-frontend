"use client";

import * as React from "react";
import clsx from "clsx";

/**
 * Variantes visuales del botón
 * (esto sustituye a btn-primary, btn-secondary, etc.)
 */
type ButtonVariant = "primary" | "accent" | "ghost";

/**
 * Variantes de tamaño del botón
 * (esto sustituye a btn-sm, btn-lg, etc.)
 */
type ButtonSize = "default" | "sm" | "lg" | "icon" | "mini-icon";

/**
 * Props del botón:
 * - extendemos TODAS las props HTML de <button>
 * - añadimos nuestras propias opciones
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant; // color del botón
  fullWidth?: boolean;     // ocupa todo el ancho o no
  size?: ButtonSize;        // tamaño del botón
};

/**
 * forwardRef permite que un padre haga:
 * ref.current.focus()
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullWidth = false,
      className,
      size = "default",
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          // estilos base (TODOS los botones)
          "rounded-md text-sm font-medium transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:opacity-60 disabled:cursor-not-allowed",

          // tamaños
          size === "default" && "h-9 px-4 py-2",
          size === "sm" && "h-8 px-3 py-1.5",
          size === "lg" && "h-10 px-5 py-3",
          size === "icon" && "h-9 w-9 p-0",
          size === "mini-icon" && "h-5 w-5 p-0",

          // ancho opcional
          fullWidth && "w-full",

          // variantes
          variant === "primary" &&
            "bg-primary text-primary-foreground hover:bg-primary/90",

          variant === "accent" &&
            "bg-accent text-accent-foreground hover:bg-accent/90",

          variant === "ghost" &&
            "bg-transparent hover:bg-transparent",

          className
        )}
        {...props}
      >
        {children}
      </button>
    ); 
  }
);

Button.displayName = "Button";

// Ejemplos de uso
// Botón principal:
// <Button
//   type="submit"
//   fullWidth
//   disabled={estaCargando}
// >
//   {estaCargando ? "Iniciando sesión..." : "Iniciar sesión"}
// </Button>

// Botón accent:
// <Button variant="accent">
//   Acción secundaria
// </Button>

// Botón sin ancho completo:
// <Button className="w-1/2">
//   Mitad
// </Button>