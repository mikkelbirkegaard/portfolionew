import { useEffect, useState } from "react";
import Aboutmepost from "./Aboutmetext";

export default function Aboutme() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/aboutme?_embed&v=99999"
      );
      const data = await result.json();
      console.log(data);
      setProjects(data);
    }

    getProject();
  }, []);

  return (
    <section className="landing-page">
      {projects.map((project) => (
        <Aboutmepost key={project.id} post={project} />
      ))}
    </section>
  );
}
