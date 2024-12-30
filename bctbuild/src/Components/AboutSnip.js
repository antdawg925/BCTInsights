import AboutCompanyPhoto from "../Images/AboutCompanyPhoto.webp";

function AboutSnip() {
  return (
    <section className="about-snippet">
      <img
        id="AboutCompanyPhoto"
        src={AboutCompanyPhoto}
        alt="About BCT Insights"
      />
      <div id="AboutSnipBox">
        <h2 style={{ marginBottom: "15px" }}>About Our Company</h2>
        <p>
          BCT Insights was founded with a mission to bridge the gap between
          local businesses and the transformative power of AI. We believe in
          creating customized solutions that respect the unique character of
          each community while unlocking the potential of modern technology. Our
          team is dedicated to helping you Build smarter strategies, Connect
          with your audience, and Transform your business for long-term success.
        </p>
      </div>
    </section>
  );
}

export default AboutSnip;
