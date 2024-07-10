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
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-96"
    >
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain p-10 max-h-[300px] overflow-hidden"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 max-h-[200px] overflow-scroll">
          {description}
        </p>
      </div>
    </a>
  );
};
