import React, { useState, useEffect, memo } from "react";
import woman from "../assets/we1.jpg";
import { MoveRightIcon, MoveUpIcon } from "lucide-react";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

const Student2 = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = woman;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="md:p-10 md:py-10 py-4 lg:px-15 md:px-10 px-5 home-2">
      <h1 className="font-bold text-[#333333] mx-auto block md:max-w-[675px] mb-4 w-full text-center text-2xl capitalize lg:text-[35px] ">
        We help every student to stand out from the rest
      </h1>
      <p className="text-[17px] mx-auto block text-center md:max-w-[675px] w-full mb-3 font-light text-[#555]">
        Our comprehensive programs and expert guidance empower students to build
        confidence and self-assurance through hands on experience and mentorship
      </p>

      <div className="relative w-full gap-10 mt-10">
        {!imageLoaded ? (
          <Skeleton variant="rectangular" width="100%" height={600} />
        ) : (
          <img
            src={woman}
            alt="Student writing"
            className="object-cover w-full h-[600px] rounded-sm"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute w-full h-full right-0 bottom-0 inset-0 bg-black/30"></div>
        <div className="bg-white absolute right-2 bottom-2 md:bottom-16 z-30 rounded-lg shadow-md p-5 w-fit">
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">
              World-class teachers
            </h2>
            <Link to="/programs">
              <MoveUpIcon
                className="text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition"
                size={24}
              />
            </Link>
          </div>
          <p className="font-normal max-w-[380px] text-sm md:text-[17px] text-[#333333] mb-2.5">
            Learn from the best! Our expert educators inspire and guide you to
            reach your full potential.
          </p>
          <hr className="w-full h-[1px] opacity-40 mb-5 bg-[#000000]" />
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">
              Well-equipped facilities
            </h2>
            <Link to="/programs">
              <MoveUpIcon
                className="text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition"
                size={24}
              />
            </Link>
          </div>
          <p className="font-normal max-w-[380px] text-sm md:text-[17px] text-[#333333] mb-2.5">
            State-of-the-art infrastructure and cutting edge technology to fuel
            your creativity and innovation.
          </p>
          <hr className="w-full h-[1px] opacity-40 mb-5 bg-[#000000]" />
          <div className="flex justify-between items-center mb-3.5">
            <h2 className="font-semibold text-[#333333] text-lg md:text-xl">
              A lifetime of connection
            </h2>
            <Link to="/programs">
              <MoveUpIcon
                className="text-[#6C4F40] border border-[#6C4F40] rounded-full p-1 cursor-pointer hover:bg-[#6C4F40]/10 transition"
                size={24}
              />
            </Link>
          </div>
          <p className="font-normal max-w-[380px] text-sm md:text-[17px] text-[#333333] mb-2.5">
            Join our community and build lasting relationships with peers and
            mentors that open doors to new opportunities.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-10">
        {/* <NavLink to="/programs">
          {" "}
          <button className="bg-[#19392c] cursor-pointer space-x-4 flex items-center hover:bg-[#154b33] transition text-white font-medium rounded-[10px] py-2 px-6">
            <p className="">View Program</p>
            <MoveRightIcon
              size={20}
              className="text-white border border-white rounded-full p-1"
            />
          </button>{" "}
        </NavLink> */}
        {/* <p className="text-[#333333] font-semibold text-base flex items-center gap-x-2 cursor-pointer hover:underline">
          View Program
          <MoveRightIcon
            size={20}
            className="text-[#6C4F40] border border-[#6C4F40] rounded-full p-1"
          />
        </p> */}
      </div>
    </div>
  );
});

export default Student2;
