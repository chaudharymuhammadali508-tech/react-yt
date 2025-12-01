import React from "react";
import Navbar from "./Navbar";

const Pricing = () => {
  return (
    <div>
      {/* <!-- Pricing Section --> */}
      <section className="px-5 md:px-20 py-10 md:pb-16">
        {/* <!-- Heading --> */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">Our Pricing</h1>
          <p className="text-sm md:text-base text-[#4C4C4D] max-w-[45ch] md:max-w-[80ch]">
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe everyone
            deserves personalized guidance and resources.
          </p>
        </div>

        {/* <!-- Toggle Buttons --> */}
        <div className="flex flex-col items-center gap-3 py-6">
          <div className="bg-[#F6FBE9] rounded-full p-1 flex">
            <button
              id="monthly-btn"
              className="rounded-full px-5 py-2 text-sm font-medium bg-[#234338] text-white transition-all duration-300"
            >
              Monthly
            </button>
            <button
              id="yearly-btn"
              className="rounded-full px-5 py-2 text-sm font-medium text-[#234338] hover:bg-[#CBEA7B] transition-all duration-300"
            >
              Yearly
            </button>
          </div>
          <p className="text-sm text-[#4C4C4D]">Save 50% on Yearly</p>
        </div>

        {/* <!-- Pricing Cards --> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 py-6">
          {/* <!-- Card 1 --> */}
          <div className="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div>
              <h2 className="text-2xl font-semibold">Basic Plan</h2>
              <p className="text-sm text-[#4C4C4D]">
                Up to 50% off on Yearly Plan
              </p>
              <p className="text-sm pt-5 pb-7 text-[#4C4C4D]">
                Get started on your health journey with our Basic Plan —
                includes personalized nutrition coaching, app access, meal
                planning assistance, and email support.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-7 w-7 text-[#2C5446]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56c17.7 0 32 14.3 32 32s-14.3 
              32-32 32H119.1c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 
              44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 
              109.1H178v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H58c-17.7 
              0-32-14.3-32-32s14.3-32 32-32h130.9c24.9 0 45.1-20.2 
              45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 
              273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64H136V24z"
                />
              </svg>
              <p
                className="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="49"
                data-yearly="24"
              >
                49
              </p>
              <p className="text-sm">/Month</p>
            </div>
            <button className="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>
          {/* 
            <!-- Card 2 --> */}
          <div className="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div>
              <h2 className="text-2xl font-semibold">Premium Plan</h2>
              <p className="text-sm text-[#4C4C4D]">
                Up to 50% off on Yearly Plan
              </p>
              <p className="text-sm pt-5 pb-7 text-[#4C4C4D]">
                Upgrade to our Premium Plan for enhanced features. In addition
                to the Basic Plan, you'll receive video consultations, priority
                support, and personalized recipe recommendations.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-7 w-7 text-[#2C5446]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56c17.7 0 32 
              14.3 32 32s-14.3 32-32 32H119.1c-24.9 0-45.1 20.2-45.1 
              45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 
              93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1H178v40c0 
              13.3-10.7 24-24 24s-24-10.7-24-24v-40H58c-17.7 0-32-14.3-32-32s14.3-32 
              32-32h130.9c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 
              273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64H136V24z"
                />
              </svg>
              <p
                className="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="79"
                data-yearly="39"
              >
                79
              </p>
              <p className="text-sm">/Month</p>
            </div>
            <button className="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div>
              <h2 className="text-2xl font-semibold">Ultimate Plan</h2>
              <p className="text-sm text-[#4C4C4D]">
                Up to 50% off on Yearly Plan
              </p>
              <p className="text-sm pt-5 pb-7 text-[#4C4C4D]">
                Experience the full benefits of personalized nutrition coaching
                with our Ultimate Plan. Enjoy all the features of the Premium
                Plan, along with 24/7 chat support and exclusive workshops.
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-7 w-7 text-[#2C5446]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h56c17.7 0 
              32 14.3 32 32s-14.3 32-32 32H119.1c-24.9 0-45.1 20.2-45.1 
              45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 
              93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1H178v40c0 
              13.3-10.7 24-24 24s-24-10.7-24-24v-40H58c-17.7 0-32-14.3-32-32s14.3-32 
              32-32h130.9c24.9 0 45.1-20.2 
              45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 
              273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64H136V24z"
                />
              </svg>
              <p
                className="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="99"
                data-yearly="49"
              >
                99
              </p>
              <p className="text-sm">/Month</p>
            </div>
            <button className="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
