import React from "react";
import iconcontainer from "../../assets/Features/icon-Container.png";
import iconcontainer1 from "../../assets/Features/icon-Container(1).png";
import iconcontainer2 from "../../assets/Features/icon-Container(2).png";
import iconcontainer3 from "../../assets/Features/icon-Container(3).png";
import iconcontainer4 from "../../assets/Features/icon-Container(4).png";
import iconcontainer5 from "../../assets/Features/icon-Container(5).png";
const Features = () => {
  return (
    <div>
      {/* <!-- Section 3 Features --> */}
      <section className="text-black px-6 md:px-20 md:py-18 py-16">
        {/* <!-- Top Heading --> */}
        <div className="text-center pb-10 md:pb-16">
          <h1 className="text-3xl font-bold mb-3">Features</h1>
          <p className="text-base max-w-2xl mx-auto">
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>

        {/* <!-- Features Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <!-- Feature Item 1 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconcontainer}
                alt="Personalized Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Personalized Nutrition Plans
              </h2>
            </div>
            <p className="pt-2.5">
              Receive a tailored nutrition plan designed specifically for your
              body and goals. Our certified nutritionists will consider your
              unique needs, dietary preferences, and health conditions to create
              a plan that suits you best.
            </p>
          </div>

          {/* <!-- Feature Item 2 --> */}
          <div>
            <div className="flex items-center gap-4 max-w-[35ch]">
              <img
                src={iconcontainer1}
                alt="Guidance feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Guidance from Certified Nutritionists
              </h2>
            </div>
            <p className="pt-2.5">
              Our team of experienced and certified nutritionists will provide
              professional guidance and support throughout your journey. They
              will answer your questions, address your concerns, and keep you
              motivated as you work towards your goals.
            </p>
          </div>

          {/* <!-- Feature Item 3 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconcontainer2}
                alt="Food Tracking feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Food Tracking and Analysis
              </h2>
            </div>
            <p className="pt-2.5">
              Effortlessly track your food intake using our user-friendly app.
              Our nutritionists will analyze your data to provide insights into
              your eating habits, help you identify areas for improvement, and
              make personalized recommendations.
            </p>
          </div>

          {/* 
            <!-- Feature Item 4 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconcontainer3}
                alt="Meal Planning Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Meal Planning and Recipes
              </h2>
            </div>
            <p className="pt-2.5">
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs. Our nutritionists will also create
              personalized meal plans, making it easier for you to stay on track
              and enjoy nutritious meals.
            </p>
          </div>

          {/* 
            <!-- Feature Item 5 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconcontainer4}
                alt="Lifestyle Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Lifestyle and Behavior Coaching
              </h2>
            </div>
            <p className="pt-2.5">
              Achieving sustainable results requires more than just a diet plan.
              Our nutritionists will work with you to develop healthy habits,
              address emotional eating, and provide strategies to overcome
              obstacles along the way.
            </p>
          </div>

          {/* 
            <!-- Feature Item 6 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconcontainer5}
                alt="Nutritional Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Nutritional Education and Workshops
              </h2>
            </div>
            <p className="pt-2.5">
              Expand your knowledge of nutrition through informative articles
              and educational workshops. Our nutritionists will equip you with
              the knowledge and tools to make informed choices for long-term
              success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
