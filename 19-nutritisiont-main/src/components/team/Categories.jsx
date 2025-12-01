import React from "react";
import image1 from "../../assets/Team Page/Image Cards/image1.png";
import image2 from "../../assets/Team Page/Image Cards/image2.png";
import image3 from "../../assets/Team Page/Image Cards/image3.png";
import image4 from "../../assets/Team Page/Image Cards/image4.png";
const Categories = () => {
  return (
    <div>
      {/* <!-- Sub Section--> */}
      {/* <!-- Team Categories Section --> */}
      <section class="bg-[#234338] flex lg:justify-center items-center gap-4 lg:gap-10 mx-4 lg:mx-20 py-6 px-10 lg:py-10 rounded-bl-lg rounded-br-lg overflow-x-auto scrollbar-hide">
        <div class="flex lg:flex-row flex-nowrap gap-4 px-4">
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Management Team</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Nutritionists and Dietitians</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Customer Support</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Marketing and Communications</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Technology and Development</p>
          </div>
        </div>
      </section>

      {/* <!--Sub image Cards--> */}
      <section class="px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* <!-- Card 1 --> */}
        <div class="relative group">
          <img
            src={image1}
            alt="Sarah Mitchell"
            class="object-contain w-[250px] lg:w-auto transition-transform duration-300"
          />
          <div class="bg-[#F6FBE9] h-[90px] w-[230px] absolute bottom-0 left-0 translate-y-1/2 rounded-tr-xl px-7 pt-3">
            <h2 class="text-black font-semibold text-lg leading-tight">
              Sarah Mitchell
            </h2>
            <p class="text-[#4C4C4D] text-sm leading-snug">Founder and CEO</p>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="relative group">
          <img
            src={image2}
            alt="Emily Thompson"
            class="object-contain w-[250px] lg:w-auto transition-transform duration-300"
          />
          <div class="bg-[#F6FBE9] h-[90px] w-[230px] absolute bottom-0 left-0 translate-y-1/2 rounded-tr-xl px-7 pt-3">
            <h2 class="text-black font-semibold text-lg leading-tight">
              Emily Thompson
            </h2>
            <p class="text-[#4C4C4D] text-sm leading-snug">
              Chief Operating Officer
            </p>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="relative group">
          <img
            src={image3}
            alt="John Davis"
            class="object-contain w-[250px] lg:w-auto transition-transform duration-300 "
          />
          <div class="bg-[#F6FBE9] h-[90px] w-[230px] absolute bottom-0 left-0 translate-y-1/2 rounded-tr-xl px-7 pt-3">
            <h2 class="text-black font-semibold text-lg leading-tight">
              John Davis
            </h2>
            <p class="text-[#4C4C4D] text-sm leading-snug">
              Chief Financial Officer
            </p>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="relative group">
          <img
            src={image4}
            alt="Rachel Adams"
            class="object-contain w-[250px] lg:w-auto transition-transform duration-300"
          />
          <div class="bg-[#F6FBE9] h-[90px] w-[230px] absolute bottom-0 left-0 translate-y-1/2 rounded-tr-xl px-7 pt-3">
            <h2 class="text-black font-semibold text-lg leading-tight">
              Rachel Adams
            </h2>
            <p class="text-[#4C4C4D] text-sm leading-snug">
              Chief Marketing Officer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
