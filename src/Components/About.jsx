import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[80vh] bg-gradient-to-b from-black  to-gray-800 text-white "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl bold inline border-b-4 border-gray-200">About</p>
        </div>
        <p className="mt-10 text-xl overflow-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, cum
          architecto ipsum error et veniam velit saepe vel quo voluptatem quod.
          Quos quod nihil at iste non delectus temporibus dolores assumenda
          laudantium molestiae quibusdam, molestias fugit, iure sint deserunt
          odit magni nam nostrum quis? Eligendi minima reiciendis dolore
          dignissimos eaque?
        </p>
        <br />
        <p className="text-xl overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid.
          Suscipit placeat consequuntur, quas magnam eum nobis vitae libero
          itaque nulla sapiente fugit! Error officiis eum voluptas magnam.
          Cupiditate explicabo maiores officiis. Porro ad pariatur iste rem? Ab
          molestiae laborum ipsam, minus nemo nostrum unde ea similique
          perspiciatis. Ex, ullam.
        </p>
      </div>
    </div>
  );
};

export default About;
