import React, { useState } from "react";
import Header from "./components/Header/Header";
import AuthPage from "./AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import OrderPage from "./components/OrderPage/OrderPage";
import OrderPage2 from "./components/OrderPage2/OrderPage2";
import Footer, { StartingPage } from "./components/Footer/Footer";
import Header2 from "./components/Header2/Header2";
import Main2 from "./components/Main2/Main2";
import About2 from "./components/About2/About2";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="content">
              <Header />
            </div>
          </div>
        </div>
        <div className="wrapp">
          <Routes>
            <Route path="/Main" element={<Main />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/OrderPage" element={<OrderPage />}></Route>
          </Routes>
        </div>
        {/* <div className="footer_footer">
          <div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="content">
            <Header2 />
          </div>
        </div>
      </div>
      <div className="wrapp">
        <Routes>
          <Route path="/" element={<Main2 />}></Route>
          <Route path="/SecondAbout" element={<About2 />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/SecondOrderPage" element={<OrderPage2 />}></Route>
          <Route path="/Registration" element={<AuthPage />}></Route>
        </Routes>
      </div>
      {/* <div className="footer_footer">
          <div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div> */}
    </div>
  );
};
