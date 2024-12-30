import SmartCustomerPhoto from "../Images/SmartCustomer.webp";
import CommunityEngagementPhoto from "../Images/CommunityEngagementPhoto.webp";
import StreamlinedPhoto from "../Images/StreamlinedPhoto.webp";

function OurServises() {
  return (
    <section className="services-section">
      <div className="service-card">
        <img src={SmartCustomerPhoto} alt="Smart Customer Insights" />
        <h3>Smart Customer Insights</h3>
        <p>
          Understand your customers like never before with AI-driven analytics
          that uncover trends and preferences to guide your decisions.
        </p>
      </div>
      <div className="service-card">
        <img src={CommunityEngagementPhoto} alt="Community Engagement" />
        <h3>Automatic Community Engagement</h3>
        <p>
          Leverage AI to automatically connect with your local audience through
          personalized messaging and outreach campaigns.
        </p>
      </div>
      <div className="service-card">
        <img src={StreamlinedPhoto} alt="Streamlined Operations" />
        <h3>Streamlined Operations</h3>
        <p>
          Optimize your business operations using AI tools that simplify
          workflows and improve efficiency.
        </p>
      </div>
    </section>
  );
}

export default OurServises;
