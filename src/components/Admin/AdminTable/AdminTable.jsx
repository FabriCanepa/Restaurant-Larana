import AdminCard from "../AdminCard/AdminCard";
import "./AdminTable.css";

const AdminTable = (props) => {
  const { products = { data: [], message: '' }, openModal } = props;

  return (
    <section className="my-2 text-center">
      <h1 className="mb-5">Product</h1>
      <article className="row gap-4">
        {products.data.map((product) => (
          <AdminCard product={product} openModal={openModal} key={product.id} />
        ))}
      </article>
    </section>
  );
};

export default AdminTable;
