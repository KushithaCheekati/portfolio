import React from "react";
import "../assets/styles/About.scss";

const About: React.FC = () => {
  return (
    <div id="about" className="about-page">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-summary">
          I’m <strong>Kushitha Cheekati</strong>, a Data Engineer with 3+ years of experience in building scalable ETL pipelines, developing fraud detection frameworks, and working with large datasets across financial, healthcare, and communication domains. I have a strong background in designing end-to-end data solutions, integrating cloud-based platforms, and applying machine learning techniques to solve real-world challenges like fraud detection and customer insights. I completed my Master’s in Information Technology from the University of Wisconsin–Milwaukee, which strengthened my foundation in machine learning, big data, and information security. Passionate about turning raw data into actionable intelligence, I thrive on solving complex data problems and delivering reliable, high-impact solutions that drive business decisions.</p>
      </div>
    </div>
  );
};

export default About;
