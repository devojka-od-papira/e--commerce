import React, { useState } from "react";
import Card from "../../components/card";
import SelectFilter from "../../components/filter";
import FooterSocialMedia from "../../components/footerSocialMedia";
import GlayShop from "../../components/topNavigation";
import "./style.scss";

const showOptions = [
  { optionName: "Popular", value: "popular" },
  { optionName: "New", value: "new" },
  { optionName: "Available ", value: "available" },
  { optionName: "Outlet ", value: "outlet" },
];
const priceOptions = [
  { optionName: ">25", value: 1 },
  { optionName: "25 > 50", value: 2 },
  { optionName: "50 < ", value: 3 },
];

const brandOptions = [
  { optionName: "HM", value: "hm" },
  { optionName: "Zara", value: "zara" },
  { optionName: "Gucci", value: "gucci" },
  { optionName: "Karl Lagerfeld", value: "karl" },
];

function Shop() {
  const [show, setShow] = useState("");
  const [price, setPrace] = useState("");
  const [brand, setBrand] = useState("");

  console.log(show);
  return (
    <div>
      <GlayShop />
      <div className="card-filter">
        <SelectFilter
          value={show}
          updateValue={setShow}
          options={showOptions}
          label="Show"
        />
        <SelectFilter
          value={price}
          updateValue={setPrace}
          options={priceOptions}
          label="Price"
        />
        <SelectFilter
          value={brand}
          updateValue={setBrand}
          options={brandOptions}
          label="Brand"
        />
      </div>
      <Card show={show} price={price} brand={brand} />
      <FooterSocialMedia />
    </div>
  );
}
export default Shop;
