import React from "react";
import slider from "../assets/abo.jpg";
import { NavLink } from "react-router-dom";
// import { MoveRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white w-full">
      <div className="">
        <div className="w-full relative h-[50vh] md:h-[80vh]">
          <img
            src={slider}
            alt="img"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 opacity-40 z-10"></div>
          <h1 className="poppins absolute bottom-[30%] w-full text-center font-semibold text-3xl md:text-6xl text-white">
            About Us
          </h1>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          {/* Top border + Heading */}
          <div className="mb-6">
            <div className="w-12 h-2 bg-[#333333] mb-4"></div>
            <h2 className="text-3xl inter md:text-5xl font-semibold text-[#333333]">
              Who We Are
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column (two paragraphs) */}
            <div className="space-y-8">
              <p className="text-[17px] font-light leading-6           text-[#333333]">
                The Etiquette and Management School (EMS) is a premier
                institution dedicated to providing individuals with exceptional
                training in etiquette, effective communication, household
                management, verbal expression, attitude, and posture. Our
                comprehensive curriculum combines world-class education with
                practical, hands-on training, equipping students with the
                essential skills needed to excel in both personal and
                professional environments.
              </p>
              <p className="text-[17px] font-light leading-6 text-[#333333]">
                At EMS, we focus on cultivating strong social skills,
                confidence, and refined behaviour, making us the leading choice
                for those seeking excellence in etiquette and personal
                presentation. Our approach blends academic theory with
                real-world applications, ensuring that students are fully
                prepared for leadership roles in the hospitality and service
                industries. The curriculum is designed to meet global standards
                in luxury home management, business protocol, and personal
                development.
              </p>
            </div>

            {/* Right Column (single paragraph + button) */}
            <div className="flex flex-col justify-start space-y-8">
              <p className="text-[17px] font-light leading-6  text-[#333333]">
                Our programmes cater to a diverse range of individuals,
                including young people, domestic staff, homeowners, government
                officials, and corporate organisations. From building confidence
                in homeowners to offering specialised business and protocol
                courses, EMS tailors its courses to meet the unique needs of
                each participant. Whether it’s refining table manners, enhancing
                professional interactions, or mastering luxury estate
                management, our students acquire the skills to confidently
                navigate a variety of hospitality settings.
              </p>
              <NavLink to="/programs">
                {" "}
                <button className="inline-flex items-center cursor-pointer justify-center w-max bg-[#19392c] text-white font-medium text-base md:text-lg px-6 py-3 hover:bg-[#193728a4] rounded-md transition">
                  Explore Courses
                  {/* <MoveRight className="ml-2" size={20} /> */}
                </button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
