import React, { useState, useEffect, memo } from "react";
import about from "../assets/hh.jpg";
import Skeleton from "@mui/material/Skeleton";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Handshake,
  Landmark,
  TrendingUp,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    title: "Excellence",
    icon: <ShieldCheck className="text-[#193728]" size={24} />,
    description:
      "We uphold the highest standards in training, ensuring every student achieves mastery in luxury etiquette and hospitality.",
  },
  {
    title: "Trust",
    icon: <Handshake className="text-[#193728]" size={24} />,
    description:
      "We foster trust and authenticity in all our interactions, promoting honesty and professionalism.",
  },
  {
    title: "Respect",
    icon: <Landmark className="text-[#193728]" size={24} />,
    description:
      "We celebrate cultural diversity and individuality, encouraging understanding and inclusivity.",
  },
  {
    title: "Empowerment",
    icon: <TrendingUp className="text-[#193728]" size={24} />,
    description:
      "We inspire confidence and growth, equipping individuals with the skills to thrive in luxury environments.",
  },
  {
    title: "Innovation",
    icon: <Rocket className="text-[#193728]" size={24} />,
    description:
      "We embrace modern techniques and insights to deliver forward-thinking, impactful training.",
  },
  {
    title: "Service",
    icon: <HeartHandshake className="text-[#193728]" size={24} />,
    description:
      "We are dedicated to cultivating a spirit of care and attentiveness, creating exceptional experiences for all.",
  },
];

const OurValues = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = about;
    img.onload = () => setImageLoaded(true);
  }, []);
  return (
    <section className=" pb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full ">
        <div className="w-12 h-2 bg-[#333333] mb-4"></div>
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333333] inter mb-10">
          Our Values
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-6 space-y-3 h-full"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#8C62394D]  p-1.5 rounded-full">
                  {value.icon}
                </div>
                <div className="">
                  <h3 className="text-[15px] mb-3 poppins font-bold text-[#333333]">
                    {value.title}
                  </h3>
                  <p className="text-sm font-light leading-7 poppins text-[#333333]5">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-10 md:pt-15 w-full lg:gap-20 md:12">
        <div className="w-full md:w-1/2 mb-4 lg:mb-0">
          {!imageLoaded ? (
            <Skeleton variant="rectangular" width="100%" height={360} />
          ) : (
            <img
              src={about}
              alt="Featured content"
              className="w-full h-82 md:h-110 object-cover "
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        <div className="w-full flex md:w-1/2">
          <div className="space-y-9 ">
            <div className="">
              <div className="w-12 h-2 bg-[#333333] mb-4"></div>
              <h2 className="text-2xl md:text-3xl inter font-semibold text-[#424242] mb-4">
                Our Programmes
              </h2>
            </div>
            <p className=" text-[18px] font-light leading-9 poppins text-[#333333] ">
              All courses at EMS are held in person at our state-of-the-art
              facility in Abuja, where we uphold the highest standards of
              training. Our comprehensive curriculum covers every aspect of
              luxury service, from mastering table settings and fine dining
              service to cellar management, silver and jewellery care, wardrobe
              maintenance, and more. Students will also gain expertise in butler
              pantry duties and efficiently managing the daily operations of
              large households.
            </p>
            <NavLink to="/programs">
              {" "}
              <button className=" block rounded-sm bg-[#19392c] text-[16px] font-semibold cursor-pointer text-white px-5 py-2.5">
                Explore Courses
              </button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
});

export default OurValues;
