import "../App.css";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <article>
      <div className="over-frontpage-objects">
        <div className="over-frontpage-text">
          <h3> {post.acf.education}</h3>
          <p className="locationtext"> {post.acf?.location}</p>
          <Link to="/about">
            <button className="aboutme-btn">Om mig</button>
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
