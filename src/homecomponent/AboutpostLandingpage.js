import "../css/App.css";
import { Link } from "react-router-dom";
import Spinnintext from "../assets/laesmere.png";

export default function PostItem({ post }) {
  return (
    <section>
      <div className="over-aboutteaser">
        <div className="over-img-text">
          <div className="over-img-btn">
            {post.acf.portimage ? (
              <img className="portrait-image" src={post.acf.portimage.url} />
            ) : (
              <p>Billedet kan ikke vises</p>
            )}
            <Link to="/about">
              <button className="aboutme-btn rightmarg bigscreenremove">
                Om mig
              </button>
            </Link>
          </div>
          <div className="over-button-textbox">
            <div className="text-box">
              <p className="textcitat">{post.acf.textcitat}</p>
              <div className="spinicon-signatur">
                {post.acf.signatur ? (
                  <img className="signatur-image" src={post.acf.signatur.url} />
                ) : (
                  <p>Billedet kan ikke vises</p>
                )}
                <Link to="/about">
                  <img className="spintext" src={Spinnintext} alt="Læs mere" />
                </Link>
              </div>
            </div>
            <Link to="/about">
              <button className="aboutme-btn rightmarg removesmallscreen">
                Om mig
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
