import React from "react";
import { Hero, Sales, SmallHero } from "../components";
import {
  popularSales,
  topRatedSales,
  highlight,
  featured,
} from "../utils/data.js";

const Home = () => {
  return (
    <main className=" flex flex-col gap-14 relative">
      <Hero />
      <Sales endPoint={popularSales} isPopularSale />
      <SmallHero endPoint={highlight} isHighlight />
      <Sales endPoint={topRatedSales} />
      <SmallHero endPoint={featured} />
    </main>
  );
};

export default Home;
