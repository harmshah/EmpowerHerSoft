import React from 'react';
import '../styles/About.css'; // Import the CSS file

export default function About() {
  return (
    <div style={{ paddingBottom: "20px", paddingTop: "20px"}}>
                <h1 style={{ fontFamily: "cursive", color: "black", padding: "1rem" }}>About Us</h1>

      <div className='about-container'>
        <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }}>Our Vision</h1>
        <p>
          We envision a world where no woman is invisible, underestimated, or left behind.
          A world where every woman is equipped with everything she needs to rise, soft skills, leadership tools, emotional strength, financial confidence, and a deep-rooted belief in her worth.
          We believe financial independence is more than earning a paycheck.
          It’s about owning your decisions, understanding your worth, managing your resources with clarity, investing with purpose, and having the strength to say “Yes” to what serves you, and “NO” to what doesn’t.
          Because to be a woman is to walk through life with both burdens and brilliance.
          It is the grace to begin again, and the wisdom to lead others as you rise.
          It is knowing that your voice matters, your choices matter, and your presence makes a difference.
          It is the grace to stay rooted when everything around you is shifting.
          And when women lead, with compassion, resilience, and vision, the world becomes more just, more balanced, and more beautifully human.
        </p>
      </div>

      <div className='about-container'>
        <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }} >Our Mission</h1>
        <p>
          To empower women from all walks of life, not just with soft skills, but with the clarity, confidence, and community they need to lead themselves and the world.
          We stand beside women of every background: every woman, at any age, from any background. Every woman belongs here.
          We believe true leadership is compassionate and deeply human. And when women lead, with empathy, intelligence, and resilience, the world becomes more just, more balanced, and more beautiful.
          When a woman rises, she brings her family, her community, and her nation with her.
        </p>
      </div>

      <div className='about-container'>
      <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }} >What Makes Us Different</h1>
        <p> 
            At Empower Her Soft, we believe that every woman already holds the power within her, she does not need permission to rise, to speak, to choose her path. What she needs is support, community, and space to remember who she has always been.
            We are not a job placement center. We are not a networking club. We are a soft landing, a launchpad, and a sisterhood, all in one.
            Here, women are seen, heard, and honored exactly as they are. Whether she is entering the workforce, returning after a pause, reinventing her career, or building a dream from scratch, she belongs here.
            We do not t push women to fit timelines, titles, or traditions. We help them pause, reflect, and move forward on their own terms, with intention, not pressure.
            Because true empowerment is not about telling women what to do. It is about reminding them: You already know. You already can. You never needed permission.
            We are founded by a woman, led by women, and built entirely for women. And we are here to make “women supporting women” more than a phrase, a movement.
        </p>
    </div>

    <div className='about-container'>
        <h1 className="my-3" style={{ fontFamily: "cursive", color: "black" }}>Our Promise</h1>
        <p>
          We believe women don’t need permission, only space to trust themselves again.
          We honor each woman’s right to make her own choices, define success on her own terms,
          and lead her own life boldly. We break traditional barriers: no red tape, no judgment,
          no outdated rules. We meet women where they are, and walk beside them as they grow.
          We believe empowered women don’t compete, they complete each other.
          And we won’t stop until no woman is left behind. Because when a woman shines, by her own light,
          the whole world becomes brighter.
        </p>
      </div>


    
    </div>
  );
}
