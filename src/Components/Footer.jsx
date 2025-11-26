// styles
import classes from "../Styles/Module/Footer.module.css";
// components
import Menu from "./Menu";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// object for links
const QL = ["Home", "About", "Contact", "Sign Up"];
const CT = [
  "LifeStyle",
  "Productivity",
  "Travel",
  "Mindfulness",
  "Tech & Design",
];

// main
function Footer() {
  return (
    <div className={classes.Container}>
      {/* Logo */}
      <div>
        <h1>StoryGrid</h1>
        <p>
          A simple, clean and modern personal blogging platform to share
          stories, ideas, and creativity.
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/mrdodo0" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mashrafi.devs" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/mashrafimahin" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      {/* Quick Links */}
      <div>
        <Menu title="Quick Links" listObj={QL} />
      </div>
      {/* Categories */}
      <div>
        <Menu title="Categories" listObj={CT} />
      </div>
      {/* Newsletter */}
      <div>
        <h1>Newsletter</h1>
        <p>Subscribe to get the latest posts directly into your inbox.</p>
        <div className={classes.newsletter}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
      {/* Copyrights  */}
      <div>
        &copy;{new Date().getFullYear()}, All rights reserved. Architect by
        &nbsp;
        <a href="https://mahiin.netlify.app" target="_blank">
          Mahin
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
