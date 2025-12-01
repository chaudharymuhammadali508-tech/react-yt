import React from "react";
import AbstractDesign from "../../assets/Decore for team & contact page/Abstract-Design-Decore.png";
import TeamProcess from "../../assets/Team Page/Team-Process-Container.png";
const Logo = () => {
  return (
    <div>
      {/* <!-- Section Logo --> */}
      <img
        src={AbstractDesign}
        alt="Design"
        class=" hidden lg:block absolute top-20 left-70 h-80"
      />
      <section class="px-6 md:px-20 py-12 md:py-20 flex flex-col items-center justify-center gap-5 text-center bg-[#F6FBE9] z-10">
        {/* <!-- Image --> */}
        <img
          src={TeamProcess}
          alt="Logo"
          class="pb-6 w-[68px] h-[90px] object-contain z-10"
        />

        {/* <!-- Heading --> */}
        <h1 class="text-2xl md:text-3xl font-semibold text-[#1A3129] md:max-w-full max-w-[20ch] z-10">
          Our Blogs
        </h1>

        {/* <!-- Paragraph --> */}
        <p class="text-sm md:text-base text-center px-5 text-gray-700 max-w-[75ch] md:max-w-[140ch] leading-relaxed z-10">
          Welcome to the Blog section of Nutritionist, your trusted source for
          insightful articles, tips, and expert advice on nutrition and
          wellness. Here, we strive to provide you with engaging and informative
          content that will inspire and empower you to make informed decisions
          about your health. Explore our blog to discover a wealth of resources
          that cover a wide range of topics related to nutrition, fitness, and
          overall well-being.
        </p>
      </section>
    </div>
  );
};

export default Logo;
