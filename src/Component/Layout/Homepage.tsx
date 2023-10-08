import React from "react";
import Hero from "../../pages/Hero";
import Country from "../../pages/Country";
import Choose from "../../pages/Choose";
import About from "../../pages/About";
import Banner from "../../pages/Banner";
import Test from "../../pages/Test";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <Country />
      <Choose/>
      <About/>
      <Banner/>
      <Test/>
    </>
  );
};

export default Homepage;