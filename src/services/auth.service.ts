import api from "@/lib/api";

/**
 * TIPOS (TypeScript)
 *
 * No es magia.
 * Solo le decimos a VSCode:
 * "esto es lo que espero que venga"
 */
export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  roles: string[];
}

export interface LoginResponse {
  message: string;
  usuario: Usuario;
}

/**
 * LOGIN
 */

/**
 * ============================
 * CSRF (PASO 1 OBLIGATORIO)
 * ============================
 *
 * Esto:
 * - Llama a /sanctum/csrf-cookie
 * - Laravel crea:
 *   - laravel_session
 *   - XSRF-TOKEN
 *
 * NO devuelve JSON
 * NO devuelve datos
 * SOLO cookies
 */
export async function csrf() {
  await api.get("/sanctum/csrf-cookie");
}
/**
 * ============================
 * LOGIN (PASO 2)
 * ============================
 *
 * Flujo correcto SPA:
 * 1. csrf()
 * 2. login()
 *
 * Laravel:
 * - valida credenciales
 * - crea sesión
 * - asocia cookies
 *
 * JS:
 * - NO ve el token
 * - NO guarda nada
 */
export async function login(email: string, password: string) {
  const response = await api.post<LoginResponse>(
    "/api/login",
    { email, password }
  );

  return response.data;
}

/**
 * ============================
 * USUARIO AUTENTICADO (PASO 3)
 * ============================
 *
 * Sirve para:
 * - Saber si hay sesión activa
 * - Proteger rutas
 * - Cargar roles
 */
export async function getUsuarioActual() {
  const response = await api.get<Usuario>("/api/me");
  return response.data;
}

/**
 * ============================
 * LOGOUT
 * ============================
 *
 * Laravel:
 * - invalida sesión
 * - borra cookies
 */
export async function logout() {
  await api.post("/api/logout");
}
