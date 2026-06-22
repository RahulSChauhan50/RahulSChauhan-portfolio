import githubProfile from "../../assets/github-profile.jpg";

import { NAV_LINKS, SOCIALS } from "../../constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[76px] fixed top-0 shadow-[0_20px_80px_rgba(0,0,0,0.32)] bg-[#060717c2] backdrop-blur-xl z-50 px-5 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between mx-auto max-w-[1440px] px-3">
        <a
          href="https://github.com/RahulSChauhan50"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-3"
        >
          <img
            src={githubProfile}
            alt="Logo"
            width={42}
            height={42}
            draggable={false}
            className="cursor-pointer rounded-full border border-white/10 shadow-lg shadow-[#4b3cea]/20"
          />
          <div className="font-semibold text-sm md:text-base text-gray-100">
            Rahul Singh Chauhan
          </div>
        </a>

        <div className="hidden xl:flex items-center justify-between gap-6 bg-[#090c1b] border border-white/10 rounded-full py-3 px-5 text-sm text-gray-200 shadow-[0_18px_50px_rgba(24,26,73,0.24)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.link}
              className="cursor-pointer transition hover:text-cyan-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex flex-row gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="rounded-full bg-white/5 p-2 transition hover:bg-white/15"
            >
              <Icon className="h-5 w-5 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
