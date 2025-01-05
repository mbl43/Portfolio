import React from "react";
import { GitHubLight, Gmail, LinkedIn, WhatsApp } from "developer-icons";
import main from "../assets/main.png";

const Contact = () => {
  const socialLinks = [
    {
      icon: <LinkedIn className="w-8 h-8" />,
      href: "https://in.linkedin.com/in/mangesh-lemte",
      label: "LinkedIn",
      color: "hover:text-blue-500",
      id: 1,
    },
    {
      icon: <Gmail className="w-8 h-8" />,
      href: "mailto:mangeshlemte.a23@gmail.com",
      label: "Email",
      color: "hover:text-red-500",
      id: 2,
    },
    {
      icon: <GitHubLight className="w-8 h-8" />,
      href: "https://github.com/mbl43",
      label: "GitHub",
      color: "hover:text-purple-500",
      id: 3,
    },
    {
      icon: <WhatsApp className="w-8 h-8" />,
      href: "https://wa.me/+917745028543",
      label: "WhatsApp",
      color: "hover:text-green-500",
      id: 4,
    },
  ];

  return (
    <div
      name="Contact"
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image and Social Links Section */}
            <div className="space-y-8">
              <div className="relative group">
                <img
                  src={main}
                  alt="contact image"
                  className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center space-x-6">
                {socialLinks.map((link,id) => (
                  <a
                   
                    key={id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-all duration-300 hover:scale-110 ${link.color}`}
                    aria-label={link.label}
                  >
                    <div className="p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:shadow-lg">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>

              <form
                action="https://getform.io/f/bnlekezb"
                method="POST"
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 outline-none resize-none"
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl 
                  hover:from-blue-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-[1.02] 
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
