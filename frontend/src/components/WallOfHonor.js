import React, { useState } from "react";
import "../styles/WallOfHonor.css";

export default function WallOfHonor() {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    honoreeName: "",
    relationship: "",
    story: "",
    descriptionWord: "",
    shareConsent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace the below fetch URL with your backend endpoint
    fetch("/api/wall-of-honor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Nomination submitted successfully!");
          setFormData({
            yourName: "",
            email: "",
            honoreeName: "",
            relationship: "",
            story: "",
            descriptionWord: "",
            shareConsent: "",
          });
        } else {
          alert("Failed to submit. Please try again.");
        }
      })
      .catch(() => alert("Error submitting form."));
  };

  return (
    <div className="honor-wrapper">
      <h1 style={{ fontFamily: "cursive", color: "black", padding: "1rem" }}>
        Wall of Honor
      </h1>

      <div className="about-container animated fadeIn">
        <p className="description">
          Honoring the Women Who Raised Us. <br />
          <br />
          Some women never asked to lead, but they led with their love...
          <br />
          <br />
          Board members and team leaders are invited to nominate these women—
          the ones who lifted them up, shaped their journeys, and reminded them
          they were never alone.
        </p>
      </div>

      <div className="form-container animated slideInUp">
        <h2 className="form-title">
          Empower Her Soft - Wall of Honor Nomination
        </h2>
        <p className="form-subtitle">
          This is your space to honor the women who have inspired, empowered, or
          lifted you.
        </p>
        <form className="nomination-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Name of the Woman You are Honoring:</label>
            <input
              type="text"
              name="honoreeName"
              value={formData.honoreeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Her Relationship to You:</label>
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Share Her Story or Why She Inspires You:</label>
            <textarea
              name="story"
              rows="5"
              value={formData.story}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>One word that describes her:</label>
            <input
              type="text"
              name="descriptionWord"
              value={formData.descriptionWord}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Share her name on our Wall? (Yes/No):</label>
            <input
              type="text"
              name="shareConsent"
              value={formData.shareConsent}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit Nomination</button>
        </form>
      </div>
    </div>
  );
}
