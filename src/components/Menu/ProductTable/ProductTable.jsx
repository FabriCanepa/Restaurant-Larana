import Menu from "../Menu";


const ProductTable = (props) => {
  const { products } = props;


  const availableProducts = products?.filter((product) => product.available);

  return (
    <>
      {availableProducts.map((product) => (
        <Menu product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductTable;
