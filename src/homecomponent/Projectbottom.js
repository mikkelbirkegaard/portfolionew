import { useEffect, useState } from "react";
import Projektbuttompost from "./Projectbottompost";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/project?_embed&v=99999"
      );
      const data = await result.json();
      console.log(data);
      setProjects(data);
    }

    getProject();
  }, []);

  return (
    <section className="cards-project">
      {projects.map((project) => (
        <Projektbuttompost key={project.id} post={project} />
      ))}
    </section>
  );
}
