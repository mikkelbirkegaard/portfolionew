import "../css/Footer.css";
import Whitelogo from "../assets/hvidtlogo.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Halfcircle from "../assets/halvcirkel.png";
import Whiteinsta from "../assets/hvidtinsta.png";
import Whitegithub from "../assets/hvidtgithub.png";
import Whitelinkedin from "../assets/hvidtlinkedin.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer>
      <div className="whitebox-footer"></div>
      <div className="footer-overall">
        <div className="footer-logo-text">
          <Link to="/#forside" offset={50} duration={500}>
            <img
              className="logo"
              src={Whitelogo}
              alt="Mikkel Portfolio logo i hvidt"
            />
          </Link>
          <p className="codingweb">
            This portfolio is coded by mikkel in React
          </p>
        </div>
        <div className="footer-links-contact">
          <div className="footer-links">
            <ul>
              <div className="around-footer-links">
                <Link
                  to="/#scrollto"
                  offset={50}
                  duration={500}
                  className="projects-footer"
                >
                  <li className="liststyle">Projekter</li>
                </Link>
                <Link to="/about" className="about-footer">
                  <li className="liststyle">Om Mig</li>
                </Link>

                <Link to="/contact" className="contact-footer">
                  <li className="liststyle">Kontakt</li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="footer-cantact-socials">
            <div className="footer-contact">
              <div className="mail-info">
                <img
                  className="contacticons-footer"
                  src={Mail}
                  alt="mail ikon"
                />
                <button
                  className="mailbtn-footer"
                  onClick={() =>
                    (window.location = "mailto:mikkel-mc@hotmail.com")
                  }
                >
                  mikkel-mc@hotmail.com
                </button>
              </div>
              <div className="mobile-info">
                <img
                  className="contacticons-footer"
                  src={Phone}
                  alt="mail ikon"
                />
                <a className="phonenumber-footer" href="tel:+4530561576">
                  30 56 15 76
                </a>
              </div>
            </div>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/mikkel-b-973913128/">
                <img
                  className="socialsicon-footer "
                  src={Whitelinkedin}
                  alt="Linkedin"
                />
              </a>
              <a href="https://github.com/mikkelbirkegaard">
                <img
                  className="socialsicon-footer"
                  src={Whitegithub}
                  alt="Github"
                />
              </a>
              <a href="https://www.instagram.com/mikkelbirkegaard/">
                <img
                  className="socialsicon-footer"
                  src={Whiteinsta}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-circle">
          <img src={Halfcircle} alt="Halvcirkel" />
        </div>
      </div>
    </footer>
  );
}
