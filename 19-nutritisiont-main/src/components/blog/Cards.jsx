import React from "react";
import image1 from "../../assets/Blog Section/Blog Grid Assets/image-1.png";
import image2 from "../../assets/Blog Section/Blog Grid Assets/image-2.png";
import image3 from "../../assets/Blog Section/Blog Grid Assets/image-3.png";
import image4 from "../../assets/Blog Section/Blog Grid Assets/image-4.png";
import image5 from "../../assets/Blog Section/Blog Grid Assets/image-5.png";
import image6 from "../../assets/Blog Section/Blog Grid Assets/image-6.png";
import image7 from "../../assets/Blog Section/Blog Grid Assets/image-7.png";
import image8 from "../../assets/Blog Section/Blog Grid Assets/image-8.png";
import image9 from "../../assets/Blog Section/Blog Grid Assets/image-9.png";
import image10 from "../../assets/Blog Section/Blog Grid Assets/image-10.png";
import image11 from "../../assets/Blog Section/Blog Grid Assets/image-11.png";
import image12 from "../../assets/Blog Section/Blog Grid Assets/image-12.png";
const Cards = () => {
  return (
    <div>
      {/* <!--Blog Section Content--> */}
      <section class="bg-[#F6FBE9] py-12 px-6 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <!-- Card 1 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Weight Loss Tips
            </h3>
            <img src={image1} alt="Weight Loss Tip" class="rounded-lg" />
            <p class="text-gray-600 text-xl">
              10 Effective Strategies for Sustainable Weight Loss
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Discover proven strategies for long-term weight loss success.
                Learn how to create healthy habits, set achievable goals, and
                make sustainable lifestyle changes.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Weight Loss Tips
            </h3>
            <img src={image2} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              The Role of Portion Control in Weight Management
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Learn how portion control can help you manage your weight
                effectively. Find practical tips for controlling portion sizes
                and avoiding overeating.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Weight Loss Tips
            </h3>
            <img src={image3} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Understanding Emotional Eating and How to Overcome It
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Explore the connection between emotions and eating habits. Get
                valuable insights on how to identify emotional triggers and
                develop healthier coping mechanisms.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Weight Loss Tips
            </h3>
            <img src={image4} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              How to Stay Motivated on Your Weight Loss Journey
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Find effective strategies to stay motivated and overcome
                obstacles during your weight loss journey. Get tips on setting
                realistic goals, tracking progress, and celebrating
                achievements.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">Healthy Eating</h3>
            <img src={image5} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              The Benefits of a Plant-Based Diet for Overall Health
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Explore the advantages of adopting a plant-based diet. Learn
                about the potential health benefits, nutrient-rich plant-based
                foods, and tips for transitioning to a plant-based lifestyle.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">Healthy Eating</h3>
            <img src={image6} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Understanding Macronutrients: Carbohydrates, Proteins, and Fats
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Get a comprehensive overview of macronutrients and their role in
                a balanced diet. Discover the best sources of each macronutrient
                and how to incorporate them into your meals.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 7 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Fitness and Exercise
            </h3>
            <img src={image7} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Cardio vs. Strength Training: Which Is Better for Weight Loss?
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Explore the benefits of both cardio and strength training
                exercises for weight loss. Find out how to combine them
                effectively to maximize your results.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 8 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Fitness and Exercise
            </h3>
            <img src={image8} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Building a Home Workout Routine: Tips and Best Practices
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Discover how to create an effective workout routine at home.
                Learn about equipment options, exercise techniques, and ways to
                stay motivated.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 9 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Mindset and Motivation
            </h3>
            <img src={image9} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Developing a Positive Body Image and Self-Confidence
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Explore techniques for cultivating a positive body image and
                improving self-confidence. Learn how to embrace your body and
                appreciate your unique qualities.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 10 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Mindset and Motivation
            </h3>
            <img src={image10} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Overcoming Self-Sabotage in Your Weight Loss Journey
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Identify self-sabotaging behaviors and learn strategies to
                overcome them. Discover how to shift your mindset and develop
                healthier habits.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 11 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Recipes and Meal Planning
            </h3>
            <img src={image11} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Healthy and Flavorful Lunch Ideas for a Busy Lifestyle
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Discover a variety of tasty and nutritious lunch options that
                are perfect for those with busy schedules. These recipes are
                quick to make and packed with essential nutrients.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* <!-- Card 12 --> */}
          <div class="bg-white rounded-xl p-6 flex md:justify-center md:items-center lg:justify-start lg:items-start flex-col gap-4">
            <h3 class="text-[#1A3129] font-semibold text-xl">
              Recipes and Meal Planning
            </h3>
            <img src={image12} alt="Weight Loss Tip" />
            <p class="text-gray-600 text-xl">
              Satisfying and Nutritious Dinner Recipes for Weight Loss
            </p>
            <div class="flex flex-col md:flex-col md:items-center lg:flex-row gap-3 items-start lg:justify-between lg:items-end">
              <p class="text-gray-700 text-sm max-w-[80%]">
                Find a collection of flavorful dinner recipes that are both
                satisfying and supportive of your weight loss goals. These
                recipes are designed to be healthy and delicious.
              </p>
              <button class="bg-[#CBEA7B] text-[#1A3129] font-medium px-4 py-2 rounded-md cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
