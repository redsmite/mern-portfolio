import React from "react";
import profilePic from "../assets/profile.jpg"; 
import gifSignature from "../assets/signature.gif"; 
import "./Hero.css";

const Hero = () => {
  const projects = [
    { name: "Subnet Exercise", link: "https://subnet-exercise.web.app/", description: "A web app for subnetting exercises" },
    { name: "CSC Reviewer", link: "https://csc-reviewer-ph.web.app/", description: "A reviewer app for CSC exams" },
    { name: "Water Rights Permit", link: "https://water-rights-permit.web.app/", description: "A water rights permit management system" },
    { name: "WRUS Asset Tracking System", link: "https://wrus-asset-tracking-system.web.app/", description: "Asset tracking system for WRUS" },
  ];

  return (
    <section className="hero-section" style={{ 
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" 
    }}>
      <img src={profilePic} alt="Kym Carabeo" className="hero-profile" />

      <div className="hero-title">
        <h1>Hi, I'm Kym Carabeo</h1>
        <p>Full Stack Developer | MERN Stack | Web Portfolio</p>
      </div>

      <a 
        href="https://github.com/redsmite"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        Visit My GitHub
      </a>

      <div className="projects-container">
        <h3>My Projects (Live Links)</h3>
        <ul>
          {projects.map(project => (
            <li key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="email-signature">
        <p className="name">Kym Carabeo</p>
        <p className="title">Full Stack Developer | CCNA Certified</p>
        <p>Email: <a href="mailto:denrncrkvcarabeo@gmail.com">denrncrkvcarabeo@gmail.com</a></p>
        <p>DENR NCR – Land Management Inspector</p>
        <img src={gifSignature} alt="Email Signature GIF" />
      </div>
    </section>
  );
};

export default Hero;
