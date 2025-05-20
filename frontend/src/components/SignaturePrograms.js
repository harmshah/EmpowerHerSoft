import React from "react";
import "../styles/SignaturePrograms.css"; // Ensure you have the styles properly imported
import FinHerImage from "../assets/Fund.jpg"; // Make sure you have the image

// Define the programs array
const programs = [
  "The H.E.R. Framework",
  "HER Quiet Confidence",
  "GroundHER Wellness",
  "Her Dignity, Her Health",
  "Digital Belonging",
  "SheCodes Softly",
  "HER Language for HER Life",
  "SHE Relearn & Rise",
  "HER Peer-to-Peer Anchoring",
  "HER Reignite Pathway",
  "MomMentum",
  "HER Money, HER Terms",
  "CompassHER Career Hub",
  "LeadHERship Circles",
  "HER Yes & No Project",
  "The Soft Space",
  "Because Here, Women Can Do Anything",
  "HER Unwritten Chapters",
  "Power in Her Voice",
  "HERitage & Healing Circles",
  "HER Mirror Work: Rebuilding Self-Worth",
  "NourishHER Kitchen",
  "Fix It, HER Way",
  "RadiateHER: Personal Branding & Presence",
  "The Stillness Studio",
  "HER Resume, HER Story",
  "The Gentle Path to Entrepreneurship",
  "Life Navigation for First-Gen Women",
  "Boundaries & Brave Spaces",
];

export default function SignaturePrograms() {
  return (
    <div className="programs-container">
      <h1>
        Programs Built for Her
      </h1>
      {/* Featured Program Section with Image and Animation */}
      <section className="about-section slide-in-right">
        <img src={FinHerImage} alt="FinHER" className="section-image" />

        <div className="section-content">
          <h2 className="section-heading">
            FinHER: Financial Support on Her Terms
          </h2>

          <p>
            Because every woman deserves the means to rise, without proving,
            justifying, or conforming.
          </p>

          <p>
            At Empower Her Soft, we believe financial independence is not a
            privilege, but a right. And women do not need to follow traditional
            paths, fit societal boxes, or meet someone else’s definition of
            “worthy” to access support. That’s why FinHER exists, a
            compassionate financial support initiative offering:
          </p>

          <ul className="program-details-list">
            <li>
              Microgrants to help launch ideas, return to school, rebuild
              careers, or simply get through a hard season.
            </li>
            <li>
              No red tape: we see the story, the spirit, not the résumé or
              credit score.
            </li>
            <li>
              Emotional money coaching: because financial empowerment is also
              healing.
            </li>
            <li>
              Workshops on budgeting, investing, and spending money wisely.
            </li>
            <li>
              Community funds and peer-nominated support — women lifting women.
            </li>
          </ul>

          <p>
            We reject the idea that support must come with shame. 
            We do not ask women to prove they deserve help, we ask how we can stand beside them. 
            Whether she is rebuilding after divorce, launching a side business, or going back
            to school at 50 — she is enough. 
            FinHER is here to remind her that she never had to ask for permission.
          </p>
        </div>
      </section>

      {/* Signature Programs List */}
      <section className="signature-programs-list">
        <h3>Explore All Signature Programs</h3>
        <div className="programs-grid">
          {programs.map((title, index) => (
            <div className="program-card" key={index}>
              <h6 className="program-card-title">{title}</h6>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
