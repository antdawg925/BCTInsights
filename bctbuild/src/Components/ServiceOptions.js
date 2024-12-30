import React from "react";
import services from "./ServiceData";
import "../CSS/Services.css";

const ServiceOptions = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <h1>{service.title}</h1>
          <ul>
            {service.descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceOptions;
