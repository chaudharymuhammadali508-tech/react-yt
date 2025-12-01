import React from "react";
import image1 from "../../assets/About/Our Story/image1.png";
import image2 from "../../assets/About/Our Story/image2.png";
import image3 from "../../assets/About/Our Story/image3.png";
import image4 from "../../assets/About/Our Story/image4.png";
import image5 from "../../assets/About/Our Story/image5.png";
import image6 from "../../assets/About/Our Story/image6.png";
import image7 from "../../assets/About/Our Story/image7.png";
import image8 from "../../assets/About/Our Story/image8.png";
import image9 from "../../assets/About/Our Story/image9.png";
import image10 from "../../assets/About/Our Story/image10.png";
const Story = () => {
  return (
    <div>
      {/* <!--Our Story Section--> */}

      <section className="pt-10 pb-5">
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-3xl font-semibold">Our Story</h1>
          <p className="text-sm max-w-[48ch] md:max-w-[99ch]">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey.
          </p>
        </div>
      </section>

      {/* <!-- Story Card Section--> */}

      <section className="bg-[#F6FBE9] py-16 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center">
          {/* <!-- Card 1 --> */}
          <div className="border-b-10 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B] border-[#CBEA7B] order-1">
            <img src={image1} alt="Card 1" className="w-full object-contain" />
          </div>
          <div className="p-6 text-start order-2">
            <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
              Inspiring Transformations Story
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
              Nutritionist continues to empower individuals to transform their
              lives through personalized nutrition coaching. With an expanding
              client base and a growing team of experts, we remain committed to
              our goal of helping people lose weight, improve their health, and
              lead happier, more fulfilling lives. Our journey of inspiring
              transformations continues, one client at a time.
            </p>
            <p className="text-sm pt-3 text-black lg:pt-7">July 1, 2025</p>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="p-6 h-full flex lg:justify-end lg:text-end lg:items-center lg:order-3 order-4 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B]">
            <div className="lg:text-end text-start">
              <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
                Recognition and Accolades Story{" "}
              </h1>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
                {" "}
                Nutritionist received industry recognition for its excellence in
                personalized nutrition coaching. Our innovative approach and
                dedication to client success earned us accolades and solidified
                our position as a leading provider in the field.{" "}
              </p>
              <p className="text-sm pt-3 text-black lg:pt-7">March 10, 2023</p>
            </div>
          </div>
          <div className="lg:border-b-0 border-b-10 border-[#CBEA7B] lg:order-4 order-3">
            <img src={image2} alt="Card 2" className="w-full object-contain" />
          </div>

          {/* <!-- Card 3 --> */}
          <div className="lg:border-r-10 lg:border-b-0 border-b-10 border-[#CBEA7B] order-5">
            <img src={image3} alt="Card 3" className="w-full object-contain" />
          </div>
          <div className="p-6 text-start order-6">
            <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
              Continued Growth Story
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
              Nutritionist celebrated serving over 5,000 clients, a testament to
              our commitment to helping individuals achieve their health and
              weight loss goals. This milestone highlighted the positive impact
              we have made on the lives of thousands of people.
            </p>
            <p className="text-sm pt-3 text-black lg:pt-7">November 2, 2021</p>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="p-6 h-full flex lg:justify-end lg:items-center lg:text-end lg:order-7 order-8 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B] ">
            <div className="inline-block lg:text-end text-start">
              <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
                Collaborating for Success Story{" "}
              </h1>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
                {" "}
                Nutritionist established partnerships with renowned health
                professionals, including nutritionists, dietitians, and wellness
                experts. These collaborations allowed us to incorporate diverse
                perspectives and expertise, ensuring the highest level of
                guidance for our clients.{" "}
              </p>
              <p className="text-sm pt-3 text-black lg:pt-7">July 15, 2019</p>
            </div>
          </div>
          <div className="lg:border-b-0 border-b-10 border-[#CBEA7B] lg:order-8 order-7">
            <img src={image4} alt="Card 4" className="w-full object-contain" />
          </div>

          {/* <!-- Card 5 --> */}
          <div className="lg:border-r-10 lg:border-b-0 border-b-10 border-[#CBEA7B] order-9">
            <img src={image5} alt="Card 5" className="w-full object-contain" />
          </div>
          <div className="p-6 text-start order-10">
            <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
              Enhanced Support Story
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
              In response to the growing demand for personalized nutrition
              coaching, Nutritionist expanded its team of qualified
              nutritionists and dietitians. This milestone enabled us to provide
              even more individualized care and support to our clients.
            </p>
            <p className="text-sm pt-3 text-black lg:pt-7">April 1, 2018</p>
          </div>
          {/* 
            <!-- Card 6 --> */}
          <div className="p-6 h-full flex lg:justify-end lg:items-center lg:text-end lg:order-11 order-12 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B]">
            <div className="inline-block lg:text-end text-start">
              <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
                Innovating for Clients Story{" "}
              </h1>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
                {" "}
                Nutritionist introduced a mobile app, revolutionizing the way
                clients engage with their personalized nutrition plans. The app
                allowed for easy tracking of progress, access to resources, and
                seamless communication with their dedicated nutrition coaches.{" "}
              </p>
              <p className="text-sm pt-3 text-black lg:pt-7">
                January 20, 2017
              </p>
            </div>
          </div>
          <div className="lg:border-b-0 border-b-10 border-[#CBEA7B] lg:order-12 order-11">
            <img src={image6} alt="Card 6" className="w-full object-contain" />
          </div>

          {/* <!-- Card 7 --> */}
          <div className="lg:border-r-10 lg:border-b-0 border-b-10 border-[#CBEA7B] order-13">
            <img src={image7} alt="Card 7" className="w-full object-contain" />
          </div>
          <div className="p-6 text-start order-14">
            <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
              Celebrating Success Stories
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
              Nutritionist celebrated its 500th client success story. These
              stories showcased the positive impact of personalized nutrition
              coaching on individuals' lives, further motivating our team to
              continue providing exceptional services.
            </p>
            <p className="text-sm pt-3 text-black lg:pt-7">September 5, 2015</p>
          </div>

          {/* <!-- Card 8 --> */}
          <div className="p-6 h-full flex lg:justify-end lg:items-center lg:text-end lg:order-15 order-16 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B]">
            <div className="inline-block lg:text-end text-start">
              <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
                Expanding Reach Story{" "}
              </h1>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
                {" "}
                Nutritionist expanded its services by launching an online
                platform, allowing individuals from all over the world to access
                personalized nutrition plans and expert guidance. This milestone
                brought convenience and accessibility to our growing client
                base.{" "}
              </p>
              <p className="text-sm pt-3 text-black lg:pt-7">June 10, 2014</p>
            </div>
          </div>
          <div className="lg:border-b-0 border-b-10 border-[#CBEA7B] lg:order-16 order-15">
            <img src={image8} alt="Card 8" className="w-full object-contain" />
          </div>
          {/* 
            <!-- Card 9 --> */}
          <div className="lg:border-r-10 lg:border-b-0 border-b-10 border-[#CBEA7B] order-17">
            <img src={image9} alt="Card 9" className="w-full object-contain" />
          </div>
          <div className="p-6 text-start order-18">
            <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
              Research and Expertise Story
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
              After extensive research and collaborating with nutrition experts,
              Sarah Mitchell and her team developed a comprehensive program
              rooted in scientific knowledge and evidence-based strategies. This
              milestone marked the establishment of Nutritionist as a trusted
              source of personalized nutrition coaching.
            </p>
            <p className="text-sm pt-3 text-black lg:pt-7">March 15, 2012</p>
          </div>

          {/* <!-- Card 10 --> */}
          <div className="p-6 h-full flex lg:justify-end lg:items-center lg:text-end lg:order-19 order-20 lg:border-b-0 lg:border-r-10 lg:border-[#CBEA7B]">
            <div className="inline-block lg:text-end text-start">
              <h1 className="lg:text-2xl text-xl font-semibold text-[#1A3129] border-b-[5px] border-[#CBEA7B] inline-block pb-1">
                The Inception Story{" "}
              </h1>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-[60ch] text-sm">
                {" "}
                On this day, Nutritionist was born with the vision of helping
                individuals achieve their weight loss and health goals through
                personalized nutrition coaching. The founder, Sarah Mitchell,
                recognized the need for a sustainable and effective approach to
                healthy living, and thus began the journey of Nutritionist.{" "}
              </p>
              <p className="text-sm pt-3 text-black lg:pt-7">January 1, 2010</p>
            </div>
          </div>
          <div className="lg:border-b-0 border-b-10 border-[#CBEA7B] lg:order-20 order-19">
            <img
              src={image10}
              alt="Card 10"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
