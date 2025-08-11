import React from "react";
import Header2 from "../components/Header2";
import About from "../components/About";
import Aabout from "../components/Aabout";
import OurValues from "../components/OurValues";
import Contact2 from "../components/Contact2";
import Footer2 from "../components/Footer2";

const AboutPage2 = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Header2 />
      <div className="lg:px-15 md:px-10 px-5 p">
        <About />
        <div className="py-10 p">
          <Aabout />
        </div>
        <OurValues />
      </div>
      <Contact2 />
      <Footer2 />
    </div>
  );
};

export default AboutPage2;
