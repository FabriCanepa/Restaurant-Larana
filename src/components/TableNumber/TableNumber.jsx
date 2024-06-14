import { useTableNumber } from "../../stores/useTableNumber.js";
import "./TableNumber.css";

const TableNumber = () => {
  const { tableNumber } = useTableNumber();

  return (
    <div className="mt-4 p-3  w-25">
      <h4>Table N°: {tableNumber !== null ? tableNumber : ""}</h4>
    </div>
  );
};

export default TableNumber;

