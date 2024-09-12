import Menu from "../Menu";

const ProductTable = (props) => {
  const { products } = props;
  const allProducts = products.data;

  return (
    <>
      {allProducts.map((product) => (
        <Menu product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductTable;