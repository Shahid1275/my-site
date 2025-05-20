import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeaturesSection = () => (
  <section
    id="features"
    className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <TitleHeader
        title="Client Testimonials & Impact"
        sub="🌟 Valued Feedback from Collaborators"
        center
      />

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {abilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-8 flex flex-col gap-5 bg-gray-900 border border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Icon container with gradient border effect */}
              <div className="relative size-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="size-14 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-gray-850 transition-all z-10">
                  <img
                    src={imgPath}
                    alt={title}
                    className="object-contain w-8 h-8"
                  />
                </div>
              </div>

              <h3 className="text-white text-xl font-semibold mt-2">{title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{desc}</p>

              {/* Hover effect indicator */}
              <div className="absolute bottom-6 left-8 h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
