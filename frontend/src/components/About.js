import React from 'react';
import '../styles/About.css';
import IMG1 from '../assets/Vision.jpg';
import IMG2 from '../assets/Mission.jpg';
import IMG3 from '../assets/Different.jpg';
import IMG4 from '../assets/Promise.jpg';

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">What Drives Us</h1>

      <section className="about-section slide-in-left">
        <img src={IMG1} alt="Vision" className="section-image" />
        <div className="section-content">
          <h2 className="section-heading">Our Vision</h2>
          <p style={{textAlign: "left"}}>
            We envision a world where no woman is invisible, underestimated, or left behind. 
            A world where every woman is equipped with everything she needs to rise—soft skills, leadership tools, emotional strength, financial confidence, and a deep-rooted belief in her worth. 
            Financial independence is more than earning a paycheck. It’s about owning your decisions, understanding your worth, managing your resources with clarity, investing with purpose, and having the strength to say “Yes” to what serves you, and “No” to what doesn’t. 
            To be a woman is to walk through life with both burdens and brilliance. 
            It’s the grace to begin again, the wisdom to lead others as you rise, and knowing your voice, your choices, and your presence matter. 
            When women lead with compassion, resilience, and vision, the world becomes more just, more balanced, and more beautifully human.
          </p>
        </div>
      </section>

      <section className="about-section slide-in-right">
        <img src={IMG2} alt="Mission" className="section-image" />
        <div className="section-content">
          <h2 className="section-heading">Our Mission</h2>
          <p style={{textAlign: "left"}}>
            To empower women from all walks of life, not just with soft skills, but with the clarity, confidence, and community they need to lead themselves and the world.
            We stand beside every woman—at any age, from any background. Every woman belongs here.
            We believe true leadership is compassionate and deeply human. And when women lead with empathy, intelligence, and resilience, the world becomes more just, more balanced, and more beautiful.
            When a woman rises, she brings her family, her community, and her nation with her.
          </p>
        </div>
      </section>

      <section className="about-section slide-in-left">
        <img src={IMG3} alt="What Makes Us Different" className="section-image" />
        <div className="section-content">
          <h2 className="section-heading">What Makes Us Different</h2>
          <p style={{textAlign: "left"}}>
            At Empower Her Soft, we believe every woman already holds the power within her. She doesn’t need permission to rise, speak, or choose her path—she needs support, community, and space to remember who she’s always been.
            We’re not a job placement center or networking club. We are a soft landing, a launchpad, and a sisterhood all in one.
            Here, women are seen, heard, and honored exactly as they are—whether entering the workforce, returning after a pause, reinventing a career, or building a dream.
            We don’t push women to fit timelines or titles. We help them pause, reflect, and move forward on their own terms.
            True empowerment isn’t about telling women what to do. It’s about reminding them: You already know. You already can. You never needed permission.
            We are founded by a woman, led by women, and built entirely for women. And we’re here to make “women supporting women” more than a phrase—it’s a movement.
          </p>
        </div>
      </section>

      <section className="about-section slide-in-right">
        <img src={IMG4} alt="Our Promise" className="section-image" />
        <div className="section-content">
          <h2 className="section-heading">Our Promise</h2>
          <p style={{textAlign: "left"}}>
            We believe women don’t need permission—only space to trust themselves again.
            We honor each woman’s right to make her own choices, define success on her terms, and lead her life boldly.
            We break traditional barriers: no red tape, no judgment, no outdated rules.
            We meet women where they are and walk beside them as they grow.
            Empowered women don’t compete—they complete each other.
            And we won’t stop until no woman is left behind. When a woman shines by her own light, the whole world becomes brighter.
          </p>
        </div>
      </section>
    </div>
  );
}
