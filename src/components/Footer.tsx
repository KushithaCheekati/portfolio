import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/KushithaCheekati"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/kushitha-cheekati"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Kushitha Cheekati. All Rights Reserved.
      </p>

      <p className="footer-credit">
        Designed & built with 💜 by{" "}
        <a
          href="https://www.linkedin.com/in/kushitha-cheekati"
          target="_blank"
          rel="noreferrer"
        >
          Kushitha Cheekati
        </a>
      </p>
    </footer>
  );
}

export default Footer;
