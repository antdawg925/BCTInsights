import InfoPic from "../Images/InfoPic.png";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();

  return (
    <section className="info-section">
      <div id="InfoBox">
        <h2>
          Empowering Local Businesses with AI <br />
          for Growth and Connection.
        </h2>
        <p>
          At BCT Insights, we help local businesses harness the power of AI to
          expand their reach, analyze valuable data, and create meaningful
          connections with their community. Our solutions are designed to
          transform your business into a data-driven powerhouse, tailored to
          your local market.
        </p>
        <button id="AboutUsButton" onClick={() => navigate("/about")}>
          About Us!
        </button>
      </div>
      <div className="info-image">
        <img src={InfoPic} alt="Empowering Local Businesses" />
      </div>
    </section>
  );
}

export default Info;
