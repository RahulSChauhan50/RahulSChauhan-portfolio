import { ProjectCard } from "../../components/sub/project-card";
import { BLOGS } from "../../constants";

export const Blogs = () => {
  return (
    <section
      id="article"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="text-center mb-16">
        <h1 className="section-title font-semibold text-white">
          My Articles
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base">
          Technical writing that explains deployment workflows, React
          optimization, and intelligent app architecture.
        </p>
      </div>
      <div className="w-full grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {BLOGS.map((project) => (
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
