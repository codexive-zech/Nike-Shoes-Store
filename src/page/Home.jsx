import React from "react";
import { Hero, Sales } from "../components";
import { popularSales, topRatedSales } from "../utils/data.js";

const Home = () => {
  return (
    <main className=" flex flex-col gap-14 relative">
      <Hero />
      <Sales endPoint={popularSales} isPopularSale />
      <Sales endPoint={topRatedSales} />
    </main>
  );
};

export default Home;
