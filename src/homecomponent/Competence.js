import { useEffect, useState } from "react";
import CompetencePost from "./CompetencePost";
import React from "react";

export default function Competence() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProject() {
      const result = await fetch(
        "https://nyestewp.mbcproduction.dk/wp-json/wp/v2/kompetencer?_embed&v=99999"
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
        <CompetencePost key={project.id} post={project} />
      ))}
    </section>
  );
}
