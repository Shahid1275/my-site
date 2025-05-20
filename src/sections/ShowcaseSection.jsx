// import { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { FaArrowRight, FaTimes } from "react-icons/fa";
// import TitleHeader from "../components/TitleHeader";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const refs = {
//     rydeRef: useRef(null),
//     libraryRef: useRef(null),
//     ycDirectoryRef: useRef(null),
//     project4Ref: useRef(null),
//     project5Ref: useRef(null),
//     project6Ref: useRef(null),
//   };
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState("");

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5, ease: "power2.out" }
//     );

//     // Animations for each app showcase
//     Object.values(refs).forEach((card, index) => {
//       if (card.current) {
//         gsap.fromTo(
//           card.current,
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             delay: 0.3 * (index + 1),
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: card.current,
//               start: "top bottom-=100",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });
//   }, []);

//   // Project-specific data with corrected video paths
//   const projects = [
//     {
//       ref: refs.rydeRef,
//       title: "oladoc - Doctors Appointment Booking System",
//       videoUrl: "/images/Doctors Appointment.mp4",
//       githubUrl: "https://github.com/Shahid1275/appointment-system",
//       image: "/images/project1.png",
//       alt: "oladoc App Interface",
//       bgColor: "bg-white",
//       tech: [
//         "React.js",
//         "Node.js",
//         "TailwindCSS",
//         "MongoDB",
//         "Stripe.js",
//         "Redux Toolkit",
//       ],
//     },
//     {
//       ref: refs.libraryRef,
//       title: "Node-Farm - Natural ingredients API",
//       videoUrl: "/images/node-farm.mp4",
//       githubUrl: "https://github.com/Shahid1275/node-farm-api",
//       image: "/images/project6.png",
//       alt: "Node-Farm API",
//       bgColor: "bg-[#FFEFDB]",
//       tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
//     },
//     {
//       ref: refs.ycDirectoryRef,
//       title: "Secure Auth - Real Auth System",
//       videoUrl: "/images/Real-Auth.mp4",
//       githubUrl: "https://github.com/Shahid1275/real-auth-system",
//       image: "/images/project3.png",
//       alt: "Secure Auth App",
//       bgColor: "bg-[#FFE7EB]",
//       tech: [
//         "React.js",
//         "MongoDB",
//         "TailwindCSS",
//         "JWT Auth",
//         "Nodemailer",
//         "Context API",
//       ],
//     },
//     {
//       ref: refs.project4Ref,
//       title: "Organic Shopper - Natural Ecommerce site",
//       videoUrl: "/images/Natural _ Ecommerce.mp4",
//       githubUrl: "https://github.com/Shahid1275/organic-shopper",
//       image: "/images/project4.png",
//       alt: "Organic Shopper Interface",
//       bgColor: "bg-white",
//       tech: [
//         "React.js",
//         "Node.js",
//         "TailwindCSS",
//         "MongoDB",
//         "JWT Auth",
//         "Redux Toolkit",
//       ],
//     },
//     {
//       ref: refs.project5Ref,
//       title: "AttendEase - Management System",
//       videoUrl: "/images/AttendEase.mp4",
//       githubUrl: "https://github.com/Shahid1275/Attend-Ease",
//       image: "/images/project5.png",
//       alt: "AttendEase Platform",
//       bgColor: "bg-[#FFEFDB]",
//       tech: ["React.js", "Next.js", "Material-UI", "SQL", "Laravel APIs"],
//     },
//     {
//       ref: refs.project6Ref,
//       title: "Tiny URL - URL Shortener System",
//       videoUrl: "/images/url shortner.mp4",
//       githubUrl: "https://github.com/Shahid1275/mern-url-shortener",
//       image: "/images/project2.png",
//       alt: "Tiny URL App",
//       bgColor: "bg-[#FFE7EB]",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Material-UI",
//         "PostgreSQL",
//         "JWT Auth",
//         "Redux Toolkit",
//       ],
//     },
//   ];

//   const openModal = (videoUrl) => {
//     if (!videoUrl) {
//       console.error("No video URL provided");
//       return;
//     }
//     setCurrentVideo(videoUrl);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentVideo("");
//   };

//   const openLink = (url) => {
//     if (!url) {
//       console.error("No URL provided");
//       return;
//     }
//     try {
//       window.open(url, "_blank", "noopener,noreferrer");
//     } catch (error) {
//       console.error("Error opening link:", error);
//     }
//   };

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase py-20">
//       <div className="w-full max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <TitleHeader
//             title="Featured Projects"
//             sub="Innovative applications showcasing modern web technologies"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               ref={project.ref}
//               className="project bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
//             >
//               <div
//                 className={`image-wrapper flex-1 flex items-center p-2 ${project.bgColor}`}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.alt}
//                   className="w-full h-auto max-h-64 object-contain mx-auto"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {project.title}
//                 </h2>
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     onClick={() => openModal(project.videoUrl)}
//                     className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 font-medium"
//                     aria-label={`View demo video for ${project.title}`}
//                   >
//                     <span>View Demo</span>
//                   </button>
//                   <button
//                     onClick={() => openLink(project.githubUrl)}
//                     className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-all duration-300 font-medium"
//                     aria-label={`View source code for ${project.title}`}
//                   >
//                     <span>View Code</span>
//                     <FaArrowRight className="text-sm" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Video Player */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//           <div className="relative bg-white rounded-lg p-6 w-full max-w-4xl">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
//               aria-label="Close video modal"
//             >
//               <FaTimes className="text-2xl" />
//             </button>
//             <div className="w-full h-full aspect-video">
//               <video
//                 src={currentVideo}
//                 controls
//                 autoPlay
//                 className="w-full h-full rounded-lg"
//                 onError={(e) => {
//                   console.error("Video error:", e);
//                   alert("Failed to load video. Please check the file path.");
//                 }}
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppShowcase;
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
      title: "Node-Farm - Natural ingredients API",
      githubUrl: "https://github.com/Shahid1275/node-farm-api",
      image: "/images/project6.png",
      alt: "Node-Farm API",
      bgColor: "bg-[#FFEFDB]",
      tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
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
      tech: ["React.js", "Next.js", "Material-UI", "SQL", "Laravel APIs"],
    },
    {
      ref: refs.project6Ref,
      title: "Tiny URL - URL Shortener System",
      githubUrl: "https://github.com/Shahid1275/mern-url-shortener",
      image: "/images/project2.png",
      alt: "Tiny URL App",
      bgColor: "bg-[#FFE7EB]",
      tech: [
        "React.js",
        "Node.js",
        "Material-UI",
        "PostgreSQL",
        "JWT Auth",
        "Redux Toolkit",
      ],
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
                    aria-label={`View source code for ${project.title}`}
                  >
                    <span>View Code</span>
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
