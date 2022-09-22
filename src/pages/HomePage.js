import Firstlookonpage from "../components/Firstlooklanding";
import Competence from "../components/Competence";
import "../App.css";

export default function HomePage() {
  return (
    <>
      <Firstlookonpage />
      <div className="position-over-heading">
        <p className="over-heading">Kompetencer</p>
      </div>
      <h1 className="heading">Kompetencer</h1>
      <Competence />
    </>
  );
}
