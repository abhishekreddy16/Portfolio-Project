import React from 'react';
import './works.css';

const Projects = () => {
  const projects = [
    {
      tech: 'Js and React',
      title: 'Portfolio',
      description: 'A portfolio website displays your skills and projects to employers or clients. To upload a project, add its title, description, tech stack, and link in your site’s code. Then deploy or update your site on platforms like Vercel or Netlify.',
      link: '#',
      color: 'green'
    },
    {
      tech: 'PyTorch & Matplotlib',
      title: 'AI-Powered Chest X-Ray Report',
      description: 'Image-to-text generation system that analyzes chest X-rays using fine-tuned GIT models to produce medical reports.',
      link: '#',
      color: 'pink'
    },
    {
      tech: 'Rust & Solana',
      title: 'DeFi Copy Trading Bot',
      description: 'Real-time copy trading bot that monitors wallet transactions and executes trades on the Solana blockchain with optimized strategies.',
      link: '#',
      color: 'blue'
    },
    {
      tech: 'React, Node.js, Socket.io, Express, Heroku, Vercel',
      title: 'Skribbl.in - Real-Time Multiplayer Drawing & Guessing Game',
      description: 'Designed and implemented a full-stack multiplayer web game where users draw while others guess the word, featuring real-time canvas drawing, chat functionality, and a scoring system based on guess speed.',
      link: '#',
      color: 'purple'
    }
  ];

  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className={`project-card border-${proj.color}`} key={idx}>
            <span className={`tech-tag ${proj.color}`}>{proj.tech}</span>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href="https://github.com/Extinction16" className="view-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;