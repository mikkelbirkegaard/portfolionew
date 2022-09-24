import "../css/App.css";

export default function Recommendationpost({ post }) {
  return (
    <section className="dededed">
      <div className="recomendationcard-over">
        <div className="logo-reco">
          {post.acf.logo ? (
            <img className="companylogo" src={post.acf.logo.url} />
          ) : (
            <p>Billedet kan ikke vises</p>
          )}
        </div>
        <div className="text-reco">
          <p className="persontext">{post.acf.textmain}</p>
        </div>
        <div className="img-text-reco">
          {post.acf.personimage ? (
            <img className="companyperson" src={post.acf.personimage.url} />
          ) : (
            <p>Billedet kan ikke vises</p>
          )}
          <div className="person-title-reco">
            <p className="navn-reco">{post.acf.navnperson}</p>
            <p className="titel-reco">{post.acf.titelperson}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
