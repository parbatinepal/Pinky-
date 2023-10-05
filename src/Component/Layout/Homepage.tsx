import React from "react";
import Hero from "../../pages/Hero";
import Country from "../../pages/Country";
import Choose from "../../pages/Choose";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <Country />
      <Choose/>
    </>
  );
};

export default Homepage;