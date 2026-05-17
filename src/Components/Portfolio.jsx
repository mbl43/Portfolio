import React from "react";
import { motion } from "framer-motion";
import {ExternalLink} from "lucide-react";
import { GitHubLight } from "developer-icons";
import PM from "../assets/portfolio/pm.png";
import Bookstore from "../assets/portfolio/bookstore.png";
import ReportScam from "../assets/portfolio/reportscam.png";
import MyWealth from "../assets/portfolio/mywealth.png";
const Portfolio = () => {
  const projects = [
       {
      id: 1,
      src: Bookstore,
      link: "https://spectacular-dango-a7d490.netlify.app/",
      name: "Online Book Store",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Bootstrap",
        "React Router",
      ],
      description: "E-commerce platform for purchasing books online",
    },
    {
      id: 2,
      src: MyWealth,
      link: "https://my-wealth.vercel.app/",
      name: "My Wealth",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Tailwind",
        "Firebase",
        "vercel",
        "email.js",
        "swiper.js",
        "Firebase Auth",
        "React router",
        "Material UI",
      ],
      description:
        "My Wealth helps users track investments, SIPs, and unclaimed funds while ensuring privacy.",
    },
    {
      id: 3,
      src: ReportScam,
      link: "https://report-scam.vercel.app/",
      name: "Report Scam",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "React",
        "Vercel",
        "Supabase",
      ],
      description:
        "The ReportScam lets users anonymously share scam experiences.",
    },
    {
      id: 4,
      src: PM,
      link: "https://mangesh-portfolio-rt.vercel.app/",
      name: "Personal Portfolio",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Tailwind",
        "React Router",
      ],
      description: "Professional portfolio website showcasing my work",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block text-white border-b-4 border-gray-400 pb-2">
            Portfolio
          </h2>
          <p className="text-gray-300 text-lg mt-6">
            Explore my latest projects and technical work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ id, src, link, name, stack, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }} // Start hidden
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible>
            >
              <div
                className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden
              transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-b-2 h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6 ">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>

                    <a
                      href="https://github.com/mbl43"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      <GitHubLight className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
