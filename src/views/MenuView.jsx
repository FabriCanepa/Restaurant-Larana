import { useQuery } from "@tanstack/react-query";

import { getProductsFn } from "../api/products.js";

import ProductTable from "../components/Menu/ProductTable/ProductTable.jsx";

const MenuView = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  if (isError) {
    return (
      <section className="menuSec">
        <h1 className="text-center mb-5">What&#39;s for Dinner Tonight?</h1>
        <div className="alert alert-danger">
          Ocurrió un error al cargar los productos
        </div>
      </section>
    );
  }

  return (
    <section className="menuSec">
      <h1 className="text-center mb-5">What&#39;s for Dinner Tonight?</h1>
      {isLoading ? (
        <h3 className="text-center mt-4">Loading Dishes...</h3>
      ) : (
        <div className="menuProducts">
          <ProductTable products={products} />
        </div>
      )}
    </section>
  );
};
export default MenuView;
