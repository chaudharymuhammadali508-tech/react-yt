import React from "react";

const Card = () => {
  return (
    <div>
      {/* <!-- Toggle Buttons --> */}
      <section>
        <div class="flex flex-col items-center gap-3 py-6">
          <div class="bg-[#F6FBE9] rounded-full p-1 flex">
            <button
              id="monthly-btn"
              class="rounded-full px-5 py-2 text-sm font-medium text-black hover:bg-[#234338] hover:text-white transition-all duration-300"
            >
              Monthly
            </button>
            <button
              id="yearly-btn"
              class="rounded-full px-5 py-2 text-sm font-medium text-black hover:bg-[#234338] hover:text-white transition-all duration-300"
            >
              Yearly
            </button>
          </div>
          <p class="text-sm text-[#4C4C4D]">Save 50% on Yearly</p>
        </div>
        {/* <!--Pricing Cards--> */}
        <div class="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-10 py-6">
          {/* <!-- Card 1 --> */}
          <div class="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 md:p-10 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div class="flex flex-col">
              <h2 class="text-2xl font-semibold">Basic Plan</h2>
              <p class="text-sm text-[#4C4C4D]">Up to 50% off on Yearly Plan</p>
              <ul class="flex flex-col gap-3 my-4 p-5 rounded-xl bg-[#DCF1A7] text-sm">
                <li>
                  Personalized nutrition plan tailored to your goals and dietary
                  preferences.
                </li>
                <li>
                  Access to our mobile app for convenient meal tracking and
                  progress monitoring.
                </li>
                <li>Email support to address your questions and concerns.</li>
                <li>
                  Regular check-ins with a dedicated nutritionist to review your
                  progress and provide guidance.
                </li>
              </ul>
            </div>
            <div class="flex items-center gap-1">
              <svg
                class="h-7 w-7 text-[#2C5446]"
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
                class="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="49"
                data-yearly="24"
              >
                49
              </p>
              <p class="text-sm">/Month</p>
            </div>
            <button class="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 md:p-10 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div>
              <h2 class="text-2xl font-semibold">Premium Plan</h2>
              <p class="text-sm text-[#4C4C4D]">Up to 50% off on Yearly Plan</p>
              <ul class="flex flex-col gap-3 my-4 p-5 rounded-xl bg-[#DCF1A7] text-sm">
                <li>All the features included in the Basic Plan.</li>
                <li>
                  One-on-one video consultations with your dedicated
                  nutritionist for more personalized guidance and support.
                </li>
                <li>Recipe recommendations and meal planning assistance.</li>
                <li>
                  Priority email support for quicker responses to your
                  inquiries.
                </li>
                <li>
                  Educational resources and guides to deepen your understanding
                  of nutrition and healthy habits.
                </li>
              </ul>
            </div>
            <div class="flex items-center gap-1">
              <svg
                class="h-7 w-7 text-[#2C5446]"
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
                class="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="79"
                data-yearly="39"
              >
                79
              </p>
              <p class="text-sm">/Month</p>
            </div>
            <button class="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="pricing-card flex flex-col justify-between bg-[#F6FBE9] p-6 md:p-10 rounded-2xl shadow hover:shadow-lg transition-shadow w-full md:w-[360px]">
            <div>
              <h2 class="text-2xl font-semibold">Ultimate Plan</h2>
              <p class="text-sm text-[#4C4C4D]">Up to 50% off on Yearly Plan</p>
              <ul class="flex flex-col gap-3 my-4 p-5 rounded-xl bg-[#DCF1A7] text-sm">
                <li>All the features included in the Plus Plan.</li>
                <li>
                  Unlimited access to video consultations with your dedicated
                  nutritionist for ongoing support and accountability.
                </li>
                <li>
                  Advanced progress tracking tools to monitor your weight, body
                  measurements, and fitness goals.
                </li>
                <li>
                  Customized meal plans and recipe suggestions based on your
                  preferences and nutritional needs.
                </li>
                <li>
                  Priority email and phone support for immediate assistance.
                </li>
              </ul>
              <p class="p-5 bg-[#234338] text-sm text-white rounded-lg mb-4">
                The Premium Plan is designed for individuals who are committed
                to achieving significant results and require the highest level
                of support and personalization.
              </p>
            </div>
            <div class="flex items-center gap-1">
              <svg
                class="h-7 w-7 text-[#2C5446]"
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
                class="text-4xl text-[#2C5446] font-semibold price"
                data-monthly="99"
                data-yearly="49"
              >
                99
              </p>
              <p class="text-sm">/Month</p>
            </div>
            <button class="choose-btn mt-4 p-3 bg-[#CBEA7B] rounded-xl transition-all duration-300 hover:bg-[#234338] hover:text-white">
              Choose Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
