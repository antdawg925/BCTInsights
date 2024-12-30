import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/AboutUs.css";
import AboutUsPhoto from "../Images/AboutUsPhoto.webp";

function About() {
  return (
    <div>
      <Navbar /> {/* Include Navbar at the top */}
      <div className="about-us-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Empowering Local Businesses with AI Innovation</h1>
            <p>Transforming ideas into growth through technology.</p>
          </div>
          <div className="hero-image">
            <img src={AboutUsPhoto} alt="About Us Hero" id="AboutUsPhoto" />
          </div>
        </section>

        {/* Other Sections */}
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At BCT Insights, our mission is to empower local businesses with
            cutting-edge AI solutions that foster growth, innovation, and
            community connection.
          </p>
        </section>
        {/* Our Story Section */}
        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to bridge the gap between small businesses and
            advanced technology, BCT Insights was built to provide accessible,
            tailored AI solutions to help local businesses thrive.
          </p>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Personalization</h3>
              <p>
                We tailor solutions to meet the unique needs of every client.
              </p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We prioritize cutting-edge solutions to drive growth.</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>We believe in strengthening local connections.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Join Us in Building the Future</h2>
          <a href="/contact" className="cta-button">
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
