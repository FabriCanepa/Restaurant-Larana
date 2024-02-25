import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../../../api/products.js";
import { useEffect, useState } from "react";

import { useProduct } from "../../../stores/useProducts.js";
import AdminTable from "../AdminTable/AdminTable.jsx";
import AdminModal from "../AdminModal/AdminModal.jsx";

const AdminProducts = () => {
  const { setProducts } = useProduct();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <section className="container">
      <AdminTable products={products} setProducts={setProducts} openModal={openModal} />
      <AdminModal product={selectedProduct} closeModal={closeModal} />
    </section>
  );
};

export default AdminProducts;