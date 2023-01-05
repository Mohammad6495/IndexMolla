import React from "react";

import IntroSlider from "../../components/Main/IntroSlider/IntroSlider";
import MainHeader from "../../components/Main/MainHeader/MainHeader";
import BrandLogo from "../../components/Main/BrandLogo/BrandLogo";
import BrandGroup from "../../components/Main/BrandGroup/BrandGroup";
import BestProduct from "../../components/Main/BestProduct/BestProduct";
import CollectionVideo from "../../components/Main/CollectionVideo/CollectionVideo";
import YourTaste from "../../components/Main/YourTaste/YourTaste";
import SocialMedia from "../../components/Main/SocialMedia/SocialMedia";
import Footer from "../../components/UI/Footer/Footer";

import "./Main.css";

const Main = () => {
  return (
    <>
      <MainHeader />
      <main className="main">
        <IntroSlider />
        <BrandLogo />
        <BrandGroup />
        <BestProduct />
        <CollectionVideo />
        <YourTaste />
        <SocialMedia />
        <Footer />
      </main>
    </>
  );
};

export default Main;
