import React from "react";
import Header2 from "../components/Header2";
import Hero2 from "../components/Hero2";
import Misson2 from "../components/Mission2";
import Management2 from "../components/Management2";
import Program2 from "../components/Program2";
import Student2 from "../components/Student2";
// import College2 from "../components/College2";
// import Differnt2 from "../components/Differnt2";
// import Enroll2 from "../components/Enroll2";
import New2 from "../components/New2";
// import Visit2 from "../components/Visit2";
import Follow2 from "../components/Follow2";
import Review from "../components/Review";
import Contact2 from "../components/Contact2";
import Footer2 from "../components/Footer2";

const Home2 = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-[1500px] home-2">
      <Header2 />
      <div className="lg:px-15 md:px-10 px-5">
        <Hero2 />
      </div>
      <Misson2 />
      <Management2 />
      <Program2 />
      <Student2 />
      {/* <College2 /> */}
      {/* <Differnt2 /> */}
      {/* <Enroll2 /> */}
      <New2 />
      {/* <Visit2 /> */}
      <Follow2 />
      <Review />
      <Contact2 />
      <Footer2 />
    </div>
  );
};

export default Home2;
