
import { useQuery } from "@tanstack/react-query";

import { getProductsFn } from "../api/products.js";

import ProductTable from "../components/Menu/ProductTable/ProductTable.jsx";
import TableInput from "../components/TableNumber/TableInput.jsx";

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
      <section className="">
        <h1 className="text-center mb-5">Whats for Dinner Tonight?</h1>
        <div className="alert alert-danger">
          Ocurrió un error al cargar los productos
        </div>
      </section>
    );
  }
  if (products) {
    if (products.data.length===0) {
      return (
        <div className="container menuAlert alert alert-warning text-center"> 
        There are no menus available at this time. Please come back later.
        </div>
      )
    }
  }

  return (
    <section className="">
      <h1 className="text-center mb-5">What&#39;s for Dinner Tonight?</h1>
      <div className="container p-4 my-4" id="containerTable">
      <TableInput />
      </div>
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

