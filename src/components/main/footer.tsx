import { FOOTER_DATA } from "../../constants";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-[#040615] border-t border-white/10 text-gray-200 py-10"
      id="contact"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col gap-3">
          <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">
            Let&apos;s connect
          </div>
          <div className="text-3xl font-semibold text-white">
            Ready to build something great together?
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FOOTER_DATA.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-semibold text-white text-lg">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <a
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span className="text-sm">{name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
