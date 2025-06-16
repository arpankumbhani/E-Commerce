import React from "react";
import Header from "./components/Header";
import HomeSection from "./components/Homesection";
import FlashSales from "./components/FlashSales";
import Categorries from "./components/Categories";
import BestSellingProducts from "./components/BestSellingProducts";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import NewArrival from "./components/NewArrival";
import InfoBanner from "./components/InfoBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <FlashSales />
      <Categorries />
      <BestSellingProducts />
      <Banner />
      <ProductGrid />
      <NewArrival />
      <InfoBanner />
      <Footer />
    </div>
  );
}

export default App;
