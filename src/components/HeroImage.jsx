import React from "react";

const HeroImage = ({ img }) => {
  return (
    <img
      src={img}
      alt="hero-shoe"
      className=" w-auto  h-[35vh] lg:h-[22vh] sm:h-[17vh] xs:h-[14vh] -rotate-[25deg] hover:rotate-0 transitions-theme transition-all duration-300 ease-in-out my-3 md:my-0"
    />
  );
};

export default HeroImage;
