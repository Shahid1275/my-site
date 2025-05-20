import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/Shahid1275",
      ariaLabel: "GitHub profile",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/shahid-ameen-978636279",
      ariaLabel: "LinkedIn profile",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://x.com/ShahidA10319?t=QOncTjUQ2UNCHQg9zCtPSQ&s=09",
      ariaLabel: "Twitter profile",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      url: "mailto:shahidameen1275@gmail.com",
      ariaLabel: "Send email",
    },
  ];

  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="footer-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-sm">Terms & Conditions</p>
          </div>

          <div className="socials flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="icon hover:text-teal-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-center md:text-right">
              © {new Date().getFullYear()} Shahid Ameen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
