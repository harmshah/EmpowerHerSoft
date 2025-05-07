import React from "react";
import "../styles/SignaturePrograms.css"; // <-- Make sure to create and import this

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
      <h1 className="programs-title my-3" style={{ fontFamily: "cursive", color: "black" }} >Programs Built for Her</h1>

      <section className="featured-program">
        <h5 style={{ fontWeight: "bold", color: "black" }}>FinHER: Financial Support on Her Terms</h5>
        <p>
          Because every woman deserves the means to rise, without proving, justifying, or conforming.
          <br /><br />
          At Empower Her Soft, we believe financial independence is not a privilege, but a right.
          And women do not need to follow traditional paths, fit societal boxes, or meet someone else’s definition of “worthy” to access support.
          <br /><br />
          That’s why FinHER exists, a compassionate financial support initiative offering:
        </p>
        <p>
          Microgrants to help launch ideas, return to school, rebuild careers, or simply get through a hard season, 
          No red tape: we see the story, the spirit, not the résumé or credit score, 
          Emotional money coaching: because financial empowerment is also healing, 
          Workshops on budgeting, investing, and spending money wisely, 
          Community funds and peer-nominated support — women lifting women.
        </p>
        <p>
          We reject the idea that support must come with shame. Whether she is rebuilding after divorce, launching a side business,
          or going back to school at 50 — she is enough. FinHER is here to remind her that she never had to ask for permission.
        </p>
      </section>

      <section className="signature-programs-list">
        <h3 style={{ fontFamily: "cursive", color: "black" }}>Explore All Signature Programs</h3><br/>
        <div className="programs-grid">
          {programs.map((title, index) => (
            <div className="program-card" key={index}>
              <h6>{title}</h6>
              {/* Optional internal link */}
              {/* <Link to={`/programs/${slugify(title)}`}>Learn More</Link> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
