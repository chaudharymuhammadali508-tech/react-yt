import React from "react";
import blogImage1 from "../../assets/Blog Section/Blog-image1.png";
import blogImage2 from "../../assets/Blog Section/Blog-image2.png";
import blogImage3 from "../../assets/Blog Section/Blog-image3.png";
import blogImage4 from "../../assets/Blog Section/Blog-image4.png";
import blogContainer1 from "../../assets/Blog Section/Blog-Container1.png";
import blogContainer2 from "../../assets/Blog Section/Blog-Container2.png";
import blogContainer3 from "../../assets/Blog Section/Blog-Container3.png";
import blogContainer4 from "../../assets/Blog Section/Blog-Container4.png";
import iconContainerHeart from "../../assets/Blog Section/icon-Container-Heart.svg";
import iconContainerIcon from "../../assets/Blog Section/icon-Container-icon.svg";

const Blog = () => {
  return (
    <div>
      {/* <!-- Section Blogs--> */}
      <section className="md:px-20">
        {/* <!-- Heading and description Section--> */}
        <div className="flex flex-col items-center gap-4 py-3.5">
          <h1 className="font-semibold text-3xl">Our Blogs</h1>
          <p className="text-sm max-w-[48ch] md:max-w-[105ch] text-center">
            Our blog is a treasure trove of informativ articles written by our
            team of nutritionists, dietitians, and wellness experts. Here's what
            you can expect from our blog.
          </p>
        </div>
        {/* <!-- CARD Section --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-10 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {/* <!-- Card 1 --> */}
          <div className="flex flex-col gap-0.5 bg-[#F6FBE9] py-3.5 rounded-2xl">
            <img
              src={blogImage1}
              alt="Weight Loss"
              className="object-contain h-[250px] sm:h-[300px] lg:h-[350px] w-full"
            />
            <p className="text-sm font-semibold pt-1.5 text-[#666666] lg:pl-13">
              Weight Loss
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold lg:pl-13">
              The Benefits of Hydration for Weight Loss
            </h1>
            <p className="text-sm max-w-[75ch] py-5 lg:pl-13">
              Discover how staying hydrated can support your weight loss goals
              and improve overall health.
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src={blogContainer1}
                alt="Sub container Image"
                className="object-contain max-w-[80%] sm:max-w-[70%] pl-8 sm:pl-12 lg:pl-16 py-5"
              />
              <div className="flex md:items-center justify-center">
                <img
                  src={iconContainerHeart}
                  alt="Heart Icon"
                  className="h-10 w-10"
                />
                <img
                  src={iconContainerIcon}
                  alt="Decore Icon"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="flex flex-col gap-0.5 bg-[#F6FBE9] py-3.5 rounded-2xl">
            <img
              src={blogImage2}
              alt="Mindful Eating"
              className="object-contain h-[250px] sm:h-[300px] lg:h-[350px] w-full"
            />
            <p className="text-sm font-semibold pt-1.5 text-[#666666] lg:pl-13">
              Mindful Eating
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold lg:pl-13">
              Cultivating a Healthy Relationship with Food
            </h1>
            <p className="text-sm max-w-[75ch] py-5 lg:pl-13">
              Learn how practicing mindful eating can help you develop a
              healthier relationship with food and improve your overall
              well-being.
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src={blogContainer2}
                alt="Sub container Image"
                className="object-contain max-w-[80%] sm:max-w-[70%] pl-8 sm:pl-12 lg:pl-16 py-5"
              />
              <div className="flex md:items-center justify-center">
                <img
                  src={iconContainerHeart}
                  alt="Heart Icon"
                  className="h-10 w-10"
                />
                <img
                  src={iconContainerIcon}
                  alt="Decore Icon"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="flex flex-col gap-0.5 bg-[#F6FBE9] py-3.5 rounded-2xl">
            <img
              src={blogImage3}
              alt="Understanding Macronutrients"
              className="object-contain h-[250px] sm:h-[300px] lg:h-[350px] w-full"
            />
            <p className="text-sm font-semibold pt-1.5 text-[#666666] lg:pl-13">
              Understanding Macronutrients
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold lg:pl-13">
              Carbohydrates, Proteins, and Fats
            </h1>
            <p className="text-sm max-w-[75ch] py-5 lg:pl-13">
              Get a comprehensive understanding of macronutrients and their role
              in your diet for optimal health and weight management.
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src={blogContainer3}
                alt="Sub container Image"
                className="object-contain max-w-[80%] sm:max-w-[70%] pl-8 sm:pl-12 lg:pl-16 py-5"
              />
              <div className="flex md:items-center justify-center">
                <img
                  src={iconContainerHeart}
                  alt="Heart Icon"
                  className="h-10 w-10"
                />
                <img
                  src={iconContainerIcon}
                  alt="Decore Icon"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="flex flex-col gap-0.5 bg-[#F6FBE9] py-3.5 rounded-2xl">
            <img
              src={blogImage4}
              alt="Healthy Snacks on the Go"
              className="object-contain h-[250px] sm:h-[300px] lg:h-[350px] w-full"
            />
            <p className="text-sm font-semibold pt-1.5 text-[#666666] lg:pl-13">
              Healthy Snacks on the Go
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold lg:pl-13">
              Quick and Nutritious Options
            </h1>
            <p className="text-sm max-w-[75ch] py-5 lg:pl-13">
              Explore a variety of convenient and healthy snack ideas to keep
              you fueled throughout the day.
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src={blogContainer4}
                alt="Sub container Image"
                className="object-contain max-w-[80%] sm:max-w-[70%] pl-8 sm:pl-12 lg:pl-16 py-5"
              />
              <div className="flex md:items-center justify-center">
                <img
                  src={iconContainerHeart}
                  alt="Heart Icon"
                  className="h-10 w-10"
                />
                <img
                  src={iconContainerIcon}
                  alt="Decore Icon"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
