import { NextRequest, NextResponse } from "next/server";

/**
 * ============================
 * MIDDLEWARE GLOBAL
 * ============================
 *
 * Este archivo se ejecuta:
 * - ANTES de renderizar cualquier página
 * - EN EL SERVIDOR (Edge Runtime)
 *
 * NO tiene acceso a:
 * - React
 * - hooks
 * - axios
 *
 * SOLO:
 * - request
 * - cookies
 * - headers
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /**
   * ============================
   * LEEMOS COOKIES
   * ============================
   *
   * Estas cookies las crea Laravel (Sanctum)
   * cuando el usuario inicia sesión correctamente.
   */
  const sessionCookie = request.cookies.get("recet_app_rio_session");
  const xsrfCookie = request.cookies.get("XSRF-TOKEN");

  const estaAutenticado = Boolean(sessionCookie && xsrfCookie);

  /**
   * ============================
   * PROTEGER /dashboard
   * ============================
   */
  if (pathname.startsWith("/dashboard") && !estaAutenticado) {
    // Usuario NO logueado intentando entrar
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  /**
   * ============================
   * EVITAR /login SI YA ESTÁ LOGUEADO
   * ============================
   */
  if (pathname.startsWith("/login") && estaAutenticado) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  /**
   * ============================
   * TODO OK → CONTINUAR
   * ============================
   */
  return NextResponse.next();
}
/**
 * ============================
 * CONFIGURACIÓN DEL MIDDLEWARE
 * ============================
 *
 * matcher define EN QUÉ RUTAS
 * se ejecuta este middleware.
 *
 * Si no se pones
 * → se ejecuta en TODA la app
 */
export const config = {
  matcher: [
    "/dashboard/:path*", // protege /dashboard y todo lo que cuelgue
    "/login",            // controla acceso a login
  ],
};
