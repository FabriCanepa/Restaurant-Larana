const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Ocurrió un error al traer los productos!");
  }

  return data;
};

export const postProductsFn = async (data) => {
  const token = sessionStorage.getItem('token')

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  });
  const resData = await res.json();
  
  if (!res.ok) {
    throw new Error(resData.message ||"Ocurrió un error al guardar el producto!");
  }

  return data;
};

export const putProductsFn = async (data) => {
  const token = sessionStorage.getItem('token')

  const res = await fetch(`${API_URL}/products/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({...data, id: undefined}),
    headers: { "Content-Type": "application/json",
   Authorization: `Bearer ${token}`},
    
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error al guardar el producto!");
  }
};

export const deleteProductsFn = async (productId) => {
  const token = sessionStorage.getItem('token')
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}`},
  });
  const resData = await res.json();
  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error al eliminar el producto!");
  }
};

export const addToCartFn = async (products) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(products),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al agregar productos al carrito!");
  }

  const data = await res.json();
  return data;
};
