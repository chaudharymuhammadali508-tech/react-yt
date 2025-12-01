import React from "react";
import Nutritionistlogo from "../../assets/Logo/Nutritionist-logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <div>
      {/* <!--Footer Section--> */}
      <section class="bg-[#1A3129] p-5 lg:px-24 lg:py-10 flex flex-col gap-6">
        {/* <!--Upper nav type footer section--> */}
        <div class="flex flex-col lg:flex-row justify-between items-center gap-5">
          {/* <!--Logo--> */}
          <img src={Nutritionistlogo} alt="Nutritionist" class="h-10 w-auto" />

          {/* <!--Nav Links--> */}
          <ul class="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 text-center">
            <li>
              <Link
                to="/"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to=".process"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                class="hover:text-green-400 transition hover:underline text-white"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* <!--Go To Top--> */}
          <HashLink
            smooth
            to="#top"
            class="flex items-center gap-3 scroll-smooth"
          >
            <p class="text-white text-sm lg:text-base">Go To Top</p>
            <svg
              class="m-1 p-1 rounded-full cursor-pointer bg-[#234338]"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0002 25.5C16.296 25.5 15.7252 24.9292 15.7252 24.225L15.7252 12.9405L12.3943 16.6087C11.9062 17.1163 11.0991 17.1321 10.5915 16.6441C10.0839 16.156 10.0681 15.3489 10.5561 14.8413L16.0811 8.89129C16.3215 8.64129 16.6534 8.5 17.0002 8.5C17.347 8.5 17.6789 8.64129 17.9193 8.89129L23.4443 14.8413C23.9323 15.3489 23.9165 16.156 23.4089 16.6441C22.9013 17.1321 22.0942 17.1163 21.6061 16.6087L18.2752 12.9405V24.225C18.2752 24.9292 17.7044 25.5 17.0002 25.5Z"
                fill="white"
              />
            </svg>
          </HashLink>
        </div>

        {/* <!--Lower footer section--> */}
        <div class="bg-[#2C5446] flex flex-col lg:flex-row justify-between items-center gap-6 rounded-lg p-6 lg:p-10 text-center lg:text-left">
          {/* <!--Contact Info--> */}
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
            {/* <!--Email--> */}
            <div class="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z"
                  fill="#CBEA7B"
                />
                <path
                  d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z"
                  fill="#CBEA7B"
                />
              </svg>
              <p class="text-white text-sm lg:text-base">hello@squareup.com</p>
            </div>
            {/* <!--Phone--> */}
            <div class="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z"
                  fill="#CBEA7B"
                />
              </svg>
              <p class="text-white text-sm lg:text-base">+91 91813 23 2309</p>
            </div>
            {/* <!--Location--> */}
            <div class="flex items-center gap-2">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.78975 20.101C7.81995 20.1185 7.84369 20.1321 7.8605 20.1415L7.88843 20.1571C8.1113 20.2794 8.38776 20.2785 8.61084 20.1575L8.6395 20.1415C8.65631 20.1321 8.68005 20.1185 8.71025 20.101C8.77066 20.066 8.85697 20.015 8.9655 19.9482C9.18246 19.8146 9.48875 19.6176 9.85461 19.3591C10.5851 18.8431 11.5597 18.0774 12.5365 17.0773C14.4807 15.0868 16.5 12.0962 16.5 8.25C16.5 3.69365 12.8063 0 8.25 0C3.69365 0 0 3.69365 0 8.25C0 12.0962 2.01932 15.0868 3.96346 17.0773C4.94025 18.0774 5.91491 18.8431 6.64539 19.3591C7.01125 19.6176 7.31754 19.8146 7.5345 19.9482C7.64303 20.015 7.72934 20.066 7.78975 20.101ZM8.25 11.25C9.90685 11.25 11.25 9.90685 11.25 8.25C11.25 6.59315 9.90685 5.25 8.25 5.25C6.59315 5.25 5.25 6.59315 5.25 8.25C5.25 9.90685 6.59315 11.25 8.25 11.25Z"
                  fill="#CBEA7B"
                />
              </svg>
              <p class="text-white text-sm lg:text-base">
                Somewhere in the World
              </p>
            </div>
          </div>

          {/* <!--Copyright--> */}
          <div class="text-white text-sm lg:text-base">
            © 2023 Nutritionist. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
