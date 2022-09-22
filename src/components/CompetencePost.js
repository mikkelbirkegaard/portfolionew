import "../App.css";

export default function PostItem({ post }) {
  let image = "https://cederdorff.github.io/img/logo512.webp";

  if (post._embedded && post._embedded["wp:featuredmedia"]) {
    image = post._embedded["wp:featuredmedia"][0].source_url;
  }

  return (
    <section id="scrollto">
      <div className="over-kompetence">
        <div className="kompetence-text-icon">
          <h4 className="margin-header">{post.acf.kompetencen}</h4>
          {post.acf.icons ? (
            <img className="kompetence-icon" src={post.acf.icons.url} />
          ) : (
            <p>Billedet kan ikke vises</p>
          )}
        </div>

        <p className="brodtext">{post.acf.brodtext}</p>

        <div className="kompetence-brodtext-icon">
          {post.acf.programicons ? (
            <img
              className="kompetence-program"
              src={post.acf.programicons.url}
            />
          ) : (
            <p>Billedet kan ikke vises</p>
          )}
        </div>
      </div>
    </section>
  );
}
