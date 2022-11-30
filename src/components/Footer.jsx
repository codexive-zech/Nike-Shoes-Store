import React from "react";
import { footerAPI } from "../utils/data";
const Footer = () => {
  const { titles, links } = footerAPI;
  const myDate = new Date();

  return (
    <div className="bg-theme mt-28">
      <div className="nike-container text-slate-100">
        <div className=" grid items-start justify-items-start grid-cols-3 md:gap-5 pt-5 max-w-2xl lg:max-w-none w-full m-auto">
          {titles.map((footerTitle, index) => {
            const { title } = footerTitle;
            return (
              <div key={index} className="grid items-center">
                <h1 className=" text-lg md:text-md sm:text-sm uppercase font-semibold">
                  {title}
                </h1>
              </div>
            );
          })}
          {links.map((footerLink, index) => {
            return (
              <ul key={index} className="grid items-center gap-1">
                {footerLink.map((links, index) => {
                  const { link } = links;
                  return (
                    <li key={index} className="text-sm sm:text-xs">
                      {link}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className=" grid items-center justify-items-center mt-6 pb-3 ">
          <p className="text-base sm:text-sm font-bold">
            Developed by Zechariah. Copyright {myDate.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
