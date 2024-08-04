import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-auto bg-gradient-to-b from-black  to-gray-800 text-white "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl bold inline border-b-4 border-gray-200">About</p>
        </div>
        <p className="md:mx-10 text-lg overflow-auto">
        I&apos;m a passionate Frontend Web Developer with over 3 years of experience in the field.Graduated with a Bachelor of Technology in Computer Science from Dr. Babasaheb Ambedkar Technological University, achieving a 79.40% score.
        Since October 2022, I&apos;ve been working as a Web Developer at eClerx Services LTD in Pune. My expertise lies in developing responsive web banners using HTML, CSS, JavaScript, and GSAP. I&apos;m proficient in various programming languages, frameworks, and tools, including React.js, Tailwind, Node.js, Git, Figma, Postman, GitHub, WordPress, and Photoshop.
        </p>
        <br />
        <p className="md:mx-10 text-lg overflow-auto">
        My daily work involves creating engaging and interactive banner animations, ensuring cross-browser compatibility, and developing reusable, scalable, and optimized code. I actively participate in Agile development processes and enjoy collaborating with teams to deliver projects on time.
        My technical skills include HTML5, CSS, GSAP.js, Tailwind, JavaScript, WordPress, React.js, Vite, Postman, Appwrite, and Google DevTools. I&apos;m also good at using software like Adobe Photoshop and Figma.
        </p>
      </div>
    </div>
  );
};

export default About;
