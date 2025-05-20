import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiPostgresql,
} from "react-icons/si";
import TitleHeader from "../components/TitleHeader";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      Icon: FaReact,
      color: "text-[#61DAFB]",
      bg: "bg-[#61DAFB]/10",
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      color: "text-black dark:text-white",
      bg: "bg-black/10 dark:bg-white/10",
    },
    {
      name: "Node.js",
      Icon: FaNodeJs,
      color: "text-[#68A063]",
      bg: "bg-[#68A063]/10",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "text-[#3178C6]",
      bg: "bg-[#3178C6]/10",
    },
    {
      name: "JavaScript",
      Icon: SiJavascript,
      color: "text-[#F7DF1E]",
      bg: "bg-[#F7DF1E]/10",
    },
    {
      name: "MongoDB",
      Icon: SiMongodb,
      color: "text-[#47A248]",
      bg: "bg-[#47A248]/10",
    },
    {
      name: "Express",
      Icon: SiExpress,
      color: "text-black dark:text-white",
      bg: "bg-black/10 dark:bg-white/10",
    },
    {
      name: "PostgreSQL",
      Icon: SiPostgresql,
      color: "text-[#4169E1]",
      bg: "bg-[#4169E1]/10",
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      color: "text-[#38B2AC]",
      bg: "bg-[#38B2AC]/10",
    },
    {
      name: "Git",
      Icon: FaGitAlt,
      color: "text-[#F05032]",
      bg: "bg-[#F05032]/10",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <TitleHeader
            title="How I Can Contribute & My Key Skills"
            sub="🤝 What I Bring to the Table"
          />
        </div>
        <div className="flex flex-col items-center gap-12">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {technologies.slice(0, 5).map((tech, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div
                  className={`
                  ${tech.bg}
                  w-24 h-24 rounded-full flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-${
                    tech.color.split("text-")[1].split("]")[0]
                  }/50
                  group-hover:rotate-6 group-hover:bg-${
                    tech.color.split("text-")[1].split("]")[0]
                  }/20
                  border border-gray-200 dark:border-gray-700
                `}
                >
                  <tech.Icon
                    className={`${tech.color} text-3xl transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12`}
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-${tech.color.split('text-')[1].split(']')[0]} transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {technologies.slice(5, 10).map((tech, index) => (
              <div key={index + 5} className="group flex flex-col items-center">
                <div
                  className={`
                  ${tech.bg}
                  w-24 h-24 rounded-full flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-${
                    tech.color.split("text-")[1].split("]")[0]
                  }/50
                  group-hover:rotate-6 group-hover:bg-${
                    tech.color.split("text-")[1].split("]")[0]
                  }/20
                  border border-gray-200 dark:border-gray-700
                `}
                >
                  <tech.Icon
                    className={`${tech.color} text-3xl transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12`}
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-${tech.color.split('text-')[1].split(']')[0]} transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
