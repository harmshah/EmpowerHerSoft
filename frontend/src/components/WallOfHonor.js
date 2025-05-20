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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("https://honor-backend-17fo.onrender.com/api/wall-of-honor", {
  //     // ↑ Replace with actual backend URL or use "/api/..." if proxied in Vercel
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         alert("Nomination submitted successfully!");
  //         setFormData({
  //           yourName: "",
  //           email: "",
  //           honoreeName: "",
  //           relationship: "",
  //           story: "",
  //           descriptionWord: "",
  //           shareConsent: "",
  //         });
  //       } else {
  //         alert("Failed to submit. Please try again.");
  //       }
  //     })
  //     .catch(() => alert("Error submitting form."));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/wall-of-honor`, {
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
      <h1>Honoring the Women Who Raised Us.</h1>

      <div className="text-card about-container">
        <p className="description">
          Honoring the Women Who Raised Us. 
          Some women never asked to lead, but they led with their love. 
          Some women never had a stage, but their quiet strength lit the path. 
          Some women may not know it, but they empowered us simply by believing in us, by saying “you can,” or by standing beside us when no one else did. 
          At Empower Her Soft, we honor them. 
          The mothers. The sisters. The mentors. The friends. The teachers who saw something in us before we saw it in ourselves. 
          The grandmothers whose quiet courage became the foundation of our rise.
          The coworkers who whispered, “You’ve got this.”
          <br/>
          <br/>
          Board members and team leaders are invited to nominate these women, the ones who lifted them up, shaped their journeys, and reminded them they were never alone. 
          These women become part of our living legacy, woven into our story, named in our spaces, and held with the deepest reverence. 
          Because this is what women supporting women looks like, not just in boardrooms or workshops, but in everyday gestures, whispered encouragement, and generational strength passed hand to hand.
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

              <form className="nomination-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="yourName"
                    placeholder="Enter your name"
                    value={formData.yourName}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="honoreeName"
                    placeholder="Name of the Woman You are Honoring"
                    value={formData.honoreeName}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="relationship"
                    placeholder="Her relationship to you"
                    value={formData.relationship}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="story"
                    rows="5"
                    placeholder="Share Her Story or Why She Inspires You"
                    value={formData.story}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="descriptionWord"
                    rows="2"
                    placeholder="One word that describes her"
                    value={formData.descriptionWord}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="shareConsent"
                    rows="2"
                    placeholder="Can we share her name on the Wall of Honor? (Yes/No)"
                    value={formData.shareConsent}
                    onChange={handleChange}
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
