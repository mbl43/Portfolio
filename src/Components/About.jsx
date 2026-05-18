import { p } from "framer-motion/client";
import {
  Blocks,
  CodeXml,
  Frame,
  GraduationCap,
  Sparkles,
  University,
  Wallpaper,
} from "lucide-react";

const About = ({ experience }) => {
  const Teckskills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "GSAP.js",
    "TypeScript",
    "NextJs",
    "Material UI",
  ];

  const tools = ["Node.js", "Git", "GitHub", "Postman", "Google DevTools"];
  const design = ["Indesign", "Photoshop", "Figma"];
  const strengths = [
    "Responsive UI",
    "Component Design",
    "Performance Optimization",
    "Critical Thinking",
    "Team Collaboration",
  ];
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-12"
    >
      <div className="max-w-screen-xl p-4 mx-auto max-w-7xl">
        <div className="pb-4 mx-auto flex justify-between">
          <div>
            <h2 className="text-5xl font-bold inline-block text-white border-l-8 border-orange-400 pb-2 pl-4">
              About Me
            </h2>
            <p className="text-gray-300  mt-2 ml-4">
              Frontend Developer· {experience} years experience
            </p>
          </div>
          <div className="flex items-center justify-between rounded-2xl w-40 h-14 glass-pill px-3">
            <GraduationCap />
            <span className="text-orange-400 max-md:text-sm max-md:text-center">
              CGPA: 8.44
            </span>
          </div>
        </div>

        <div className="space-y-8 mt-8">
          {/* Education Section */}
          <div className="flex flex-col rounded-2xl w-fit glass-pill p-4 my-3">
            <h6 className="flex gap-3">
              <University size={20} /> Education
            </h6>
            <p className=" leading-relaxed pt-4">
              B.Tech in Computer Science · Dr. Babasaheb Ambedkar Technological
              University · Graduated 2022
            </p>
          </div>

          {/* Technical Skills Section */}
          <div className="">
            <h3 className=" flex mb-4 gap-3">
              <CodeXml size={20} />
              Technical Skills
            </h3>
            <div className="flex flex-row flex-wrap gap-4">
              <div className="flex flex-col rounded-2xl glass-pill p-4 my-3">
                <h6 className="flex gap-3">
                  <Blocks size={20} /> Frontend
                </h6>
                <div className="pt-4 flex flex-wrap gap-2 ">
                  {Teckskills.map((v) => (
                    <p
                      className="flex text-xs rounded-2xl glass-pill p-2 my-1 text-center items-center justify-center"
                      key={v.id}
                    >
                      {v}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col rounded-2xl w-fit glass-pill p-4 my-3">
                <h6 className="flex gap-3">
                  <Frame size={20} /> Backend & Tools
                </h6>
                <div className="pt-4 flex flex-wrap gap-2 ">
                  {tools.map((v) => (
                    <p
                      className="flex flex-row text-xs rounded-2xl glass-pill p-2 my-1 text-center items-center justify-center"
                      key={v.id}
                    >
                      {v}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col rounded-2xl w-fit glass-pill p-4 my-3">
                <h6 className="flex gap-3">
                  <Wallpaper size={20} /> Design Tools
                </h6>
                <div className="pt-4 flex flex-wrap gap-2">
                  {design.map((v) => (
                    <p
                      className="flex flex-row text-xs rounded-2xl glass-pill p-2 my-1 text-center items-center justify-center"
                      key={v.id}
                    >
                      {v}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Strengths Section */}
          <div  className="w-fit">
            <h3 className="flex gap-3">
              <Sparkles size={20} />
              Key Strengths
            </h3>
            <div className="flex flex-col rounded-2xl glass-pill p-4 my-3">
              <div className="flex flex-wrap gap-2 ">
                {strengths.map((v) => (
                  <p
                    className="flex text-xs rounded-2xl glass-pill p-2 my-1 text-center items-center justify-center"
                    key={v.id}
                  >
                    {v}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
