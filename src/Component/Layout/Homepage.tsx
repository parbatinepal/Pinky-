import React from "react";
import Hero from "../../pages/Hero";
import Country from "../../pages/Country";
import Choose from "../../pages/Choose";
import About from "../../pages/About";
import Banner from "../../pages/Banner";
import Test from "../../pages/Test";
import Partners from "../../pages/Partners";



const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <Country />
      <Choose/>
      <About/>
      <Banner/>
      <Test/>
      <Partners/>      
    </>
  );
};

export default Homepage;