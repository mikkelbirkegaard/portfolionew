import { useEffect, useState } from "react";
import Choosemepost from "./Choosemepost";

export default function Chooseme() {
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
        <Choosemepost key={project.id} post={project} />
      ))}
    </section>
  );
}
