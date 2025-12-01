import React from "react";
import icon1 from "../../assets/Process Page/Card Icons/icon1.png";
import icon2 from "../../assets/Process Page/Card Icons/icon2.png";
import icon3 from "../../assets/Process Page/Card Icons/icon3.png";
import icon4 from "../../assets/Process Page/Card Icons/icon4.png";
import icon5 from "../../assets/Process Page/Card Icons/icon5.png";
import icon6 from "../../assets/Process Page/Card Icons/icon6.png";
import icon7 from "../../assets/Process Page/Card Icons/icon7.png";
import icon8 from "../../assets/Process Page/Card Icons/icon8.png";
import icon9 from "../../assets/Process Page/Card Icons/icon9.png";
import icon10 from "../../assets/Process Page/Card Icons/icon10.png";
const Work = () => {
  return (
    <div>
      {/* <!--How it works Part--> */}

      <section class="flex flex-col items-center gap-7 text-center py-12 md:px-16 px-6">
        <h1 class="text-3xl font-semibold">How It Works</h1>
        <p class="text-sm max-w-[50ch] md:max-w-[103ch]">
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here's how it works
        </p>
      </section>

      {/* <!--Card Part--> */}

      <section class="px-5 py-7 lg:px-24 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-30">
        {/* <!--Card 01--> */}
        <div class="flex flex-col gap-3 relative">
          {/* <!--position number part--> */}
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            01
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon1}
                alt="Initial Consultation Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Initial Consultation</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              We start by scheduling an initial consultation, either in person
              or through a convenient online meeting. During this session, we
              will discuss your health history, lifestyle, goals, and any
              specific dietary requirements.
            </p>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            02
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon2}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Assessing Your Needs</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              Our team of experienced nutritionists and dietitians will conduct
              a thorough assessment of your nutritional needs and create a
              personalized plan tailored to your unique requirements.
            </p>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            03
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon3}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Personalized Nutrition Plan</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              Based on the information gathered, we will develop a personalized
              nutrition plan that takes into account your dietary preferences,
              lifestyle, and health goals. This plan will provide you with clear
              guidelines on what to eat, portion sizes, and meal timing.
            </p>
          </div>
        </div>
        {/* <!--Card 4--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            04
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon4}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Meal Planning and Recipes</p>
            </div>
            <p class="text-sm max-w-[70ch]">
              To make your journey easier, we will provide you with a variety of
              delicious and nutritious meal options, along with recipes that
              align with your personalized nutrition plan.
            </p>
          </div>
        </div>
        {/* <!--Card 5--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            05
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon5}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Ongoing Support</p>
            </div>
            <p class="text-sm max-w-[71ch]">
              Throughout your journey, our team of nutrition experts will be
              there to provide ongoing support, answer your questions, and offer
              guidance. We believe in the power of continuous encouragement to
              help you stay motivated and achieve long-term success.
            </p>
          </div>
        </div>
        {/* <!--Card 6--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            06
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon6}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Progress Tracking</p>
            </div>
            <p class="text-sm max-w-[69ch]">
              We encourage you to track your progress using our user-friendly
              mobile app or website tools. You can log your meals, monitor your
              weight, and track your physical activity, allowing you to have a
              clear picture of your progress and make any necessary adjustments.
            </p>
          </div>
        </div>
        {/* <!--Card 7--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            07
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon7}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Regular Check-ins</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              We will schedule regular check-ins to review your progress,
              address any concerns, and make any necessary adjustments to your
              nutrition plan. Our goal is to ensure that you are consistently
              moving towards your desired outcomes.
            </p>
          </div>
        </div>
        {/* <!--Card 8--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            08
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon8}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Education and Resources</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              Along the way, we will provide you with educational resources,
              such as articles, guides, and videos, to enhance your
              understanding of nutrition and empower you to make informed
              choices for a healthier lifestyle.
            </p>
          </div>
        </div>
        {/* <!--Card 9--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            09
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon9}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Fine-Tuning and Adjustments</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              As your journey progresses and your goals evolve, we will
              fine-tune and make adjustments to your nutrition plan to ensure
              that it continues to align with your changing needs.
            </p>
          </div>
        </div>
        {/* <!--Card 10--> */}
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-8xl text-[#468671] font-semibold absolute -top-18 -z-20">
            10
          </h1>
          {/* <!--Card content--> */}
          <div class="flex flex-col gap-3 pl-10 py-5 bg-[#F6FBE9] overflow-hidden">
            <div class="flex items-center gap-3">
              <img
                src={icon10}
                alt="Assessing Your Needs Icon"
                class="h-12 w-12"
              />
              <p class="font-semibold">Sustainable Lifestyle Habits</p>
            </div>
            <p class="text-sm max-w-[73ch]">
              Our ultimate goal is to help you develop sustainable lifestyle
              habits that will support your long-term health and wellness. We
              will equip you with the knowledge and skills to maintain your
              progress even after you've completed the program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
