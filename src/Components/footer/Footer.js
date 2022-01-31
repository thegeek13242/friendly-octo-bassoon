import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="query-follow">
          <div className="query">
            <h2>Technical Support</h2>
            <div className="email-id">
              <a id="email" href="mailto:bt20cse214@iiitn.ac.in">
                <p>bt20cse214@iiitn.ac.in Aviral Verma</p>
              </a>

              <a id="email" href="mailto:bt20cse209@iiitn.ac.in">
                <p>bt20cse209@iiitn.ac.in Kshitij Agarkar</p>
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy;Copyright 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
