type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="project-card relative overflow-hidden rounded-[32px] border border-white/10 bg-[#060717]"
    >
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover max-h-[280px]"
      />

      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm text-gray-300 leading-7 max-h-[180px] overflow-hidden">
          {description}
        </p>
      </div>
    </a>
  );
};
