import React, { useState, useEffect, memo } from "react";
import { Download } from "lucide-react";
import about from "../assets/mission.jpg";
import abou from "../assets/vision.jpg";
import Skeleton from "@mui/material/Skeleton";

const Aabout = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = about;
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <div className="bg-white w-full pb-8 h-fit px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between py-5 md:py-10 w-full lg:gap-20 md:12">
        <div className="w-full flex md:w-1/2">
          <div className="mb-4 ">
            <div className="w-12 h-2 bg-[#333333] mb-4"></div>
            <h2 className="text-2xl md:text-3xl inter font-semibold text-[#333333] mb-4">
              Our Mission
            </h2>
            <p className=" text-[17px] font-light leading-7 text-justify poppins text-[#424242] ">
              Our mission is to empower individuals to master refined manners
              and hospitality skills, equipping them to excel in luxury
              environments. Through modern insights and curated programmes, we
              inspire confidence, poise, and cultural appreciation while
              fostering respect and understanding in every setting
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 lg:mb-0">
          {!imageLoaded ? (
            <Skeleton variant="rectangular" width="100%" height={400} />
          ) : (
            <img
              src={about}
              alt="Featured content"
              className="w-full h-82 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-5 md:py-10 w-full lg:gap-20 md:12">
        <div className="w-full md:w-1/2 mb-4 lg:mb-0">
          {!imageLoaded ? (
            <Skeleton variant="rectangular" width="100%" height={400} />
          ) : (
            <img
              src={abou}
              alt="Featured content"
              className="w-full h-82 object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        <div className="w-full flex md:w-1/2">
          <div className=" ">
            <div className="w-12 h-2 bg-[#333333] mb-4"></div>
            <h2 className="text-2xl md:text-3xl inter font-semibold text-[#424242] mb-4">
              Our Vision
            </h2>
            <p className=" text-[17px] font-light leading-7 text-justify poppins text-[#333333] ">
              Our vision is to be one of the leading institutions in luxury
              etiquette and hospitality training, shaping a world where
              confidence, cultural appreciation, and impeccable service
              standards create meaningful connections and transformative
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-5 mb-14 lg:px-15 md:px-10 px-5">
        <h2 className="text-xl font-semibold poppins  mb-2">
          Download Our Brochure
        </h2>
        <div className="border-2 max-w-80 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors group">
          <a href="/brochure.pdf" download className="block w-full h-full">
            <Download className="mx-auto h-12 w-12 text-gray-400 mb-2 group-hover:text-gray-500 transition-colors" />
            <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-700 transition-colors">
              Download Brochure
            </p>
            <p className="text-xs text-gray-500">PDF format</p>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Aabout;
