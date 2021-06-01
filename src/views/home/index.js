import React from "react";
import Navigation from "../../components/navigation";
import SearchBar from "../../components/topNavigation";
import Button from "../../components/button";
import "./style.scss";
import ProductLandscape from "../../components/productLandscape";
import FooterFirst from "../../components/footer";

function Home() {
  return (
    <div className="home-view">
      <SearchBar />
      <Navigation />
      <div className="content-first">
        <div className="text">
          <h1>Admire Stylish Dresses & Looks</h1>
          <p>
            If we wanted to build a human-level tool to offer automated outfit
            advice, we needed to understand people's fashion taste.
          </p>
          <Button textName="Show More" />
        </div>
        <div className="image"></div>
      </div>
      <div className="content-second">
        <div className="item-women">
          <h2>Women Collection</h2>
          <h3>Spring 2020</h3>
          <Button variant="standard" textName="Popular" />
        </div>
        <div>
          <div className="top-block">
            <div className="item-bestselers">
              <p>24 items</p>
              <h2>Bestsellers</h2>
            </div>
            <div className="item-dresses">
              <Button variant="standard" textName="New" />
              <h2>Dresses</h2>
            </div>
          </div>
          <div className="item-denim">
            <Button variant="standard" textName="New" />
            <h2>Denim Jackets</h2>
          </div>
        </div>
      </div>
      <ProductLandscape />
      <Navigation />
      <FooterFirst />
    </div>
  );
}
export default Home;
