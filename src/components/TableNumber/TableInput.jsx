import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTableNumber } from "../../stores/useTableNumber.js";
import Button from "../Button/Button.jsx";
import "./tableNumber.css";

const TableInput = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { setTableNumber, isTableNumberSet } = useTableNumber();

  const onSubmit = (data) => {
    const { tablenumber } = data;
    const tableNumberInt = parseInt(tablenumber);
  
    if (tableNumberInt < 1 || tableNumberInt > 10 || isNaN(tableNumberInt)) {
      toast.error("Please select a valid table number between 1 and 10.");
      return;
    }

    setTableNumber(tableNumberInt);
    toast.success("The table number was saved.");
    reset();
  };

  return (
    <div className="text-center container">
      {isTableNumberSet ? (
        <p>You have already entered a table number. If you want to change it please log out.</p>
      ) : (
        <form className="d-flex align-items-center gap-3 justify-content-center tableForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="number"
            min="1"
            max="10"
            placeholder="Table N°"
            {...register("tablenumber", {
              required: "Table number is required.",
              min: { value: 1, message: "The number must be greater than or equal to 1." },
              max: { value: 10, message: "The number must be less than or equal to 10." }
            })}
          />
          {errors.tablenumber && <p className="text-danger">{errors.tablenumber.message}</p>}
          <Button className="my-2 btn-table" title={"Save"} type="submit" />
        </form>
      )}
    </div>
  );
};

export default TableInput; 