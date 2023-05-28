import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
