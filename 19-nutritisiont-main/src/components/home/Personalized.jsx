import React from "react";
import section2leftimage from "../../assets/Section 2/section2-leftimage.png";
import containerpng from "../../assets/Section 2/Container.png";
const Personalized = () => {
  return (
    <div>
      {/* <!-- Section 2 Personalized --> */}

      <section className="relative flex flex-col lg:flex-row items-center justify-between text-black px-6 py-12 lg:py-0 lg:px-0 gap-7 space-y-5">
        {/* <!-- Left Image --> */}
        <div className="w-full relative">
          <img
            src={section2leftimage}
            alt="A girl picture"
            className="w-full h-full rounded-br-3xl object-contain"
          />

          {/* <!-- Sub Image Happy Customer--> */}
          <div className="absolute md:absolute md:left-115 bottom-4 left-63 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-2 lg:hidden">
            <img
              src="./Assets/Section 2/Container.png"
              alt="Happy Customers Reviews part"
              className="h-[52px] w-[102px]"
            />
            <p className="text-green-600 text-center text-sm">
              430+ <span className="text-gray-700">Happy Customers</span>
            </p>
          </div>
        </div>

        {/* <!-- Right Text Section --> */}
        <div className="w-full md:px-7 xl:space-y-5 text-center lg:text-left pt-7 lg:pt-0.5">
          <p className="text-lg md:font-semibold border-b-[3px] border-[#CBEA7B] inline-block pb-1">
            Transform Your ❤️ Health with
          </p>
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight lg:max-w-[20ch]">
            Personalized{" "}
            <span className="block md:inline">Nutrition Coaching</span>
          </h1>
          <p className="max-w-[80ch] mx-auto md:mx-0">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>

          {/* <!-- Buttons --> */}
          <div className="flex sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 lg:pt-2">
            <button className="bg-[#CBEA7B] text-black font-semibold px-6 py-3 rounded-lg transition-all hover:bg-[#b6d66c]">
              Get Started Today
            </button>
            <button className="border border-[#CBEA7B] font-semibold px-6 py-3 rounded-lg transition-all hover:bg-[#CBEA7B]">
              Book a Demo
            </button>
          </div>

          {/* <!-- Sub Image (Desktop Only) --> */}
          <div className="hidden lg:flex xl:pt-10 lg:pt-3 items-center gap-3">
            <img
              src={containerpng}
              alt="Happy Customers Reviews part"
              className="h-[66px] w-[130px]"
            />
            <p className="text-green-600">
              430+{" "}
              <span className="text-gray-700 font-urbanist ">
                Happy Customers
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personalized;
