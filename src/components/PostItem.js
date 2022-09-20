import "../App.css";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  let image = "https://cederdorff.github.io/img/logo512.webp";

  if (post._embedded && post._embedded["wp:featuredmedia"]) {
    image = post._embedded["wp:featuredmedia"][0].source_url;
  }

  return (
    <article>
      <div className="over-frontpage-objects">
        <div className="over-frontpage-text">
          <p> {post.acf.education}</p>
          <p> {post.acf.location}</p>
          <Link to="/about">
            <button>Om mig</button>
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
