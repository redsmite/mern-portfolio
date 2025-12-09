import React from "react";
import "./Skills.css";

const Skills = () => {
  const webSkills = ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript", "HTML", "CSS", "MySQL", "PHP"];
  const networkingSkills = ["CCNA Certified", "Routing & Switching", "Network Troubleshooting", "LAN/WAN Management", "Cybersecurity"];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      {/* Web Development Skills */}
      <div className="web-skills">
        <h3>Web Development</h3>
        <ul>
          {webSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Networking Skills */}
      <div className="networking-skills">
        <h3>Networking</h3>
        <ul>
          {networkingSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
