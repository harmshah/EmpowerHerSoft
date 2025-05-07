import React from 'react';
import '../styles/WhoWeEmpower.css';
import { useNavigate } from "react-router-dom";


export default function WhoWeEmpower() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
      
      <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }}>Who We Empower</h1>

      <div className='about-container'>
        <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }}>A Place for Every Woman</h1>
        <p>
          At Empower Her Soft, we believe that every woman, no matter her past, her pace, or her path,
          deserves to rise with dignity and support. We don’t ask her to explain herself.
          We don’t ask her to fit in. We simply make space — for her healing, her voice, her dreams, and her becoming.
        </p>
        <p>
           Women with disabilities, 
           Indigenous women and women of all cultures, 
           Immigrants, refugees, and newcomers finding their footing, 
           Divorced, separated, or widowed women rebuilding their lives, 
           Single mothers holding both love and responsibility, 
           Women in their 30s, 40s, 50s+ who are starting over or just starting now, 
           Moms returning to work with courage and care, 
           Adult learners stepping into new careers with hope.
        </p>
        <p>
          Here, there is no “too late.” No “not enough.” No judgment.
          Only gentle strength, support, and sisterhood.
          We are women. We understand the journey — the messy, miraculous, nonlinear journey.
          And we rise best when we rise together.
        </p>
      </div>

      <div className='about-container'>
        <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }}>Every Woman Belongs Here</h1>
        <p>
          We empower all women, including but never limited to:
        </p>
        <p>
          Recent graduates entering the workforce, 
          Mothers returning after years of caregiving, 
          Women reinventing their careers in their 40s and beyond, 
          Single mothers balancing ambition and responsibility, 
          Women returning to education after time away, 
          Aspiring entrepreneurs and late bloomers, 
          Women of all races, backgrounds, and identities.
        </p>
        <p>
          This list is not exhaustive, because empowerment has no boundaries. More will be added, always.
          We see the beauty in every beginning, every comeback, and every unspoken strength of her.
        </p>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Because when one woman rises, we all rise.
        </p>
        <button className="scroll-button" onClick={() => navigate("/wallofhonor")}>
        Nominate a Woman
          </button>
      </div>
    </div>
  );
}
