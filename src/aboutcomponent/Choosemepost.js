import "../css/App.css";
import Recommendation from "./Recommendation";

export default function Choosemepost({ post }) {
  return (
    <article>
      <div className="section-choose-reco">
        <div className="chooseme">
          <h3 className="reco-heading">{post.acf.newoverskrift}</h3>
          <p className="reco-maintext">{post.acf.newmaintext}</p>
        </div>
        <Recommendation />
      </div>
    </article>
  );
}
