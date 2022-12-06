import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center mt-2 mb-5 lg:mb-10">
      <h1 className="font-bold text-4xl md:text-3xl sm:text-2xl text-slate-900">
        {title}
      </h1>
      {/* add sort by price form later */}
    </div>
  );
};

export default Title;
