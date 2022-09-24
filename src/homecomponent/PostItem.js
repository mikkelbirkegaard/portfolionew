import "../css/App.css";
import { Link } from "react-router-dom";
import Bluearrow from "../assets/bluearrow.png";
import Whitearrow from "../assets/whitearrow.png";

export default function PostItem({ post }) {
  return (
    <article>
      <div className="over-frontpage-objects">
        <div className="over-frontpage-text">
          <h3 className="blue-landing-text"> {post.acf.education}</h3>
          <p className="locationtext"> {post.acf?.location}</p>
          <Link to="/about">
            <button className="landingbtn">
              Om mig
              <img className="blue-arrow" src={Bluearrow} alt="Blå pil" />
              <img className="white-arrow" src={Whitearrow} alt="Blå pil" />
            </button>
          </Link>
        </div>
        {post.acf.imageofme ? (
          <img className="imageofmikkel" src={post.acf.imageofme.url} />
        ) : (
          <p>Billedet kan ikke vises</p>
        )}
      </div>
    </article>
  );
}
