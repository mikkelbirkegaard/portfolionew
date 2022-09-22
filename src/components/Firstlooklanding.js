import Backgroundimage from "../assets/bg-grain.jpg";
import Roundcircle from "../assets/roundcircle.png";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function Firstlookonpage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/posts?_embed&v=99999"
      );
      const data = await result.json();
      console.log(data);
      setProjects(data);
    }

    getProject();
  }, []);

  return (
    <section className="landing-page">
      <section className="first-home">
        <div>
          <div className="position-over-heading">
            <p className="over-heading">MIKKEL CHRISTIANSEN</p>
          </div>
          <h1 className="heading">MIKKEL CHRISTIANSEN</h1>
        </div>
        {projects.map((project) => (
          <PostItem key={project.id} post={project} />
        ))}
      </section>
      <div className="bg-holder">
        <img
          className="bgimage"
          src={Backgroundimage}
          alt="Baggrundsbillede med grain"
        />
        <img className="roundcircle" src={Roundcircle} alt="Blå rund cirkel" />
      </div>
    </section>
  );
}
