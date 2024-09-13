import React from "react";
import Home from "../home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Datacard from "../imageadd/Datacard";

const Headers = () => {
  return (
    <div
      className="bg-cover bg-center w-full  h-full"
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/thumbnails/008/617/161/small/abstract-gradient-pastel-blue-and-purple-background-neon-pastel-color-template-for-website-or-presentation-free-free-vector.jpg)", // Replace with your image URL
      }}
    >
      <Navbar />
      <Home />
      <Datacard />
      <Footer />
    </div>
  );
};

export default Headers;
