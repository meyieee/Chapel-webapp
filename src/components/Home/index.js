import React from "react";
import { ref, onValue } from '@firebase/database';
import { database } from '../../config/FIrebase';
import { useState, useEffect } from 'react';

const Home = () => {
  const [homeContent, setHomeContent] = useState({
    title: "YOUR OPINION MATTERS",
    subtitle: "Connect, Collaborate, and Code Together",
  });

  const stats = [
    { number: "500+", label: "CS Students" },
    { number: "100+", label: "Technical Discussions" },
    { number: "98%", label: "Problem Resolution Rate" }
  ];

  const quickFeatures = [
    {
      icon: "💻",
      title: "Code Support",
      description: "Get help with programming assignments and debugging"
    },
    {
      icon: "🚀",
      title: "Tech Projects",
      description: "Collaborate on coding projects and hackathons"
    },
    {
      icon: "🔍",
      title: "Resource Sharing",
      description: "Access study materials and coding resources"
    }
  ];
  useEffect(() => {
    const homeRef = ref(database, 'home');
    const unsubscribe = onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setHomeContent(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="main-home">
      <div className="container">
        <div className="home-info">
          <h1>{homeContent.title}</h1>
          <h2>{homeContent.subtitle}</h2>
          <div className="description-box">
            <p>{homeContent.description}</p>
          </div>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="quick-features">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToContent}>
        <span></span>
      </div>
    </section>
  );
};

export default Home;