import Firstlookonpage from "../homecomponent/Firstlooklanding";
import Competence from "../homecomponent/Competence";
import Aboutmeteaser from "../homecomponent/AboutmeLandingpage";
import Projects from "../homecomponent/Projectbottom";
import "../css/App.css";
import React from "react";
// import { createRoot } from "react-dom/client";

// function FadeInContent(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = createRoot.useRef();
//   createRoot.useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

export default function HomePage() {
  return (
    <>
      <Firstlookonpage />
      <div className="position-over-heading">
        <p className="over-heading">Kompetencer</p>
      </div>
      <h2 className="heading">Kompetencer</h2>
      <p className="under-heading">
        Nedenstående viser mine kernekompetencer, og hvad jeg blandt andet kan
        tilbyde jeres virksomhed
      </p>
      <Competence />
      <div className="overheadandsubhead">
        <div className="position-over-heading">
          <p id="scrollto" className="over-heading">
            Projekter
          </p>
        </div>
      </div>
      <h2 className="heading">Projekter</h2>
      <p className="under-heading">
        Nedenstående viser nogle af de skoleprojekter jeg har lavet på 1. og 2.
        semester
      </p>
      <Projects />
      <div className="overheadandsubhead">
        <div className="position-over-heading">
          <p className="over-heading">Om mig</p>
        </div>
      </div>
      <h2 className="heading marginommig">Om mig</h2>
      <Aboutmeteaser />
    </>
  );
}

// const rootElement = document.getElementById("root");
// createRoot.render(<HomePage />, rootElement);
