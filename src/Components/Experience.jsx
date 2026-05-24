import react from "../assets/react.png";
import { motion } from "framer-motion";
import {
  Bootstrap5,
  Git,
  GitHubLight,
  VercelLightWordmark,
  Photoshop,
  ViteJS,
  CSS,
  JavaScript,
  TailwindCSS,
  NodeJs,
  HTML5,
  NextJs,
  Figma,
  TypeScript,
  MaterialUI,
  ClaudeAI,
} from "developer-icons";
import logo from "../assets/portfolio/eclerx.png";
import { Building2, Calendar } from "lucide-react";
const Experience = ({ experience }) => {
  const skills = [
    {
      id: 1,
      icon: <HTML5 />,
      text: "HTML",
    },
    {
      id: 2,
      icon: <CSS />,
      text: "CSS",
    },
    {
      id: 3,
      icon: <JavaScript />,
      text: "JavaScript",
    },
    {
      id: 4,
      icon: <TailwindCSS />,
      text: "Tailwind",
    },
    {
      id: 5,
      icon: <NodeJs />,
      text: "Node.js",
    },
    {
      id: 6,
      src: react,
      text: "React.js",
    },
    {
      id: 7,
      icon: <ViteJS />,
      text: "Vite",
    },
    {
      id: 8,
      icon: <Bootstrap5 />,
      text: "Bootstrap",
    },
    {
      id: 9,
      icon: <Photoshop />,
      text: "Photoshop",
    },
    {
      id: 10,
      icon: <GitHubLight />,
      text: "GitHub",
    },
    {
      id: 11,
      icon: <Git />,
      text: "Git",
    },
    {
      id: 12,
      icon: <VercelLightWordmark />,
      text: "Vercel",
    },
    {
      id: 13,
      icon: <NextJs />,
      text: "Next.js",
    },
    {
      id: 14,
      icon: <Figma />,
      text: "Figma",
    },
    {
      id: 15,
      icon: <TypeScript />,
      text: "TypeScript",
    },
    {
      id: 16,
      icon: <MaterialUI />,
      text: "Material UI",
    },
    {
      id: 17,
      icon: <ClaudeAI />,
      text: "Claude AI",
    },
  ];

  return (
    <div
      name="Experience"
      className="glass-fill w-full min-h-screen py-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold inline-block text-white border-l-8 border-orange-400 pb-2 pl-4">
            Experience
          </h2>

          <div className="glass-pill rounded-2xl p-8 mt-8 text-white flex sm:flex-row flex-col items-center justify-center text-left space-x-0 sm:space-x-10 w-full gap-10">
            {/* left */}
            <div className="sm:w-1/6 w-full flex flex-col items-center justify-center mx-auto space-y-2 ">
              <img
                src={logo}
                alt="eclerx-logo"
                className="my-4 max-w-[150px] h-auto"
              />
              <h3 className="text-lg font-semibold mb-2">Frontend Developer</h3>
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} />
                  <p>Oct 2022 - Present</p>
                </div>
                <div className="flex items-center gap-2 text-gray-300 mt-1">
                  <Building2 size={16} />
                  <p>eClerx Services Limited, Pune</p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-full sm:w-5/6">
              <ul className="list-disc space-y-2">
                <li className="text-lg leading-relaxed">
                  I have {experience} years of experience as a Frontend
                  developer at eClerx Services Limited, Pune. I have Gained
                  experience in programming languages such as HTML, CSS,
                  JavaScript, and Node.js.
                </li>
                <li className="text-lg leading-relaxed">
                  Developed and maintained responsive landing pages for various
                  eClerx campaigns, resulting in improved user engagement and
                  better conversion rates.
                </li>
                <li className="text-lg leading-relaxed">
                  Built a Task Management Web App using React.js, boosting team
                  productivity and streamlining internal workflows.
                </li>
                <li className="text-lg  leading-relaxed">
                  Additionally, my proficiency in frameworks like React.js and
                  Tailwind, Bootstrap as well as tools like Git, Postman,
                  GitHub, and Photoshop, ChatGpt has further enhanced my
                  capabilities as a Frontend developer.
                </li>
                <li className="text-lg leading-relaxed">
                  Created 5 automation tools using Python, JavaScript, and
                  VBScript that cut down process time by 15%, now utilized by
                  other processes, showcasing efficiency and innovation in
                  workflow management.
                </li>
              </ul>
            </div>
          </div>
        </div>      
      </div>
       {/* Skills Grid */}
        <div className="w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: -2000 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {skills.map(({ id, src, text, icon }) => (
              <motion.div key={id} className="flex-shrink-0 w-max">
                <div className="glass-pill rounded-2xl px-4 py-3 flex flex-row items-center space-x-3 transition-all duration-300">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {src ? (
                      <img
                        src={src}
                        alt={text}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      icon
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-white">{text}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </div>
  );
};

export default Experience;
