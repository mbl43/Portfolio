const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16"
    >
      <div className="max-w-screen-xl p-4 mx-auto max-w-7xl">
        <div className="pb-8 mx-auto text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-200">
            About Me
          </h2>
        </div>

        <div className="space-y-8 mt-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Education</h3>
            <p className="text-lg leading-relaxed">
            Graduated in 2022 with a Bachelor of Technology in Computer Science from Dr. Babasaheb Ambedkar Technological University, attaining a commendable academic performance with a CGPA of 8.44.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-medium  mb-2 text-blue-300">Frontend Development</h4>
                <p className="text-lg leading-relaxed">
                  HTML5, CSS, JavaScript, React.js, Tailwind CSS, GSAP.js, TypeScript, NextJs, Material UI, Aceternity UI
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium  mb-2 text-blue-300">Backend & Tools</h4>
                <p className="text-lg leading-relaxed">
                  Node.js, Git, GitHub, Postman, Google DevTools
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium  mb-2 text-blue-300">CMS</h4>
                <p className="text-lg leading-relaxed">WordPress</p>
              </div>
              <div>
                <h4 className="text-xl font-medium  mb-2 text-blue-300">Design Tools</h4>
                <p className="text-lg leading-relaxed">Adobe Photoshop, Figma</p>
              </div>
            </div>
          </div>

          {/* Core Responsibilities Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Core Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Developing engaging and interactive banner animations for web platforms</li>
              <li>Ensuring cross-browser compatibility across different devices and browsers</li>
              <li>Writing reusable, scalable, and optimized code following best practices</li>
              <li>Participating actively in Agile development processes and team collaborations</li>
            </ul>
          </div>

          {/* Key Strengths Section */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Key Strengths</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Strong focus on responsive design and user experience</li>
              <li>Experience in creating interactive animations using GSAP</li>
              <li>Proven ability to meet project deadlines and work effectively in team settings</li>
              <li>Comprehensive understanding of modern web development tools and practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;