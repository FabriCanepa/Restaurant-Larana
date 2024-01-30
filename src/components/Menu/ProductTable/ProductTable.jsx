import Card from "../Card/Card";

const ProductTable = (props) => {
  const { products = [], openModal } = props;

  return (
    <div className="products-table d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Card product={product} openModal={openModal} key={product.id} />
      ))}
    </div>
  );
};

export default ProductTable;
