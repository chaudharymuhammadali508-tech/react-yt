import React from "react";
import FAQ from "../../assets/Pricing Page/FAQ-icon.png";
const Faq = () => {
  return (
    <div>
      {/* <!--FAQ Section--> */}
      <section class="flex flex-col items-center gap-5 py-10 px-6">
        <h1 class="text-3xl font-semibold">FAQ</h1>
        <p class="text-sm text-center max-w-[99ch]">
          We address commonly asked questions and provide comprehensive answers
          to help you navigate your way through your nutrition and wellness
          journey.
        </p>
      </section>

      <section class="bg-[#F6FBE9] px-6 md:px-16 md:py-24 py-10">
        {/* <!-- Parent flex --> */}
        <div class="flex flex-col md:flex-row justify-between gap-10">
          {/* <!-- LEFT SIDE (FAQ Cards) --> */}
          <div class="flex flex-col gap-5 w-full md:w-2/3">
            {/* <!-- Card 1--> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  What is personalized nutrition coaching?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white transition-transform duration-300 shrink-0 ml-4 bg-[#1A3129]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Personalized nutrition coaching involves creating a customized
                nutrition plan based on your unique goals, preferences, and
                dietary requirements. Our team of experts will work closely with
                you to develop a plan that fits your lifestyle and helps you
                achieve optimal health and wellness.
              </p>
            </div>
            {/* <!-- Card 2 --> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  How can nutrition coaching help me lose weight?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white bg-[#1A3129] transition-transform duration-300 shrink-0 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Nutrition coaching helps you lose weight by creating a
                personalized meal plan, keeping you accountable, teaching
                healthy habits, and helping you make lasting lifestyle changes
                instead of relying on quick diets.
              </p>
            </div>
            {/* <!-- Card 3--> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  Can I still enjoy my favorite foods while on a nutrition plan?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white bg-[#1A3129] transition-transform duration-300 shrink-0 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Yes, a good nutrition plan lets you enjoy your favorite foods in
                moderation. It focuses on balance, portion control, and
                healthier swaps — not strict restriction — so you can stay
                consistent and still reach your goals.
              </p>
            </div>
            {/* <!-- Card 4--> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  How often will I have contact with my nutritionist?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white bg-[#1A3129] transition-transform duration-300 shrink-0 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Contact depends on your plan, but most people check in weekly or
                bi-weekly through messages or calls to review progress, adjust
                meals, and stay motivated.
              </p>
            </div>
            {/* <!-- Card 5--> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  How long will it take to see results?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white bg-[#1A3129] transition-transform duration-300 shrink-0 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Most people start noticing changes in 3 to 6 weeks, depending on
                consistency, goals, and body type. Sustainable results usually
                come with steady progress, not quick fixes.
              </p>
            </div>
            {/* <!-- Card 6--> */}
            <div class="p-5 rounded-xl">
              <div
                class="flex justify-between items-center cursor-pointer"
                onclick="toggleDesc(this)"
              >
                <h1 class="text-xl font-semibold text-[#1A3129]">
                  Are the meal plans and recipes provided suitable for
                  vegetarians or vegans?
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white bg-[#1A3129] transition-transform duration-300 shrink-0 ml-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>

              <p class="text-sm text-[#1A3129] mt-3 hidden transition-all duration-300 max-w-[85ch]">
                Yes, all meal plans and recipes can be customized for
                vegetarians or vegans, ensuring you get balanced nutrition and
                enough protein from plant-based sources.
              </p>
            </div>
          </div>

          {/* <!-- RIGHT SIDE --> */}
          <div class="flex flex-col gap-5 items-center justify-center w-full md:w-1/3 rounded-xl p-8">
            <img src={FAQ} alt="Icon" class="w-16 h-16" />
            <h1 class="text-3xl font-semibold text-[#1A3129]">
              Ask your question
            </h1>
            <p class="text-sm text-[#1A3129]">
              Feel free to ask questions anytime
            </p>
            <a
              href="#"
              class="px-4 py-2 bg-[#CBEA7B] rounded-lg text-[#1A3129] font-medium"
            >
              Ask A Question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
