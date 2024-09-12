import { NavLink } from "react-router-dom";
const Status = () => {
    return (
        <>
          <div className="container containerBg fw-bolder p-5 d-flex flex-column justify-content-center text-center mt-5">
            <h3 className="m-5">Confirmed order</h3>
            <i className="bi bi-check-circle-fill fs-5"></i>
            <h5>Thank you for choosing us</h5>
            <hr />
            <div className="mt-5">
              <h5>Your order is in the preparation process</h5>
              <h4>Estimated time 30 mins</h4>
            </div>
          </div>
          <div className="p-4 contenedor">
            <NavLink
              className={ (isActive) => (isActive ? "nav-link active" : "nav-link")}
              aria-current="page"
              to="/menu"
            >
              <h5 className="text-center btnStaus">New order</h5>
            </NavLink>
          </div>
        </>
      );
    };
export default Status