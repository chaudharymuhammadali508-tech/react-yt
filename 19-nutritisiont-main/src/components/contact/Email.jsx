import React from "react";
import map from "../../assets/contact us page/Map.png";
import buttonFb from "../../assets/contact us page/Button-fb.svg";
import buttonX from "../../assets/contact us page/Button-x.svg";
import buttonLdn from "../../assets/contact us page/Button-Linkdin.svg";
const Email = () => {
  return (
    <div>
      {/* <!-- Email & Location Section --> */}
      <section class="bg-[#F6FBE9] flex flex-col lg:flex-row lg:justify-center lg:items-start items-center gap-10 px-6 lg:px-20 py-10 lg:py-24">
        {/* <!-- Left Side: Contact Form --> */}
        <form class="bg-[#F6FBE9] w-full lg:max-w-lg space-y-5 text-[#1A3129]">
          {/* <!-- Row 1: Full Name + Email --> */}
          <div class="flex flex-col lg:flex-row lg:gap-4 md:items-center md:text-center lg:text-start lg:items-start md:justify-center">
            <div class="flex flex-col w-full">
              <label class="text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                class="bg-[#EAF7C0] border border-[#DCE7A3] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#CBEA7B]"
              />
            </div>

            <div class="flex flex-col w-full">
              <label class="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                class="bg-[#EAF7C0] border border-[#DCE7A3] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#CBEA7B]"
              />
            </div>
          </div>

          {/* <!-- Phone Number --> */}
          <div class="flex flex-col md:items-center md:text-center lg:text-start lg:items-start md:justify-center">
            <label class="text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your Number"
              class="bg-[#EAF7C0] border border-[#DCE7A3] rounded-md p-3 focus:outline-none w-full focus:ring-1 focus:ring-[#CBEA7B]"
            />
          </div>

          {/* <!-- Message --> */}
          <div class="flex flex-col md:items-center md:text-center lg:text-start lg:items-start md:justify-center">
            <label class="text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Enter your Message"
              rows="4"
              class="bg-[#EAF7C0] border border-[#DCE7A3] rounded-md p-3 focus:outline-none w-full focus:ring-1 focus:ring-[#CBEA7B]"
            ></textarea>
            <p class="text-[12px] text-right text-gray-500 mt-1">
              Max 250 Chars
            </p>
          </div>

          {/* <!-- Button --> */}
          <button
            type="submit"
            class="bg-[#CBEA7B] hover:bg-[#b8da6d] text-black font-medium py-3 w-full rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* <!-- Right Side: Map + Social Links --> */}
        <div class="flex flex-col gap-5 lg:gap-6">
          <img
            src={map}
            alt="Map"
            class="w-[300px] lg:w-[550px] lg:h-[350px] rounded-lg object-cover"
          />

          {/* <!-- Social Icons --> */}
          <div class="flex justify-center lg:justify-end gap-4">
            <a href="#" class="hover:opacity-80 transition h-[45px] w-[45px]">
              <img src={buttonFb} alt="Facebook" />
            </a>
            <a href="#" class="hover:opacity-80 transition h-[45px] w-[45px]">
              <img src={buttonX} alt="Twitter" />
            </a>
            <a href="#" class="hover:opacity-80 transition h-[45px] w-[45px]">
              <img src={buttonLdn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Email;
