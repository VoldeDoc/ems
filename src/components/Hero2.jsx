import React, { useState, useEffect, useRef, useMemo } from "react";
import slider from "../assets/slider.jpg";
import chair from "../assets/slider1.jpg";
import slider1 from "../assets/Slider5.jpg";
import slider2 from "../assets/Slider6.jpg";
// import { NavLink } from "react-router-dom";
// import vertical from "../assets/vertical.png";
import {
  Book,
  FolderOpenDotIcon,
  GraduationCapIcon,
  // MoveRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Hero2 = () => {
  const images = useMemo(() => [slider, chair, slider1, slider2], []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [isDragging, images.length]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === images.length) {
        setCurrentSlide(0);
      }
    };
    const sliderNode = sliderRef.current?.firstChild;
    if (sliderNode) {
      sliderNode.addEventListener("transitionend", handleTransitionEnd);
    }
    return () => {
      if (sliderNode) {
        sliderNode.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [currentSlide, images.length]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const x = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    setStartX(x);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const diff = x - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    const movedBy = translateX;
    if (Math.abs(movedBy) > threshold) {
      if (movedBy > 0) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTranslateX(0);
  };

  return (
    <div
      className="relative bg-white w-full h-fit overflow-hidden"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Background slider with dark overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${
              -(currentSlide + 1) * 100 + (translateX / window.innerWidth) * 100
            }%)`,
            transition: isDragging ? "none" : "transform 500ms ease-in-out",
          }}
        >
          <div className="min-w-full h-full">
            <img
              src={images[images.length - 1]}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="min-w-full h-full">
            <img
              src={images[0]}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Hero Content (z-20 ensures it stays above overlay) */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between min-h-fit px-4 md:px-8">
        {/* First Section */}
        <div className="h-fit flex items-center justify-center text-white pt-19 md:pt-40 w-full md:justify-start">
          <div className="md:text-start text-center">
            <h1 className="md:text-[53px] poppins text-2xl  md:leading-[3.0rem] leading-10 font-semibold md:max-w-[620px] md:mb-4 mb-2">
              The <span className="">Etiquette</span> and Management School
            </h1>
            <p className="text-lg py-8  font-medium md:text-xl sm:max-w-[300px] md:max-w-[560px] mb-3">
              A premier institution dedicated to delivering world-class training
              in etiquette, effective communication, and professional household
              and hospitality management for individuals and institutions alike.
            </p>
            {/* <div className="flex gap-x-2 items-center justify-center md:justify-start">
              <NavLink to="/programs">
                <button className=" bg-[#193728] font-semibold md:text-[21px] text-[12px] px-3 py-1.5 cursor-pointer text-white">
                  <div className="flex items-center space-x-2.5">
                    <h4 className="font-semibold md:text-[18px] text-[14px] text-white">
                      Explore Courses
                    </h4>
                    <MoveRight
                      className=" border-1 border-white p-[3px] rounded-full"
                      size={16}
                      color="white"
                    />
                  </div>
                </button>
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>

      {/* Second Section (removed absolute, added margin top & bottom) */}
      <div className="relative z-20 mt-5 mb-4 px-4 md:px-8">
        <div
          onClick={() => navigate("/programs")}
          className="flex w-full mx-auto gap-5 bg-[#F1ECE3] flex-wrap md:px-7 px-4 md:py-4 py-2 justify-between items-center"
        >
          {[
            {
              icon: <Book size={22} color="#193728" className="mb-2" />,
              title: "Explore Courses",
              text: "Master skills for hospitality and etiquette",
            },
            {
              icon: (
                <FolderOpenDotIcon size={22} color="#193728" className="mb-2" />
              ),
              title: "Browse Resources",
              text: "Essential reads for service excellence",
            },
            {
              icon: (
                <GraduationCapIcon size={22} color="#193728" className="mb-2" />
              ),
              title: "Explore Events",
              text: "Discover events that build your career.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 w-full md:w-fit border-b-2 md:border-b-0 border-[#333333] pb-2"
            >
              {section.icon}
              <p className="md:text-lg text-base text-[#333333] font-bold">
                {section.title}
              </p>
              <p className="text-[#333333] font-normal text-[12px] md:text-[14px]">
                {section.text}
              </p>
              <a href="#" className="text-[#333333] text-[14px] font-semibold">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
