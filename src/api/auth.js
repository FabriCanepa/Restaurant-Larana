import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const postLoginFn = async (formData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok){
    const message = data.message
    throw new Error(message || "An error occurred while logging in")
  }


  const token = data.data

  sessionStorage.setItem("token", token);

  const userData = jwtDecode(token).user;
  
  return userData;
};
