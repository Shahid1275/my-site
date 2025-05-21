import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    // Animate hero text
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    // Animate paragraph
    gsap.fromTo(
      ".hero-description",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.inOut" }
    );
    // Animate button
    gsap.fromTo(
      ".hero-button",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" }
    );
    // Animate image
    gsap.fromTo(
      ".hero-image",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
  });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
          onError={() => console.error("Failed to load background image")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
      </div>

      {/* Hero Layout */}
      <div className="hero-layout relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* LEFT: Hero Content */}
        <header className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <div className="hero-text">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Shaping
              <span className="slide inline-block ml-2">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-1 rounded-full bg-white/10 border border-white/20"
                      />
                      <span className="text-white">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              into Real Projects
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              that Deliver Results
            </h1>
          </div>

          <p className="hero-description text-white/80 text-base sm:text-lg lg:text-xl max-w-md">
            Hi 👋, I’m SHAHID, a developer based in Pakistan with a passion for
            crafting innovative solutions through code.
          </p>

          <Button
            text="see My Work"
            className="hero-button w-58 sm:w-60 h-12 sm:h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
            id="counter"
          />
        </header>

        {/* RIGHT: Developer Image */}
        <figure className="w-full lg:w-1/2 order-1 lg:order-2 mt-8 lg:mt-0">
          <div className="relative flex justify-center items-center">
            <img
              src="/images/developer.png"
              alt="Professional developer working at a modern workspace"
              className="hero-image w-full max-w-lg lg:max-w-xl mb-4 h-auto max-h-[550px] object-cover rounded-2xl shadow-2xl border border-white/10 transform transition-transform duration-500 hover:scale-105"
              onError={() => console.error("Failed to load developer image")}
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </figure>
      </div>

      {/* Animated Counter */}
      <div className="relative z-10">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
