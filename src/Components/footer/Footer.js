import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as FacebookIcon } from "./assets/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/social/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./assets/social/linkedin.svg";
import { ReactComponent as DiscordIcon} from "./assets/social/discord.svg"
import { ReactComponent as YoutubeIcon} from "./assets/social/youtube.svg"


const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="query-follow">
          <div className="query">
            <h2>For Queries Contact</h2>
            <HashLink smooth to="/about#team">
              <p>
                Event Co-ordinators
              </p>
            </HashLink>
            <a href="mailto:tantrafiesta@iiitn.ac.in">
              <p>tantrafiesta@iiitn.ac.in</p>
            </a>
          </div>
          <div className="follow">
            <h2>Join us on</h2>
            <div className="icons">
              <a
                href=" https://www.instagram.com/tantrafiesta/"
                target="_blank"
              >
                <InstagramIcon></InstagramIcon>
              </a>
              <a
                href="https://business.facebook.com/iiitntantra/"
                target="_blank"
              >
                <FacebookIcon></FacebookIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/tantrafiesta-iiit-nagpur-53578b222/"
                target="_blank"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a href="https://discord.gg/4zWEYA5VZv" target="_blank">
                <DiscordIcon></DiscordIcon>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q/featured"
                target="_blank"
              >
                <YoutubeIcon></YoutubeIcon>
              </a>
            </div>
            <p>Connect with us here</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
