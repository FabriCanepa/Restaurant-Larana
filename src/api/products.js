const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Ocurrió un error al traer los productos!");
  }

  const data = await res.json();
  return data;
};

export const postProductsFn = async (body) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al guardar el producto!");
  }

  const data = await res.json();
  return data;
};

export const putProductsFn = async (data) => {
  const res = await fetch(`${API_URL}/products/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al guardar el producto!");
  }
};

export const deleteProductsFn = async (productId) => {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al eliminar el producto!");
  }
};

export const addToCartFn = async (products) => {
  const res = await fetch(`${API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify({ cartItems: products }),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al agregar productos al carrito!");
  }

  const data = await res.json();
  return data;
};
