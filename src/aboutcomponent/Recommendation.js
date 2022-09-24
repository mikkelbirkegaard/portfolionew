import { useEffect, useState } from "react";
import Recommendationpost from "./Recommendationdata";

export default function Recommendation() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/anbefalinger?_embed&v=99999"
      );
      const data = await result.json();
      console.log(data);
      setProjects(data);
    }

    getProject();
  }, []);

  return (
    <section className="section-reco">
      {projects.map((project) => (
        <Recommendationpost key={project.id} post={project} />
      ))}
    </section>
  );
}
