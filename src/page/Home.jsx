import React from "react";
import { Cart, Footer, Hero, Navbar, Sales, SmallHero } from "../components";
import {
  popularSales,
  topRatedSales,
  highlight,
  featured,
} from "../utils/data.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className=" flex flex-col gap-14 relative">
        <Hero />
        <Sales endPoint={popularSales} isPopularSale />
        <SmallHero endPoint={highlight} isHighlight />
        <Sales endPoint={topRatedSales} />
        <SmallHero endPoint={featured} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
