import "../css/App.css";

export default function Aboutmepost({ post }) {
  return (
    <section>
      <div className="over-all-aboutpost">
        <div className="over-text">
          <h1 className="heading-about">{post.acf.overskriften}</h1>
          <p className="about-underoverskrift"> {post.acf.underoverskriften}</p>
          <div className="overskrift-about"></div>
          <div className="image-portrait-about-mobile">
            {post.acf.portraitimgofme ? (
              <img
                className="imgportrait-mobile"
                src={post.acf.portraitimgofme.url}
              />
            ) : (
              <p>Billedet kan ikke vises</p>
            )}
          </div>
          <div className="main-text">
            <p className="reco-maintext margin-text"> {post.acf.maintext}</p>
          </div>
        </div>
        <div className="image-portrait-about">
          {post.acf.portraitimgofme ? (
            <img className="imgportrait" src={post.acf.portraitimgofme.url} />
          ) : (
            <p>Billedet kan ikke vises</p>
          )}
        </div>
      </div>
    </section>
  );
}
