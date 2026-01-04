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
 *
 * - Hace POST /api/login
 * - Laravel crea cookie httpOnly
 * - JS NO ve el token
 */
export async function login(email: string, password: string) {
  const response = await api.post<LoginResponse>(
    "/api/login",
    { email, password }
  );

  return response.data;
}

/**
 * LOGOUT
 *
 * - Laravel borra el token
 * - Cookie invalidada
 */
export async function logout() {
  await api.post("/api/logout");
}

/**
 * USUARIO AUTENTICADO
 *
 * - Sirve para comprobar si hay sesión
 */
export async function getUsuarioActual() {
  const response = await api.get<Usuario>("/api/me");
  return response.data;
}
