import AboutSnip from "../Components/AboutSnip";
import ContactForm from "../Components/ContactForm/ContactForm";
import Info from "../Components/Info";
import Nav from "../Components/Nav";
import OurServises from "../Components/OurServises";
import "../CSS/styles.css";

function Home() {
  return (
    <div>
      <Nav />
      <Info />
      <OurServises />
      <AboutSnip />
      <div className="contact-section">
        <div className="contact-description">
          <h1>Contact Us</h1>
          <p>
            Interested in working together? Fill out some info and we will be in
            touch shortly. We can't wait to hear from you!
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
