import Backgroundimage from "../assets/bg-grain.jpg";
import Roundcirclefull from "../assets/roundcirclefull.png";
import Mailblack from "../assets/blackmail.png";
import Phoneblack from "../assets/blackphone.png";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  MoveOut,
} from "react-scroll-motion";

export default function ContactPage() {
  return (
    <section className="landing-page">
      <ScrollContainer>
        <ScrollPage page={0}>
          <section className="first-home">
            <div>
              <div className="position-over-heading">
                <Animator animation={MoveOut(-1000, 0)}>
                  <p className="over-heading oh-contact">Kontakt</p>
                </Animator>
              </div>
              <Animator animation={MoveOut(1000, 0)}>
                <h1 className="heading contact-heading">Kontakt</h1>
              </Animator>
            </div>
            <div className="overcircle-text">
              <p>
                Kontakt mig allerede i dag <br /> og få en snak om hvad jeg kan
                tilbyde jer
              </p>
              <img
                className="roundcirclefull"
                src={Roundcirclefull}
                alt="Blå rund cirkel"
              />
            </div>
            <div className="overcontact-card">
              <div className="contact-card">
                <div className="mail-card">
                  <img
                    className="contacticons-contact"
                    src={Mailblack}
                    alt="mail ikon"
                  />
                  <button
                    className="mailbtn-contact"
                    onClick={() =>
                      (window.location = "mailto:mikkel-mc@hotmail.com")
                    }
                  >
                    mikkel-mc@hotmail.com
                  </button>
                </div>
                <div className="phone-card">
                  <img
                    className="contacticons-contact"
                    src={Phoneblack}
                    alt="mail ikon"
                  />
                  <a className="phonenumber-contact" href="tel:+4530561576">
                    30 56 15 76
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollPage>
      </ScrollContainer>
      <div className="bg-holder">
        <img
          className="bgimage"
          src={Backgroundimage}
          alt="Baggrundsbillede med grain"
        />
      </div>
    </section>
  );
}
