import React from "react";
import iconContainer from "../../assets/Features/icon-Container.png";
import iconContainer1 from "../../assets/Features/icon-Container(1).png";
import iconContainer2 from "../../assets/Features/icon-Container(2).png";
import iconContainer3 from "../../assets/Features/icon-Container(3).png";
// import iconContainer4 from "../../assets/Features/icon-Container(4).png";
// import iconContainer5 from "../../assets/Features/icon-Container(5).png";
import svgDecore1 from "../../assets/About/SVG/svg-Decore1.svg";
import svgDecore2 from "../../assets/About/SVG/svg-Decore2.svg";
const Acheivements = () => {
  return (
    <div>
      {/* <!--Company Achievements Section--> */}
      {/* <!--Heading Section--> */}
      <section className="flex flex-col items-center md:gap-10 gap-1 text-center py-2">
        <h1 className="text-3xl font-semibold">Company Achievements</h1>
        <p className="text-sm max-w-[50ch] md:max-w-[103ch]">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients. Here are some of our
          notable achievements
        </p>
      </section>
      s{/* <!--Achievements--> */}
      <section className="md:px-16 md:py-20 px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-20">
          {/* <!-- Feature Item 1 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconContainer}
                alt="Personalized Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                10,000+ Transformations
              </h2>
            </div>
            <p className="pt-2.5 max-w-[70ch]">
              Our personalized nutrition plans have helped thousands of
              individuals reach their weight loss goals and maintain a healthy
              lifestyle.
            </p>
          </div>
          {/* <!-- Feature Item 2 --> */}
          <div>
            <div className="flex items-center gap-4 max-w-[35ch]">
              <img
                src={iconContainer1}
                alt="Guidance feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Recognition for Excellence
              </h2>
            </div>
            <p className="pt-2.5 max-w-[70ch]">
              Nutritionist has been recognized as a leading provider of
              personalized nutrition coaching, receiving accolades for our
              innovative approach and commitment to client success.
            </p>
          </div>
          {/* <!-- Feature Item 3 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconContainer2}
                alt="Food Tracking feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Positive Client Reviews
              </h2>
            </div>
            <p className="pt-2.5 max-w-[70ch]">
              We have received numerous testimonials from satisfied clients who
              have experienced significant improvements in their health, weight,
              and overall well-being through our coaching program.
            </p>
          </div>
          {/* <!-- Feature Item 4 --> */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={iconContainer3}
                alt="Meal Planning Feature Icon"
                className="w-14 h-14"
              />
              <h2 className="text-lg font-semibold mb-1">
                Collaborate With Top Health Experts.
              </h2>
            </div>
            <p className="pt-2.5 max-w-[70ch]">
              Nutritionist has established partnerships with respected
              nutritionists, dietitians, and health experts to ensure that our
              clients receive the highest quality guidance and support.
            </p>
          </div>
        </div>
      </section>
      {/* <!--Proud of our Achievements Section --> */}
      <section className="md:px-10 md:py-16 md:m-16 px-10 py-10 flex md:justify-between flex-col md:flex-col lg:flex-row justify-center text-center md:text-start gap-5 items-center bg-[#F6FBE9] relative overflow-hidden">
        <img
          src={svgDecore1}
          alt="Decore item 1"
          className="absolute top-0 -left-5 z-0"
        />
        <img
          src={svgDecore2}
          alt="Decore item 2"
          className="absolute bottom-0 -right-5 z-0"
        />
        <div className="md:px-10 flex flex-col gap-5 relative">
          <h2 className="text-2xl font-semibold">
            We Are Proud of Our Achievements
          </h2>
          <p className="text-sm md:max-w-[115ch]">
            But our ultimate satisfaction comes from seeing our clients achieve
            their goals and live healthier, happier lives. Join Nutritionist
            today and embark on your own transformative journey towards optimal
            health and well-being.
          </p>
        </div>
        <button className=" h-[63px] w-full md:w-[154px] rounded-lg cursor-pointer hover:bg-[#aae710] bg-[#CBEA7B] relative">
          Book A Demo
        </button>
      </section>
    </div>
  );
};

export default Acheivements;
