import React from "react";
import { heroApi } from "../utils/data";
import { SocialLinks, ClipPath, HeroImage } from "../components";

const Hero = () => {
  const { title, subtitle, img, socialLinks, btnText } = heroApi;
  return (
    <div className="relative w-auto h-auto flex items-center">
      <ClipPath />
      <div className="relative grid items-center justify-items-center nike-container opacity-100 z-20 ">
        <div className=" grid items-center justify-items-center mt-28 md:mt-24">
          <h1 className=" text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl drop-shadow-sm filter font-extrabold text-slate-100 mb-2 sm:mb-0">
            {title}
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl drop-shadow-sm filter font-extrabold text-slate-100">
            {subtitle}
          </h1>
          <button
            type="button"
            className="button-theme bg-slate-200 shadow-slate-300 my-5 capitalize"
          >
            {btnText}
          </button>
          <div className=" grid items-center absolute top-[33vh] md:top-[28vh] right-3 gap-3">
            {socialLinks.map((social, index) => {
              return <SocialLinks key={index} {...social} />;
            })}
          </div>
        </div>
        <div className="grid items-center">
          <HeroImage img={img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
