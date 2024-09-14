import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Headers from "./components/Header/Headers";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Headers/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
