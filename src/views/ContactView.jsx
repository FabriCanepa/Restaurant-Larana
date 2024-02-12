import Contact from "../components/Contact/Contact";

const ContactView = () => {
  return (
    <>
      <section className="contactSec">
        <h2>Contact Us</h2>
        <article className="formContact">
          <p className="titleForm">We are interested in your opinion</p>
          <Contact />
        </article>
      </section>
    </>
  );
};
export default ContactView;
