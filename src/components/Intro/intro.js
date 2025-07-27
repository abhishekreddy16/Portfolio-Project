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
    href="https://github.com/abhishekreddy16"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0078D4' }}
  >
    <Github size={40} />
  </a>

  <a
    href="https://www.linkedin.com/in/kundan-mutyala-222b0226a"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0078D4' }}
  >
    <FaLinkedin size={40} />
  </a>
  <a
    href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:69053bfb-ceac-49b7-aa5b-2f59c20857ed"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0078D4' }}
    className="text-blue-500"
  >
    <FaRegFileAlt size={40} /> </a>
</div>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}
export default Intro;