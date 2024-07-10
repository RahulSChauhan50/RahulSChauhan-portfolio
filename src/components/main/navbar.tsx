import githubProfile from "../../assets/github-profile.jpg";

import { NAV_LINKS, SOCIALS } from "../../constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://github.com/RahulSChauhan50"
          target="_blank"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src={githubProfile}
            alt="Logo"
            width={40}
            height={40}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin rounded-full"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Rahul Singh Chauhan
          </div>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <a href={link} target="_blank" rel="noreferrer noopener" key={name}>
              <Icon className="h-6 w-6 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
