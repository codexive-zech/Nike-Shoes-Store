import React from "react";

const SmallHero = ({ endPoint, isHighlight }) => {
  const { heading, title, text, img, btn, url } = endPoint;
  return (
    <div
      className={` flex md:flex-col items-center justify-between md:justify-center nike-container ${
        isHighlight ? " flex-row-reverse" : " flex-row"
      }`}
    >
      {/* Text */}
      <div className=" flex flex-col md:text-center max-w-xl lg:max-w-none w-full">
        <h1 className="text-4xl md:text-3xl text-gradient font-bold mb-1">
          {heading}
        </h1>
        <h1 className="text-4xl md:text-3xl sm:text-2xl filter drop-shadow-md text-slate-900 font-bold">
          {title}
        </h1>
        <p className=" text-slate-800 text-md my-2">{text}</p>
        <a
          href={url}
          target="_blank"
          className="flex items-center justify-start md:justify-center"
        >
          <button
            type="button"
            className="button-theme  text-slate-100 bg-slate-900 py-1 "
          >
            {btn}
          </button>
        </a>
      </div>
      {/* image */}
      <div className=" flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="w-full object-fill h-60 lg:h-54 md:h-48 sm:h-36 rotate-12 hover:-rotate-12 transition-all duration-300 ease-in-out md:mt-4 transitions-theme"
        />
      </div>
    </div>
  );
};

export default SmallHero;
