import React, { useRef } from "react";
import ImgEmpower from "../assets/Homepage.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import external CSS

export default function Home() {
  const navigate = useNavigate();
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      const yOffset = -100;
      const elementPosition =
        nextSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-wrapper">
      <div className="home-header">
        <h1>Empower Her Soft</h1>
        <h4>
          “Empowering women to rise again—with softness, strength, and sisterhood.”
        </h4>
        <button className="scroll-button" onClick={scrollToNextSection}>
          Our Story
        </button>
      </div>

      <div
        className="home-image"
        style={{ backgroundImage: `url(${ImgEmpower})` }}
      ></div>

      <div ref={nextSectionRef} className="section-container">
        <div className="text-card">
          <h1>Our Story</h1>
          <h5>
            Every woman reaches a point where she asks, What now? What's next—for me?
          </h5>
          <p>
            Maybe she is stepping away from a role that no longer reflects her...
            She needs the right space to rediscover the strength she already carries.
          </p>
          <p className="bold">
            That's why Empower Her Soft exists. <br />
            We are not a charity. <br />
            We are not a coaching platform. <br />
            We are a space of soft power, strong women, and second chances...
          </p>
          {/* <button className="scroll-button" onClick={scrollToNextSection}>
          Why We Exist
          </button> */}
        </div>
      </div>

      <div className="section-container">
        <div className="text-card">
          <h1>Why We Exist: A Founder's Inspiration</h1>
          <p>
            Empower Her Soft is a love letter to the women who paved the way—often
            without recognition, and always with quiet strength...
          </p>
          <h5>"In a world dominated by men, I happen to be a woman." - A Woman</h5>
          <button className="scroll-button" onClick={() => navigate("/about")}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
