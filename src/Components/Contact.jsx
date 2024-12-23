import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 p-3 text-white"
    >
      <div className="max-w-screen-lg  h-full flex flex-col justify-center items-center p-4 mx-auto   ">
        <div className="flex justify-center flex-col items-center sm:w-full">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-4 text-center">
            Submit the form to get in touch with me
          </p>
        </div>
        <div className="flex   justify-center items-center  ">
          <form
            action="https://getform.io/f/bnlekezb"
            method="POST"
            className="flex flex-col w-full  lg:w-[30vw] "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name" required
              className="p-4   bg-transparent border-2 rounded-md   focus:outline-none text-white"
            />
            <input
              type="email"
              name="mail" required
              placeholder="Enter your Email"
              className="p-4    bg-transparent border-2 rounded-md my-2 focus:outline-none text-white"
            />
            <textarea
              name="text"
              id=""
              placeholder="Enter your message"
              rows="10" required
              className="border-2 p-4    bg-transparent rounded-md focus:outline-none text-white"
            ></textarea>
            <button className="text-white   bg-blue-700 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 px-6 py-3 mt-4 ">
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
