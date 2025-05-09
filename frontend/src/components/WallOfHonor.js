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

      <div className="text-card about-container">
        <p className="description">
          Honoring the Women Who Raised Us. <br />
          <br />
          Some women never asked to lead, but they led with their love. Some
          women never had a stage, but their quiet strength lit the path. Some
          women may not know it, but they empowered us simply by believing in
          us, by saying “you can,” or by standing beside us when no one else
          did.
          <br />
          <br />
          At Empower Her Soft, we honor them. The mothers. The sisters. The
          mentors. The friends. The teachers who saw something in us before we
          saw it in ourselves. The grandmothers whose quiet courage became the
          foundation of our rise. The coworkers who whispered, “You’ve got
          this.”
          <br />
          <br />
          Board members and team leaders are invited to nominate these women,
          the ones who lifted them up, shaped their journeys, and reminded them
          they were never alone. These women become part of our living legacy,
          woven into our story, named in our spaces, and held with the deepest
          reverence. Because this is what women supporting women looks like, not
          just in boardrooms or workshops, but in everyday gestures, whispered
          encouragement, and generational strength passed hand to hand.
        </p>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm p-4">
              <h2 className="form-title text-center">Nominate a Woman</h2>
              <p className="form-subtitle text-center">
                Use this form to share the story of a woman who inspires you.
              </p>
              <form className="nomination-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nomineeName"
                    placeholder="Enter nominee's name"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="story"
                    rows="5"
                    placeholder="Why are you nominating her? Share her story..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Submit Nomination
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
