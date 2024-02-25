import Menu from "../Menu";

const ProductTable = (props) => {
  const { products } = props;

// const filteredProducts =

  return (
    <>
      {products.map((product) => (
        <Menu product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductTable;
