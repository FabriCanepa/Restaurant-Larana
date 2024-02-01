const API_URL = import.meta.env.VITE_API_URL;

export const getUserFn = async () => {

    const res = await fetch(`${API_URL}/users`);

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await res.json();
    return data;
};

export const postUserFn = async (data) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ocurrio un error al resgistrar el usuario");
  }
  return data;
};

export const putUserFn = async (data) => {
  const apiUrl = `${API_URL}/users/${data.id}`;
  console.log("URL de la solicitud:", apiUrl);

  const res = await fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(
      `Error al guardar el USUARIO: ${res.status} - ${res.statusText}. Detalles: ${errorMessage}`,
    );
  }
};
