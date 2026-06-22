import { ProjectCard } from "../../components/sub/project-card";
import { PROJECTS } from "../../constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="text-center mb-16">
        <h1 className="section-title font-semibold text-white">
          My Projects
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base">
          A selection of applications and systems that showcase modern UI,
          cross-platform architecture, and production-ready backend workflows.
        </p>
      </div>
      <div className="w-full grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
