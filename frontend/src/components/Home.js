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
            Maybe she is stepping away from a role that no longer reflects her.
            Maybe she has raised a family and is now ready to raise her hand for herself.
            Maybe she is starting over in a new country, language, or life chapter.
            She could be 25 or 55. Starting fresh or starting again.
            She is not lost. She is not broken.
            She needs the right space to rediscover the strength she already carries.
          </p>
          <p className="bold">
            That's why Empower Her Soft exists. <br />
            We are not a charity. <br />
            We are not a coaching platform. <br />
            We are a space of soft power, strong women, and second chances.
            We support women as they rebuild confidence, reclaim their voice, and reconnect with who they are, and who they are becoming.
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
          Empower Her Soft is a love letter to the women who paved the way-often without recognition, and always with quiet strength.
          Our founder's mother was a strong woman whose brilliance was never given space to shine.
          Her great-grandmother was calm and composed-but when needed, her voice changed the room.
          Her maternal great-grandmother, widowed young, farmed 50 acres alone, raised her children, and stood resilient through heartbreaking losses.
          The founder has led in spaces where she was the only woman at the table. She built and led all male teams, but she knows not every woman has had that chance.
          So she created this space-for every woman to have her own voice, her own journey, her own power.
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
