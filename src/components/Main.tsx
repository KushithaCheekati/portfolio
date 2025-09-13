import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import Profilepic from "../assets/images/Profile/Kushi_Pic2.png";
import PersonIcon from "@mui/icons-material/Person";
import DownloadIcon from "@mui/icons-material/Download";

const Main: React.FC = () => {
  return (
    <div className="about-section">
      {/* Left Side Content */}
      <div className="content">
        <div className="social_icons">
          <a
            href="https://github.com/KushithaCheekati"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kushitha-cheekati"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

          <div className="hero-text">
            <p className="line-1">Hello,</p>
            <p className="line-2">
              This is <span className="gradient-text">Kushitha Cheekati</span>, I'm a
            </p>
            <p className="line-3">
              Professional <span className="highlight">Data Engineer</span>
            </p>
          </div>
 {/* New Buttons Section */}
          <div className="hero-buttons">
              <a href="#contact" className="btn btn-outline">
                  Contact Me <PersonIcon />
              </a>
              <a href="https://drive.google.com/file/d/1ZixzfOLUqUe7xRxD7kyS3X1uGv0WJQ6H/view?usp=sharing" className="btn btn-gradient" target="_blank" rel="noopener noreferrer">
                  Get Resume <DownloadIcon />
              </a>
          </div>

        <div className="mobile_social_icons">
          <a
            href="https://github.com/KushithaCheekati"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kushitha-cheekati"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="image-wrapper">
        <img src={Profilepic} alt="Avatar" />
      </div>
    </div>
  );
};

export default Main;
