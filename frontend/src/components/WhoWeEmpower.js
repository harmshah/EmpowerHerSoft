import React from 'react';
import '../styles/WhoWeEmpower.css';
import { useNavigate } from "react-router-dom";
import visionImg from '../assets/Women.jpg'; // Replace with your image
import belongImg from '../assets/EveryWomen.jpg'; // Replace with your image

export default function WhoWeEmpower() {
  const navigate = useNavigate();

  return (
    <div className="empower-page">
      <h1 className="empower-title">Who We Empower</h1>

      <div className='empower-section slide-in-left'>
        <img src={visionImg} alt="Empowerment Visual" className="empower-image" />
        <div className="empower-content">
          <h2 className="empower-heading">A Place for Every Woman</h2>
          <p style={{textAlign: "left"}}>
            At Empower Her Soft, we believe that every woman, no matter her past, her pace, or her path,
            deserves to rise with dignity and support. We don’t ask her to explain herself.
            We don’t ask her to fit in. We simply make space — for her healing, her voice, her dreams, and her becoming.
          </p>
          <p style={{textAlign: "left"}}>
            Women with disabilities, Indigenous women and women of all cultures, immigrants, refugees, and newcomers finding their footing,
            divorced, separated, or widowed women rebuilding their lives, single mothers holding both love and responsibility,
            women in their 30s, 40s, 50s+ starting over or just starting now, moms returning to work with courage and care,
            and adult learners stepping into new careers with hope.
          </p>
          <p style={{textAlign: "left"}}>
            Here, there is no “too late.” No “not enough.” No judgment. Only gentle strength, support, and sisterhood.
            We are women. We understand the journey — the messy, miraculous, nonlinear journey. And we rise best when we rise together.
          </p>
        </div>
      </div>

      <div className='empower-section slide-in-right'>
        <img src={belongImg} alt="Every Woman Belongs" className="empower-image" />
        <div className="empower-content">
          <h2 className="empower-heading">Every Woman Belongs Here</h2>
          <p style={{textAlign: "left"}}>
            We empower all women, including but never limited to: recent graduates entering the workforce, mothers returning after caregiving,
            women reinventing careers in their 40s and beyond, single mothers balancing ambition and responsibility, women returning to education,
            aspiring entrepreneurs, and late bloomers of all races and backgrounds.
          </p>
          <p style={{textAlign: "left"}}>
            This list is not exhaustive, because empowerment has no boundaries. More will be added, always.
            We see the beauty in every beginning, every comeback, and every unspoken strength of her.
          </p>
          <p style={{textAlign: "left"}} className="bold-highlight">
            Because when one woman rises, we all rise.
          </p>
          <button className="scroll-button" onClick={() => navigate("/wallofhonor")}>
            Nominate a Woman
          </button>
        </div>
      </div>
    </div>
  );
}
