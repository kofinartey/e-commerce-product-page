import React from "react";
import Button from "./components/button/Button";
import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";

function ProductPage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Button onClick={() => console.log("button clicked")}>Hello</Button>
    </div>
  );
}

export default ProductPage;
