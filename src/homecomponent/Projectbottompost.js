import { useState } from "react";
import "../css/App.css";
import Crosstoggle from "../assets/crosstoggle.png";

export default function Projektbuttom({ post }) {
  const [show, setShow] = useState(false);

  return (
    <section>
      {show && (
        <div className="projectmodal">
          <div className="overall-project">
            <div className="overclosebutton">
              <button
                className="crossclose-icon"
                onClick={() => setShow(!show)}
              >
                <img
                  className="cross-project"
                  src={Crosstoggle}
                  alt="Instagram"
                />
              </button>
            </div>
            <div className="overmodal">
              <div className="overtext-modal">
                <div className="overtext-notbtn">
                  <div className="modal-title">
                    <h3 className="reco-heading head-color">
                      {post.acf.overskriften}
                    </h3>
                  </div>
                  <div className="modal-group">
                    <p className="text-project-type">{post.acf.projekttype}</p>
                  </div>
                  <div className="modal-karakter">
                    <p className="text-karekter">{post.acf.karakter}</p>
                  </div>
                  <div className="modal-maintext">
                    <p className="brodtext-projekter">{post.acf.brodtext}</p>
                  </div>
                </div>
                <div className="aroundliveversionbtn">
                  <a
                    href={post.acf?.websitebutton?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="aboutme-btn"> Se live version</button>
                  </a>
                </div>
              </div>
              <div className="images-project">
                {post.acf.imgprojekt1 ? (
                  <img
                    className="showprojectimg"
                    src={post.acf.imgprojekt1.url}
                    alt="Skærmbillede af hjemmeside"
                  />
                ) : (
                  <p>Billedet kan ikke vises</p>
                )}
                {post.acf.imgprojekt2 ? (
                  <img
                    className="showprojectimg"
                    src={post.acf.imgprojekt2.url}
                    alt="Skærmbillede af hjemmeside"
                  />
                ) : (
                  <p>Billedet kan ikke vises</p>
                )}
                {post.acf.imgprojekt3 ? (
                  <img
                    className="showprojectimg"
                    src={post.acf.imgprojekt3.url}
                    alt="Skærmbillede af hjemmeside"
                  />
                ) : (
                  <p>Billedet kan ikke vises</p>
                )}
              </div>
            </div>
          </div>

          <div onClick={() => setShow(!show)} className="closemodal"></div>
        </div>
      )}
      <button
        className="btn-project"
        type="button"
        onClick={() => setShow(!show)}
      >
        <div className="overlay-project">
          <p className="overlay-text">Mere om projektet</p>
        </div>
        {post.acf.billedeknap ? (
          <img
            className="project-info-image"
            src={post.acf.billedeknap.url}
            alt="Projektbillede"
          />
        ) : (
          <p>Billedet kan ikke vises</p>
        )}

        <div className="text"></div>
      </button>
    </section>
  );
}
