import Firstlookonpage from "../homecomponent/Firstlooklanding";
import Competence from "../homecomponent/Competence";
import Aboutmeteaser from "../homecomponent/AboutmeLandingpage";
import Projects from "../homecomponent/Projectbottom";
import "../css/App.css";

export default function HomePage() {
  return (
    <>
      <Firstlookonpage />
      <div className="position-over-heading">
        <p className="over-heading">Kompetencer</p>
      </div>
      <h1 className="heading">Kompetencer</h1>
      <Competence />
      <div className="overheadandsubhead">
        <div className="position-over-heading">
          <p className="over-heading">Projekter</p>
        </div>
      </div>
      <h1 className="heading">Projekter</h1>
      <Projects />
      <div className="overheadandsubhead">
        <div className="position-over-heading">
          <p className="over-heading">Om mig</p>
        </div>
      </div>
      <h1 className="heading marginommig">Om mig</h1>
      <Aboutmeteaser />
    </>
  );
}
