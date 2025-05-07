import React from 'react';
import '../styles/WallOfHonor.css'; // Import external CSS

export default function WallOfHonor() {
  return (
    <div className="honor-wrapper" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            <h1 style={{ fontFamily: "cursive", color: "black", padding: "1rem" }}>Wall Of Honor</h1>

            <div className="about-container">
        {/* <h1 className="title">Wall Of Honor</h1> */}
        <p className="description">
          Honoring the Women Who Raised Us. <br /><br />
          Some women never asked to lead, but they led with their love.
          Some women never had a stage, but their quiet strength lit the path.
          Some women may not know it, but they empowered us simply by believing in us,
          by saying “you can,” or by standing beside us when no one else did.
          <br /><br />
          At Empower Her Soft, we honor them:
          the mothers, the sisters, the mentors, the friends.
          The teachers who saw something in us before we saw it in ourselves.
          The grandmothers whose quiet courage became the foundation of our rise.
          The coworkers who whispered, “You’ve got this.”
          <br /><br />
          Board members and team leaders are invited to nominate these women—
          the ones who lifted them up, shaped their journeys, and reminded them they were never alone.
          These women become part of our living legacy, woven into our story,
          named in our spaces, and held with the deepest reverence.
        </p>
      </div>

      <div className="form-container">
        <h2 className="form-title">
          Empower Her Soft - Wall of Honor Nomination
        </h2>
        <p className="form-subtitle">
          This is your space to honor the women who have inspired, empowered, or lifted you—
          through their actions, their words, or simply their presence.
        </p>

        <form className="nomination-form">
          <label>Your Name:</label>
          <input type="text" name="yourName" />

          <label>Email:</label>
          <input type="email" name="email" />

          <label>Name of the Woman You are Honoring:</label>
          <input type="text" name="honoreeName" />

          <label>Her Relationship to You (e.g., mother, mentor, friend):</label>
          <input type="text" name="relationship" />

          <label>Share Her Story or Why She Inspires You:</label>
          <textarea name="story" rows="5" />

          <label>One word that describes her:</label>
          <input type="text" name="descriptionWord" />

          <label>
            Would you like us to share her name on our digital Wall of Honor? (Yes/No):
          </label>
          <input type="text" name="shareConsent" />

          <button type="submit">Submit Nomination</button>
        </form>
      </div>
    </div>
  );
}
