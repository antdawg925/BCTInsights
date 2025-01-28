import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SentConfirmation from "./SentConfirmation";
import FormInfo from "./FormInfo";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_yjm5x5r";
    const templateId = "template_babunbj";
    const userId = "3rDVOVxV-wOoMj20g";

    emailjs.send(serviceId, templateId, formData, userId).then(
      () => {
        setStatus(
          "Thank you for your inquiry! One of our team members will reach out to you soon!"
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      },
      () => {
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="flex">
      {status ? (
        <SentConfirmation status={status} clearStatus={() => setStatus("")} />
      ) : (
        <FormInfo
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ContactForm;
