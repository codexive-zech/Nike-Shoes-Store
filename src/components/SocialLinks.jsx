import React from "react";

const SocialLinks = ({ icon }) => {
  return (
    <div>
      {/* <a href="www.game.com"> */}
      <img
        src={icon}
        alt="social-icons"
        className="w-8 h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer transition-all duration-200 ease-in hover:scale-110"
      />
      {/* </a> */}
      {/* add links later */}
    </div>
  );
};

export default SocialLinks;
