import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonialsCardLogo from "../../assets/Testimonials/Testimonials-cards-logo.png";
import card1PeopleImage from "../../assets/Testimonials/Card1-people-image.png";
import card2PeopleImage from "../../assets/Testimonials/Card2-people-image.png";
import card3PeopleImage from "../../assets/Testimonials/Card3-people-image.png";
const Testimonials = () => {
  return (
    <div>
      {/* <!-- Testimonial Section--> */}
      <section>
        {/* <!-- Heading section--> */}
        <div className="flex flex-col items-center gap-4 py-5">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Our Testimonials
          </h1>
          <p className="text-sm text-center max-w-[45ch] md:max-w-fit">
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>
        {/* <!-- Card section swipper slidder--> */}
        <div className=" max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* <!-- Card 1 --> */}
            <SwiperSlide>
              <div className="swiper-slide bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                {/* <!-- Logo --> */}
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                {/* <!-- Text --> */}
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  I can't thank Nutritionist enough for their personalized
                  nutrition coaching. It has completely transformed my approach
                  to food and helped me shed those extra pounds. Highly
                  recommended!
                </p>
                {/* <!-- Person --> */}
                <div className="flex items-center gap-3">
                  <img
                    src={card1PeopleImage}
                    alt="Jennifer Anderson"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    Jennifer Anderson
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* <!-- Card 2 --> */}
            <SwiperSlide>
              <div className=" bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  Nutritionist has been a game-changer for me. The expert
                  guidance and support I received from their team made my weight
                  loss journey so much easier. Thank you!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={card2PeopleImage}
                    alt="Robert Johnson"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    Robert Johnson
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- Card 3 --> */}
            <SwiperSlide>
              <div className=" bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  I had struggled with my weight for years until I found
                  Nutritionist. Their personalized approach and tailored
                  nutrition plan made all the difference. I've never felt
                  better!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={card3PeopleImage}
                    alt="Emily Davis"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    Emily Davis
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- Card 4 --> */}
            <SwiperSlide>
              <div className=" bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  The Nutritionist team made healthy eating feel effortless.
                  Their advice is practical and really works!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={card1PeopleImage}
                    alt="Sarah Miller"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    Sarah Miller
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- Card 5 --> */}
            <SwiperSlide>
              <div className=" bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  Their personalized plans are realistic and easy to follow. I
                  finally feel in control of my diet.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={card2PeopleImage}
                    alt="James Lee"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    James Lee
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- Card 6 --> */}
            <SwiperSlide>
              <div className=" bg-white p-10 rounded-2xl shadow flex flex-col gap-6 h-[300px]">
                <img
                  src={testimonialsCardLogo}
                  alt="Logo"
                  className="h-12 w-12"
                />
                <p className="text-sm text-gray-700 max-w-[45ch]">
                  From meal prep to motivation, Nutritionist gave me the tools I
                  needed for lasting change.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={card3PeopleImage}
                    alt="Olivia Brown"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-center font-medium text-gray-800">
                    Olivia Brown
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
