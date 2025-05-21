import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".experience-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full max-w-7xl px-5 md:px-10">
        <TitleHeader
          title="Education & Professional Journey"
          sub="📚 My Learning Path & Work Experience"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-blue-400" size={28} />
              <span>Education Background</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expCards.slice(0, 2).map((card, index) => (
                <div
                  key={`edu-${index}`}
                  className="experience-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <FaGraduationCap className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <p className="text-gray-400 mt-1 flex items-center gap-2">
                        <span>🗓️</span>
                        {card.date}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {card.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:col-span-2 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <FaBriefcase className="text-purple-400" size={28} />
              <span>Professional Experience</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expCards.slice(2, 4).map((card, index) => (
                <div
                  key={`exp-${index}`}
                  className="experience-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      {card.title.includes("Intern") ? (
                        <FaLaptopCode className="text-purple-400" size={20} />
                      ) : (
                        <FaBriefcase className="text-purple-400" size={20} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {card.title}
                        {card.institution && (
                          <span className="block text-sm text-gray-400 mt-1">
                            {card.institution}
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-400 mt-1 flex items-center gap-2">
                        <span>🗓️</span>
                        {card.date}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {card.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
