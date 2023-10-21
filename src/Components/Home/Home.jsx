import React from "react";
import Category from "../Category/Category";
import ExtraSection from "./ExtraSection";
import UpComing from "./UpComing";
import Footer from "../Footer/Footer";
import Banner from "./Banner";



const Home = () => {
  return (
    <div>
        <Banner></Banner>
      <Category />
      {/* <AllBrand></AllBrand> */}
      <ExtraSection></ExtraSection>
      <UpComing></UpComing>

     <Footer></Footer>

    </div>
  );
};

export default Home;
