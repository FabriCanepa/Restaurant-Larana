import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const getUserFn = async () => {
  const res = await fetch(`${API_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data;
};

export const postUserFn = async (data) => {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(
      resData.message || "Ocurrió un error al registrar el usuario"
    );
  }

  // Guardar el token en sessionStorage si la respuesta fue exitosa
  const token = resData.token;  // Asegúrate de que el token viene en la propiedad `token` del objeto `resData`
  if (token) {
    sessionStorage.setItem('token', token);

    // Si necesitas decodificar el token y extraer la información del usuario
    const userData = jwtDecode(token);
    return userData;
  }

  throw new Error("No se pudo obtener el token del usuario.");
};


export const putUserFn = async (data) => {
  const token = sessionStorage.getItem("token");
  const { id, ...userData } = data; 
  const apiUrl = `${API_URL}/users/${id}`;

  const res = await fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(userData), 
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    console.error("Error al guardar el usuario:", errorMessage);
    throw new Error(
      `Error al guardar el USUARIO: ${res.status} - ${res.statusText}. Detalles: ${errorMessage}`
    );
  }

  // Devuelve los datos de la respuesta como JSON
  return await res.json();
};


