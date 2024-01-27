import { useEffect, useState } from "react";
import ProductTable from "./ProductTable/ProductTable";
import Modal from "./Modal/Modal";
import { useProduct } from "../../stores/useProducts";
import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../../api/products";

const Menu = () => {
  const { setProducts } = useProduct();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const { data: allProducts } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  // Filtrar productos disponibles
  const availableProducts = allProducts?.filter((product) => product.available);

  console.log(availableProducts)

  useEffect(() => {
    // Guardar todos los productos y los disponibles en el estado
    setProducts(allProducts);
  }, [allProducts, setProducts]);

  return (
    <section>
      {/* Pasar solo los productos disponibles a ProductTable */}
      <ProductTable products={availableProducts} openModal={openModal} />
      <Modal product={selectedProduct} closeModal={closeModal} />
    </section>
  );
};

export default Menu;
