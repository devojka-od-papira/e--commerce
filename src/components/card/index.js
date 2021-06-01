import React, { Fragment, useState, useEffect } from "react";

const cardDescription = [
  {
    id: 1,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "hm",
    price: 2,
    show: "popular",
  },
  {
    id: 2,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "hm",
    price: 1,
    show: "new",
  },
  {
    id: 3,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "zara",
    price: 3,
    show: "availabe",
  },
  {
    id: 4,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "zara",
    price: 1,
    show: "outlet",
  },
  {
    id: 5,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "gucci",
    price: 2,
    show: "popular",
  },
  {
    id: 6,
    title: "Women costume Yves Saint Laurent",
    description:
      "Fashion is something we deal with everyday.Even people who say t..",
    brand: "gucci",
    price: 3,
    show: "outlet",
  },
];

function Card({ show, price, brand }) {
  console.log(show, price, brand);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cardDescription);
  }, []);

  useEffect(() => {
    if (brand || show || price) {
      const filterd = cardDescription.filter((card) => {
        if (brand === card.brand) {
          return card;
        } else if (show === card.show) {
          return card;
        } else if (Number(price) === card.price) {
          return card;
        }
      });
      console.log("Mitar", filterd);
      setData(filterd);
    }
  }, [price, brand, show]);
  console.log(data);
  return (
    <Fragment>
      <div className="container">
        {data.map((card) => {
          return (
            <div>
              <div className="card-header">
                <img src="" alt="" />
              </div>
              <div className="card-description">
                <h2>Women's costume Yves Saint Laurent </h2>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Card;
