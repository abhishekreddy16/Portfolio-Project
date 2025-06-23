import React from 'react';
import { Github} from 'lucide-react';
import { FaLinkedin, FaRegFileAlt } from 'react-icons/fa';

import './intro.css';
import bg from '../../assets/profile.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hi">Hi,</span>
                <span className="introText">I'm <span className="introName">Abhishek</span> <br />Ai enthusiast and web developer</span>
                <p className="introPara">I am a skilled web designer with experience in creating<br />visually appealing and user friendly websites.</p>
                <div className="flex items-center gap-20 mt-4">
  <a
    href="https://github.com/Extinction16"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0078D4' }}
  >
    <Github size={40} />
  </a>

  <a
    href="https://www.linkedin.com/in/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0078D4' }}
  >
    <FaLinkedin size={40} />
  </a>
  <a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: '#0078D4' }}
  className="text-blue-500" > 
  <FaRegFileAlt size={40} /> </a>
</div>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}
export default Intro;