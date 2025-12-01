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
      <section class="px-6 md:px-20 py-12 md:py-20 flex flex-col items-center justify-center gap-5 text-center bg-[#F6FBE9]">
        {/* <!-- Image --> */}
        <img
          src={TeamProcess}
          alt="Logo"
          class="pb-6 w-[68px] h-[90px] object-contain z-20 "
        />

        {/* <!-- Heading --> */}
        <h1 class="text-2xl md:text-3xl font-semibold text-[#1A3129] md:max-w-full max-w-[20ch] z-20">
          Meet Our Team of Experts
        </h1>

        {/* <!-- Paragraph --> */}
        <p class="text-sm md:text-base text-center px-5 text-gray-700 max-w-[75ch] md:max-w-[140ch] leading-relaxed z-20">
          Our team at Nutritionist is composed of highly skilled professionals
          who are passionate about helping you achieve your health and wellness
          goals. With a diverse range of expertise in nutrition, coaching, and
          support, our team is dedicated to providing you with the guidance and
          personalized care you need. Get to know the experts behind our success
          and discover how they can make a positive impact on your journey to
          better health.
        </p>
      </section>
    </div>
  );
};

export default Logo;
