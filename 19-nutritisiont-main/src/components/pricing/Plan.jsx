import React from "react";
import iconTick from "../../assets/Pricing Page/iconTick.png";
import iconCross from "../../assets/Pricing Page/iconCross.png";

const Plan = () => {
  return (
    <div>
      {/* <!--Plan Section--> */}
      <section class="bg-[#F6FBE9] flex flex-col md:flex-row md:mx-0 lg:flex-row justify-center gap-5 px-6 lg:mx-20 py-4 lg:py-16">
        {/* <!--Features Plan--> */}
        <div class="max-w-5xl md:max-w-lg">
          <h1 class="pl-5 pt-3 md:pl-5 md:py-6 lg:py-3 pb-3 pr-16 text-white bg-[#234338] rounded-lg">
            Features
          </h1>
          <ul class="text-sm p-5 flex flex-col justify-center gap-18 mt-5">
            <li>Personalized Nutrition Plan</li>
            <li>Mobile App Access</li>
            <li>Email Support</li>
            <li>One -on One Video Consultations</li>
            <li>Recipe Recommendations and Meal Planning</li>
            <li>Priority Support</li>
            <li>Educational Resources and Guides</li>
            <li>Advanced Progress Tracking Tools</li>
            <li>Customized Meal Plans and Recipe Suggestions</li>
            <li>Phone Support</li>
          </ul>
        </div>

        {/* <!--Free Plan 1--> */}
        <div class="hidden md:block lg:block">
          <h1 class="px-16 py-3 text-white bg-[#234338] rounded-lg text-center">
            Basic Plan
          </h1>
          <ul class="text-sm p-5 flex flex-col justify-center items-center gap-16 md:gap-17 lg:gap-16 mt-5">
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
          </ul>
        </div>

        {/* <!--Free Plan 2--> */}
        <div class="hidden lg:block">
          <h1 class="px-16 py-3 text-white bg-[#234338] rounded-lg text-center">
            Premium Plan
          </h1>
          <ul class="text-sm p-5 flex flex-col justify-center items-center gap-16 mt-5">
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconCross} alt="Icon Cross" class="h-7 w-7" />
            </li>
          </ul>
        </div>

        {/* <!--Free Plan 3--> */}
        <div class="hidden md:block lg:block">
          <h1 class="px-16 py-3 text-white bg-[#234338] rounded-lg text-center">
            Ultimate Plan
          </h1>
          <ul class="text-sm p-5 flex flex-col justify-center items-center gap-16 md:gap-17 lg:gap-16 mt-5">
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
            <li>
              <img src={iconTick} alt="Icon Tick" class="h-7 w-7" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Plan;
