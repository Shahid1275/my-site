// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { expCards } from "../constants";
// import TitleHeader from "../components/TitleHeader";
// import GlowCard from "../components/GlowCard";

// gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   useGSAP(() => {
//     // Loop through each timeline card and animate them in
//     // as the user scrolls to each card
//     gsap.utils.toArray(".timeline-card").forEach((card) => {
//       // Animate the card coming in from the left
//       // and fade in
//       gsap.from(card, {
//         // Move the card in from the left
//         xPercent: -100,
//         // Make the card invisible at the start
//         opacity: 0,
//         // Set the origin of the animation to the left side of the card
//         transformOrigin: "left left",
//         // Animate over 1 second
//         duration: 1,
//         // Use a power2 ease-in-out curve
//         ease: "power2.inOut",
//         // Trigger the animation when the card is 80% of the way down the screen
//         scrollTrigger: {
//           // The card is the trigger element
//           trigger: card,
//           // Trigger the animation when the card is 80% down the screen
//           start: "top 80%",
//         },
//       });
//     });

//     // Animate the timeline height as the user scrolls
//     // from the top of the timeline to 70% down the screen
//     // The timeline height should scale down from 1 to 0
//     // as the user scrolls up the screen
//     gsap.to(".timeline", {
//       // Set the origin of the animation to the bottom of the timeline
//       transformOrigin: "bottom bottom",
//       // Animate the timeline height over 1 second
//       ease: "power1.inOut",
//       // Trigger the animation when the timeline is at the top of the screen
//       // and end it when the timeline is at 70% down the screen
//       scrollTrigger: {
//         trigger: ".timeline",
//         start: "top center",
//         end: "70% center",
//         // Update the animation as the user scrolls
//         onUpdate: (self) => {
//           // Scale the timeline height as the user scrolls
//           // from 1 to 0 as the user scrolls up the screen
//           gsap.to(".timeline", {
//             scaleY: 1 - self.progress,
//           });
//         },
//       },
//     });

//     // Loop through each expText element and animate them in
//     // as the user scrolls to each text element
//     gsap.utils.toArray(".expText").forEach((text) => {
//       // Animate the text opacity from 0 to 1
//       // and move it from the left to its final position
//       // over 1 second with a power2 ease-in-out curve
//       gsap.from(text, {
//         // Set the opacity of the text to 0
//         opacity: 0,
//         // Move the text from the left to its final position
//         // (xPercent: 0 means the text is at its final position)
//         xPercent: 0,
//         // Animate over 1 second
//         duration: 1,
//         // Use a power2 ease-in-out curve
//         ease: "power2.inOut",
//         // Trigger the animation when the text is 60% down the screen
//         scrollTrigger: {
//           // The text is the trigger element
//           trigger: text,
//           // Trigger the animation when the text is 60% down the screen
//           start: "top 60%",
//         },
//       });
//     }, "<"); // position parameter - insert at the start of the animation
//   }, []);

//   return (
//     <section
//       id="experience"
//       className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
//     >
//       <div className="w-full h-full md:px-20 px-5">
//         <TitleHeader
//           title="Professional Work Experience"
//           sub="💼 My Career Overview"
//         />
//         <div className="mt-32 relative">
//           <div className="relative z-50 xl:space-y-32 space-y-10">
//             {expCards.map((card) => (
//               <div key={card.title} className="exp-card-wrapper">
//                 <div className="xl:w-2/6">
//                   <GlowCard card={card}>
//                     <div>
//                       <img src={card.imgPath} alt="exp-img" />
//                     </div>
//                   </GlowCard>
//                 </div>
//                 <div className="xl:w-4/6">
//                   <div className="flex items-start">
//                     <div className="timeline-wrapper">
//                       <div className="timeline" />
//                       <div className="gradient-line w-1 h-full" />
//                     </div>
//                     <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
//                       <div className="timeline-logo">
//                         <img src={card.logoPath} alt="logo" />
//                       </div>
//                       <div>
//                         <h1 className="font-semibold text-3xl">{card.title}</h1>
//                         <p className="my-5 text-white-50">
//                           🗓️&nbsp;{card.date}
//                         </p>
//                         <p className="text-[#839CB5] italic">
//                           Responsibilities
//                         </p>
//                         <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
//                           {card.responsibilities.map(
//                             (responsibility, index) => (
//                               <li key={index} className="text-lg">
//                                 {responsibility}
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
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
