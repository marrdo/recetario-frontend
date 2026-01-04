import axios from "axios";

/**
 * Cliente HTTP centralizado.
 *
 * Piensa en esto como:
 * - Un navegador automático
 * - Siempre apunta a Laravel
 * - Siempre envía cookies
 *
 * IMPORTANTE:
 * withCredentials = true
 * → permite que el navegador mande cookies (Sanctum)
 */
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;
