import React from "react";
import aboutTopImage from "../../assets/About/About-Top-Image.png";
const Hero = () => {
  return (
    <div>
      {/* <!--About Section Start from Here--> */}

      <section class="py-10 px-3 md:py-16 md:px-20">
        <img
          src={aboutTopImage}
          alt="About Section Decore"
          class="object-contain"
        />
      </section>
    </div>
  );
};

export default Hero;
