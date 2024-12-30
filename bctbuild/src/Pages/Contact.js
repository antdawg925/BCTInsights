import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import Navbar from "../Components/Navbar";
import "../CSS/styles.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <div id="ContactBackground">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            We're here to help. Please fill out the form below and we'll get in
            touch with you shortly.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
