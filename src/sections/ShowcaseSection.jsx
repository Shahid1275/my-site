import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const refs = {
    rydeRef: useRef(null),
    libraryRef: useRef(null),
    ycDirectoryRef: useRef(null),
    project4Ref: useRef(null),
    project5Ref: useRef(null),
    project6Ref: useRef(null),
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animations for each app showcase
    Object.values(refs).forEach((card, index) => {
      if (card.current) {
        gsap.fromTo(
          card.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card.current,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  // Project-specific data
  const projects = [
    {
      ref: refs.rydeRef,
      title: "oladoc - Doctors Appointment Booking System",
      githubUrl: "https://github.com/Shahid1275/appointment-system",
      image: "/images/project1.png",
      alt: "oladoc App Interface",
      bgColor: "bg-white",
      tech: [
        "React.js",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "Stripe.js",
        "Redux Toolkit",
      ],
    },
    {
      ref: refs.libraryRef,
      title: "Hotel Booking management system",
      githubUrl: "https://github.com/Shahid1275/Hotel-booking-system",
      image: "/images/project6.png",
      alt: "Node-Farm API",
      bgColor: "bg-[#FFEFDB]",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "REST API",
        "Clerk",
        "stripe",
        "mongodb",
      ],
    },
    {
      ref: refs.ycDirectoryRef,
      title: "Secure Auth - Real Auth System",
      githubUrl: "https://github.com/Shahid1275/real-auth-system",
      image: "/images/project3.png",
      alt: "Secure Auth App",
      bgColor: "bg-[#FFE7EB]",
      tech: [
        "React.js",
        "MongoDB",
        "TailwindCSS",
        "JWT Auth",
        "Nodemailer",
        "Context API",
      ],
    },
    {
      ref: refs.project4Ref,
      title: "Organic Shopper - Natural Ecommerce site",
      githubUrl: "https://github.com/Shahid1275/organic-shopper",
      image: "/images/project4.png",
      alt: "Organic Shopper Interface",
      bgColor: "bg-white",
      tech: [
        "React.js",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "JWT Auth",
        "Redux Toolkit",
      ],
    },
    {
      ref: refs.project5Ref,
      title: "AttendEase - Management System",
      githubUrl: "https://github.com/Shahid1275/Attend-Ease",
      image: "/images/project5.png",
      alt: "AttendEase Platform",
      bgColor: "bg-[#FFEFDB]",
      tech: ["React.js", "Next.js", "Material-UI", "Laravel APIs"],
    },
    {
      ref: refs.project6Ref,
      title: "Tiny URL - URL Shortener System",
      githubUrl: "https://github.com/Shahid1275/mern-url-shortener",
      image: "/images/project2.png",
      alt: "Tiny URL App",
      bgColor: "bg-[#FFE7EB]",
      tech: ["React.js", "Node.js", "Material-UI", "PostgreSQL", "JWT Auth"],
    },
  ];

  const openLink = (url) => {
    if (!url) {
      console.error("No URL provided");
      return;
    }
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening link:", error);
    }
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <TitleHeader
            title="Featured Projects"
            sub="Innovative applications showcasing modern web technologies"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={project.ref}
              className="project bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className={`image-wrapper flex-1 flex items-center p-2 ${project.bgColor}`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-auto max-h-64 object-contain mx-auto"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start mt-6">
                  <button
                    onClick={() => openLink(project.githubUrl)}
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-all duration-300 font-medium"
                    aria-label={`visit source code for ${project.title}`}
                  >
                    <span>Visit Code</span>
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
