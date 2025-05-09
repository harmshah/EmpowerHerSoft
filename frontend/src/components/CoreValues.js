import React from 'react';
import '../styles/CoreValues.css';
import { Heart, Leaf, Link2, TrendingUp, Users, Star, Flower2 } from 'lucide-react';

const coreValues = [
  {
    icon: <Leaf size={20} color="#10b981" />,
    title: 'Healing is strength',
    description: 'Rest is not weakness. Healing, softness, and emotional clarity are the foundations of true resilience, and we honor them deeply.',
  },
  {
    icon: <Heart size={20} color="#ec4899" />,
    title: 'Strength without pressure',
    description: 'We believe in empowering women gently, with support, not strain. We reject the idea that success must come at the cost of wellbeing.',
  },
  {
    icon: <Link2 size={20} color="#3b82f6" />,
    title: 'Connection Before Compliance',
    description: 'We lead with compassion, not control. Women do not need fixing, they need space to be seen, heard, and supported, starting right here with us.',
  },
  {
    icon: <TrendingUp size={20} color="#8b5cf6" />,
    title: 'Progress Over Perfection',
    description: 'We embrace the messy, beautiful journey of growth. We don’t chase flawlessness, we celebrate forward movement in every form.',
  },
  {
    icon: <Users size={20} color="#f59e0b" />,
    title: 'Empowerment with Empathy',
    description: 'We rise with humility and sisterhood. True leadership means lifting as we climb, knowing that empowered women empower others.',
  },
  {
    icon: <Flower2 size={20} color="#f59e0b" />,
    title: 'Women-led, women-rooted',
    description: 'This space is created by women, for women. We believe leadership must reflect the lives we aim to impact, and it begins with us.',
  },
  {
    icon: <Star size={20} color="#6366f1" />,
    title: 'When She Shines, We All Rise',
    description: 'A woman’s light is not hers alone, it illuminates her home, her community, and the world. We are here to protect it, fuel it, and help it grow.',
  },
];

export default function CoreValues() {
  return (
    <div className="core-container">
      <h1>Our Core Values</h1>
      <div className="core-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="core-card">
            <div>{value.icon}</div>
            <h5>{value.title}</h5>
            <p className="core-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
