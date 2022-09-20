import Backgroundimage from "../assets/bg-grain.png";
import Roundcircle from "../assets/roundcircle.png";
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

export default function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "http://portfoliowp.mbcproduction.dk/wp-json/wp/v2/posts?_embed"
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
        <div className="circle-holder">
          <img
            className="roundcircle"
            src={Roundcircle}
            alt="Blå rund cirkel"
          />
        </div>
      </div>
    </section>
  );
}
