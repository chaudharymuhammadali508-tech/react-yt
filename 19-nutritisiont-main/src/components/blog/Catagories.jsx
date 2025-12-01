import React from "react";

const Catagories = () => {
  return (
    <div>
      {/* <!-- Sub Section--> */}
      {/* <!-- Team Categories Section --> */}
      <section class="bg-[#234338] flex md:justify-center items-center gap-4 md:gap-10 mx-4 md:mx-20 py-6 px-10 md:py-10 rounded-bl-lg rounded-br-lg overflow-x-auto scrollbar-hide">
        <div class="flex md:flex-row flex-nowrap gap-4 px-4">
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>All</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Weight Loss Tips</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Healthy Eating</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Fitness and Exercise</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Mindset and Motivation</p>
          </div>
          <div class="hover:bg-[#356554] py-3 px-4 text-white rounded-lg cursor-pointer shrink-0">
            <p>Recipes and Meal Planning</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catagories;
