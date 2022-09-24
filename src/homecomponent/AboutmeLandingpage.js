import { useEffect, useState } from "react";
import Aboutteaserpost from "./AboutpostLandingpage";

export default function Aboutmeteaser() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/aboutteaser?_embed&v=99999"
      );
      const data = await result.json();
      console.log(data);
      setProjects(data);
    }

    getProject();
  }, []);

  return (
    <section className="overallcards">
      {projects.map((project) => (
        <Aboutteaserpost key={project.id} post={project} />
      ))}
    </section>
  );
}
