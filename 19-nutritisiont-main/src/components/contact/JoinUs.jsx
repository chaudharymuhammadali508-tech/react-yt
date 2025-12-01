import React from "react";
import Decore1 from "../../assets/About/SVG/Svg-Decore1.svg";
import Decore2 from "../../assets/About/SVG/Svg-Decore2.svg";

const JoinUs = () => {
  return (
    <div>
      {/* <!--Join Us Now Section--> */}
      <section class="md:px-16 md:py-16 md:m-20 px-10 py-10 flex md:justify-between flex-col lg:flex-row justify-center text-center md:text-start gap-5 items-center bg-[#F6FBE9] relative overflow-hidden">
        <img
          src={Decore1}
          alt="Decore item 1"
          class="absolute top-0 -left-5 z-0"
        />
        <img
          src={Decore2}
          alt="Decore item 2"
          class="absolute bottom-0 -right-5 z-0"
        />
        <div class="md:px-10 flex flex-col gap-5 relative">
          <h2 class="text-2xl font-semibold md:max-w-[60ch]">
            Are you ready to embark on a transformative journey towards better
            health and wellness?
          </h2>
          <p class="text-sm">
            Join us at Nutritionist and let us guide you on the path to a
            healthier and happier you.
          </p>
        </div>
        <button class=" h-[63px] w-full md:w-[154px] rounded-lg cursor-pointer hover:bg-[#aae710] bg-[#CBEA7B] relative">
          Join Us Now
        </button>
      </section>
    </div>
  );
};

export default JoinUs;
