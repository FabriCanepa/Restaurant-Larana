import { Link } from "react-router-dom";

import "./ComeWeb.css";

import LogoPng from "../../assets/images/Logo.png"

const ComeWeb = () => {
  return (
    <>
      <section className="joinPage text-center">
        <Link to="/" className="btn mb-5">
          Come In!
        </Link>
        <h2 className="mb-5">
          Welcome to our culinary world where elegance meets flavor.
        </h2>
        <img src={LogoPng} alt="Logo Larana" />
      </section>
      <section className="previewPage text-center">
        <h2>Featured Products</h2>
        <article className="previewFoodCard d-flex mb-3">
          <img
            src="https://www.foodwise.com.au/wp-content/uploads/2013/11/Roasted-beetroot-pasta-sauce-background.jpg"
            alt="Vista previa de comida"
          />
          <div>
            <p>Beet Fettuccine with Roasted Beet Sauce and Feta Cheese</p>
          </div>
        </article>
        <article className="previewFoodCard d-flex mb-3 me-3">
          <div>
            <p>Spaghetti alla genovese with asparagus pesto</p>
          </div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/receta-pasta-espaguetis-pesto-esparragos-elle-gourmet-1669499052.jpg?crop=0.783xw:0.357xh;0.217xw,0.446xh&resize=980:*"
            alt="Vista previa de comida"
            className="mr-3"
          />
        </article>
        <article className="previewFoodCard d-flex">
          <img
            src="https://galbanicheese.com/wp-content/uploads/2019/09/Cheese-Lasagna-72DPI1-e1476892466909.jpg"
            alt="Vista previa de comida"
          />
          <div>
            <p>
              Lasagna Recipe mozzarella cheese, lasagna noodle
            </p>
          </div>
        </article>
      </section>
      <section className="locationSec">
        <h2>Location</h2>
        <div className="ratio customRatio">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1059174753223!2d-65.2097472891983!3d-26.83658327659536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1701132117533!5m2!1ses-419!2sar"></iframe>
        </div>
      </section>
    </>
  );
};
export default ComeWeb;
