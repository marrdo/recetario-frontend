import axios from "axios";

/**
 * Cliente HTTP centralizado (AXIOS)
 *
 * Este archivo es:
 * - El "mensajero" entre Next y Laravel
 * - Siempre habla con el backend
 * - Siempre envía cookies
 *
 * IMPORTANTE PARA SANCTUM (SPA):
 * - withCredentials: true
 *   → permite enviar y recibir cookies HTTP-only
 *   → SIN ESTO, Sanctum NO funciona
 */
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;
