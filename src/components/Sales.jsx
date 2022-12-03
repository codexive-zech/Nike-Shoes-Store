import React from "react";
import { Title, Item } from "../components";

const Sales = ({ endPoint, isPopularSale }) => {
  const { title, items } = endPoint;
  return (
    <div className="nike-container mt-5 lg:mt-10">
      <div className=" flex items-center justify-between">
        <Title title={title} />
      </div>
      <div
        className={`grid items-center ${
          isPopularSale
            ? "grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
            : "grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        } gap-7 md:gap-5`}
      >
        {items.map((item) => {
          return <Item key={item.id} {...item} isPopularSale={isPopularSale} />;
        })}
      </div>
    </div>
  );
};

export default Sales;
