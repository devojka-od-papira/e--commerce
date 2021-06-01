import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";

import "./style.scss";

function ProductLandscape() {
  const [activProducts, setActivProducts] = useState([]);
  const [firstPosition, setFirstPosition] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (width < 481) {
      setActivProducts([arrayOfProducts[firstPosition]]);
    } else {
      setActivProducts([
        arrayOfProducts[firstPosition],
        arrayOfProducts[firstPosition + 1],
        arrayOfProducts[firstPosition + 2],
        arrayOfProducts[firstPosition + 3],
      ]);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const arrayOfProducts = [
    {
      description: "Louis Vouiton",
      image: one,
    },
    {
      description: "Dolce&Gabbana",
      image: two,
    },
    {
      description: "Gucci",
      image: three,
    },
    {
      description: "Dries van Noten",
      image: four,
    },
    {
      description: "Louis Vouiton",
      image: one,
    },
    {
      description: "Dolce&Gabbana",
      image: two,
    },
    {
      description: "Dries van Noten",
      image: four,
    },
  ];
  const handleMoveProducts = (direction) => {
    if (direction === "left") {
      if (firstPosition === 0) {
        setActivProducts([
          arrayOfProducts[firstPosition],
          arrayOfProducts[firstPosition + 1],
          arrayOfProducts[firstPosition + 2],
          arrayOfProducts[firstPosition + 3],
        ]);
      } else {
        const newPosition = firstPosition - 1;
        setFirstPosition(newPosition);
        setActivProducts([
          arrayOfProducts[newPosition],
          arrayOfProducts[newPosition + 1],
          arrayOfProducts[newPosition + 2],
          arrayOfProducts[newPosition + 3],
        ]);
      }
    } else {
      console.log("right");
      if (firstPosition === 3) {
        setActivProducts([
          arrayOfProducts[firstPosition],
          arrayOfProducts[firstPosition + 1],
          arrayOfProducts[firstPosition + 2],
          arrayOfProducts[firstPosition + 3],
        ]);
      } else {
        const newPosition = firstPosition + 1;
        setFirstPosition(newPosition);
        setActivProducts([
          arrayOfProducts[newPosition],
          arrayOfProducts[newPosition + 1],
          arrayOfProducts[newPosition + 2],
          arrayOfProducts[newPosition + 3],
        ]);
      }
    }
  };

  const handleMobileMoveProducts = (direction) => {
    console.log("mobile", direction);
    if (direction === "left") {
      const newPosition = firstPosition - 1;
      if (newPosition === 0 || newPosition === -1) {
        setFirstPosition(firstPosition);
        setActivProducts([arrayOfProducts[firstPosition]]);
      } else {
        setFirstPosition(newPosition);
        setActivProducts([arrayOfProducts[newPosition]]);
      }
    } else {
      const newPosition = firstPosition + 1;
      if (newPosition === 7) {
        setFirstPosition(firstPosition);
        setActivProducts([arrayOfProducts[firstPosition]]);
      } else {
        setFirstPosition(newPosition);
        setActivProducts([arrayOfProducts[newPosition]]);
      }
    }
  };
  console.log(firstPosition);
  return (
    <div className="product-landscape">
      <div className="products-container">
        <FontAwesomeIcon
          onClick={() =>
            width < 481
              ? handleMobileMoveProducts("left")
              : handleMoveProducts("left")
          }
          className="icon icon-left"
          icon={faChevronLeft}
        />
        {activProducts.map((product) => {
          console.log(product);
          return (
            <div className="product">
              <div>
                <img src={product.image} />
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
        <FontAwesomeIcon
          onClick={() =>
            width < 481
              ? handleMobileMoveProducts("right")
              : handleMoveProducts("right")
          }
          className="icon icon-right"
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}

export default ProductLandscape;
