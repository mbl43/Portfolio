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
} from "developer-icons";
import logo from "../assets/portfolio/eclerx.png";
import { Building2, Calendar } from "lucide-react";
const Experience = ({experience}) => {
  const skills = [
    {
      id: 1,
      icon: <HTML5 />,
      text: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      icon: <CSS />,
      text: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      icon: <JavaScript />,
      text: "JavaScript",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      icon: <TailwindCSS />,
      text: "Tailwind",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      icon: <NodeJs />,
      text: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: react,
      text: "React.js",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      icon: <ViteJS />,
      text: "Vite",
      style: "shadow-yellow-600",
    },
    {
      id: 8,
      icon: <Bootstrap5 />,
      text: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 9,
      icon: <Photoshop />,
      text: "Photoshop",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      icon: <GitHubLight />,
      text: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      icon: <Git />,
      text: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      icon: <VercelLightWordmark />,
      text: "Vercel",
      style: "shadow-white",
    },
    {
      id: 13,
      icon: <NextJs />,
      text: "NextJs",
      style: "shadow-white",
    },
    {
      id: 14,
      icon: <Figma />,
      text: "Figma",
      style: "shadow-orange-600 ",
    },
    {
      id: 15,
      icon: <TypeScript />,
      text: "TypeScript",
      style: "shadow-blue-600 ",
    },
    {
      id: 15,
      icon: <MaterialUI />,
      text: "Material UI",
      style: "shadow-blue-600 ",
    },
    
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold inline-block text-white border-b-4 border-gray-500 pb-2 mb-8">
            Experience
          </h2>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mt-8 text-white flex sm:flex-row flex-col items-center justify-center text-left space-x-0 sm:space-x-10 w-full gap-10">
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
                  I have {experience} years of experience as a Frontend developer at
                  eClerx Services Limited, Pune. I have Gained experience in 
                  programming languages such as HTML, CSS, JavaScript, and
                  Node.js.
                </li>
                <li className="text-lg leading-relaxed">
                Developed and maintained responsive landing pages for various eClerx campaigns, resulting in improved user engagement and better conversion rates.
                </li>
                <li className="text-lg leading-relaxed">
                 Built a Task Management Web App using React.js, boosting team productivity and streamlining internal workflows.
                </li>
                <li className="text-lg  leading-relaxed">
                  Additionally, my proficiency in frameworks like React.js and
                  Tailwind, Bootstrap as well as tools like Git, Postman,
                  GitHub, and Photoshop, ChatGpt has further enhanced my
                  capabilities as a Frontend developer.
                </li>
                <li className="text-lg leading-relaxed">
              Created 5 automation tools using Python, JavaScript, and VBScript that cut down process time by 15%, now utilized by other processes, showcasing efficiency and innovation in workflow management.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map(({ id, src, text, style, icon }) => (
            <motion.div
              key={id} // ✅
              initial={{ opacity: 0, y: 50 }} // Start hidden
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
            >
              <div
                className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 
        transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 
        ${style} shadow-lg hover:shadow-xl`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-24 h-24 flex items-center justify-center p-4 bg-gray-800/50 rounded-xl">
                    {src ? (
                      <img
                        src={src}
                        alt={text}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                        loading="lazy"
                      />
                    ) : (
                      icon
                    )}
                  </div>
                  <h3 className="text-base sm:text-xl sm:font-semibold text-center text-white">
                    {text}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
