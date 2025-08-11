import React, { useState, useEffect, useCallback, memo } from "react";
import newlogo from "../assets/Group.svg";
import vector from "../assets/Vector.png";
import { NavLink } from "react-router-dom";
import {
  Menu,
  // InstagramIcon,
  X,
  // FacebookIcon,
  // LinkedinIcon,
} from "lucide-react";
import face from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import twi from "../assets/twitter.svg";
import lin from "../assets/linkedin.svg";
// import { SiX } from "react-icons/si";
import Skeleton from "@mui/material/Skeleton";

const Header2 = memo(() => {
  const [isSubProgramOpen, setIsSubProgramOpen] = useState(() => false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(() => false);
  const [isMobileProgramOpen, setIsMobileProgramOpen] = useState(() => false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [vectorLoaded, setVectorLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = [newlogo, vector];
    preloadImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (index === 0) setLogoLoaded(true);
        if (index === 1) setVectorLoaded(true);
      };
    });
  }, []);

  const toggleSubProgram = useCallback(
    () => setIsSubProgramOpen((prev) => !prev),
    []
  );
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    []
  );
  const toggleMobileProgram = useCallback(
    () => setIsMobileProgramOpen((prev) => !prev),
    []
  );

  return (
    <div className="flex items-center home-2 lg:px-15 md:px-10 px-5 justify-between bg-white w-full h-[100px] ">
      {!logoLoaded ? (
        <Skeleton variant="rectangular" width={250} height={48} />
      ) : (
        <NavLink to="/">
          <img
            src={newlogo}
            className="lg:h-12 h-9 cursor-pointer"
            alt="logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>
      )}

      {/* Desktop Menu */}
      <div className="md:flex hidden items-center gap-x-1.5 text-[#333333] justify-between font-semibold ">
        <div className="flex items-center space-x-3.5">
          <NavLink to="/">
            {" "}
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              Home
            </h4>{" "}
          </NavLink>
          <NavLink to="/about">
            {" "}
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              About us
            </h4>{" "}
          </NavLink>
          <ul className="relative ">
            <li
              className="relative flex items-center font-semibold lg:text-[16px] text-[14px] justify-between text-[#333333]"
              onMouseEnter={toggleSubProgram}
              onMouseLeave={toggleSubProgram}
            >
              Programmes{" "}
              {!vectorLoaded ? (
                <Skeleton
                  variant="rectangular"
                  width={16}
                  height={16}
                  className="pt-1 pl-1"
                />
              ) : (
                <img
                  src={vector}
                  alt="vector"
                  className="cursor-pointer pt-1 pl-1"
                  loading="eager"
                  decoding="async"
                />
              )}{" "}
              {isSubProgramOpen && (
                <ul className="absolute left-0 top-full w-[280px] text-sm z-40 bg-white rounded-md shadow-lg py-1">
                  <li>
                    <NavLink
                      to="/house-keeper"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      House Keeper Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/nanny-training"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Nanny Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/social-etiquette"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Social Etiquette Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cultural-competence"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Cultural Competence and Awareness Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/silver-service"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Silver Service Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/steward-training"
                      className="block px-2 py-3 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Steward Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/butler-training"
                      className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Butler Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/house-manager"
                      className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      House Manager Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/luxury-bed"
                      className="block px-2 py-2 text-[#333333] hover:bg-[#C3AA8C]"
                    >
                      Luxury Bed Making And Turn Down Services Training Course
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <NavLink to="/gallery">
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              Gallery
            </h4>
          </NavLink>
          <NavLink to="/blog">
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              Blog
            </h4>
          </NavLink>
          <NavLink to="/career">
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              Career
            </h4>
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
              Contact Us
            </h4>{" "}
          </NavLink>
          {/* <h4 className="lg:text-[16px] text-[14px] font-semibold text-[#333333]">
            FAQs
          </h4> */}
        </div>
      </div>
      <div className="hidden md:flex md:items-center space-x-1.5">
        <div className="flex items-center space-x-1.5">
          <NavLink to="https://www.instagram.com/EMS_Abuja">
            {" "}
            <img
              src={insta}
              alt="instagram"
              className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c]"
              size={22}
            />{" "}
          </NavLink>{" "}
          <NavLink to="https://x.com/EMS_Abuja">
            {" "}
            <img
              src={twi}
              alt="twitter"
              className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c] "
              size={22}
            />
          </NavLink>
          <img
            src={face}
            alt="facebook"
            className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c] "
            size={22}
          />
          <img
            src={lin}
            alt="linkedin"
            className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c] "
            size={22}
          />
        </div>
        <NavLink to="/enroll">
          {" "}
          <button className="hidden md:block bg-[#19392c] text-sm font-semibold cursor-pointer text-white px-2 py-1.5">
            Enroll Now
          </button>{" "}
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center mr-4 p-2 cursor-pointer text-white bg-[#19392c] focus:outline-none transition-colors duration-300">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] pb-6 left-0 w-full bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col text-[#333333] font-semibold">
            <NavLink to="/">
              {" "}
              <li className="px-4 py-2">Home</li>{" "}
            </NavLink>
            <NavLink to="/about">
              {" "}
              <li className="px-4 py-2">About Us</li>{" "}
            </NavLink>
            <li className="">
              <button
                className="w-full text-left px-4 py-2 flex items-center justify-between"
                onClick={toggleMobileProgram}
              >
                Programmes{" "}
                {!vectorLoaded ? (
                  <Skeleton
                    variant="rectangular"
                    width={12}
                    height={12}
                    className="ml-2"
                  />
                ) : (
                  <img
                    src={vector}
                    alt="arrow"
                    className="ml-2 w-3"
                    loading="eager"
                    decoding="async"
                  />
                )}
              </button>
              {isMobileProgramOpen && (
                <ul className="pl-4 bg-gray-50">
                  <li>
                    <NavLink
                      to="/house-keeper"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      House Keeper Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/nanny-training"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Nanny Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/social-etiquette"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Social Etiquette Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cultural-competence"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Cultural Competence and Awareness Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/silver-service"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Silver Service Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/steward-training"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Steward Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/butler-training"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Butler Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/house-manager"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      House Manager Training Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/luxury-bed"
                      className="block px-4 py-2 hover:bg-[#C3AA8C]"
                    >
                      Luxury Bed Making And Turn Down Services Training Course
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <NavLink to="/gallery">
              <li className="px-4 py-2">Gallery</li>
            </NavLink>
            <NavLink to="/blog">
              {" "}
              <li className="px-4 py-2">Blog</li>{" "}
            </NavLink>
            <NavLink to="/career">
              {" "}
              <li className="px-4 py-2">Career</li>{" "}
            </NavLink>
            <li className="px-4 py-2">FAQs</li>
            <NavLink to="/contact">
              {" "}
              <li className="px-4 py-2">Contact Us</li>{" "}
            </NavLink>
            <div className="flex justify-center w-full space-x-4">
              <NavLink to="https://www.instagram.com/EMS_Abuja">
                {" "}
                <img
                  src={insta}
                  alt="instagram"
                  className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c]"
                  size={22}
                />{" "}
              </NavLink>{" "}
              <NavLink to="https://x.com/EMS_Abuja">
                {" "}
                <img
                  src={twi}
                  alt="twitter"
                  className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c]"
                  size={22}
                />
              </NavLink>
              <img
                src={face}
                alt="facebook"
                className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c] "
                size={22}
              />
              <img
                src={lin}
                alt="link"
                className="text-white w-[22px] h-[22px] cursor-pointer bg-[#19392c]"
                size={22}
              />
            </div>
            <NavLink to="/enroll">
              {" "}
              <button className="mt-3 ml-3 w-full bg-[#19392c] text-[21px] font-semibold cursor-pointer text-white px-3 py-1.5">
                Enroll Now
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
});

export default Header2;
