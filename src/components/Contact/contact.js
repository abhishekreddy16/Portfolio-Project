import React from 'react';
import './contact.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h1 className="section-heading">Professional Journey</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="experience-header">
              <h3 className="job-title">Internship Trainee</h3>
              <span className="job-date">Oct 2023 – Dec 2023</span>
            </div>
            <h4 className="company-name">cSigma Finance Inc</h4>
            <p className="job-location">Remote</p>
            <p className="job-description">
              Assisted in frontend development tasks, contributing to UI components and layout enhancements. 
              Supported integration of blockchain features into the platform, focusing on user interaction 
              with smart contracts. Gained hands-on experience in Web3 technologies, frontend frameworks, 
              and blockchain-based finance systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
