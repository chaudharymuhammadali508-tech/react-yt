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
      <section class="px-6 md:px-16 py-12 md:py-20 flex flex-col items-center justify-center gap-5 text-center bg-[#F6FBE9]">
        {/* <!-- Image --> */}
        <img
          src={TeamProcess}
          class="pb-6 w-[68px] h-[90px] object-contain z-10"
        />

        {/* <!-- Heading --> */}
        <h1 class="text-2xl md:text-3xl font-semibold text-[#1A3129] md:max-w-full max-w-[20ch] z-10">
          Your Journey to Health and Wellness
        </h1>

        {/* <!-- Paragraph --> */}
        <p class="text-sm md:text-base text-center px-5 text-gray-700 max-w-[75ch] md:max-w-[140ch] leading-relaxed z-10">
          At Nutritionist, we believe in providing a personalized and
          comprehensive approach to help you achieve your health and wellness
          goals. Our "How it Works" process is designed to guide you through
          each step of your journey, ensuring that you receive the support,
          knowledge, and tools you need to succeed. Here's a detailed breakdown
          of our process:
        </p>
      </section>
    </div>
  );
};

export default Logo;
