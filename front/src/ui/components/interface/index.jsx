import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Interface() {
  return (
    <div
      id="interface"
      className="absolute w-full h-full z-50 flex justify-center"
    >
      <div id="wrapper" className="container px-3 py-4 flex flex-col">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
