import React, { useState } from "react";
import Shop from "./Components/Shop";
import Eyes from "./Components/Eyes";
import Lips from "./Components/Lips";
import Face from "./Components/Face";
import Cheeks from "./Components/Cheeks";
import Brushes from "./Components/Brushes";
import Nail from "./Components/Nail";
import Paletts from "./Components/Paletts";
import Vegan from "./Components/Vegan";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="container is-widescreen">
      <Router>
        <nav
          className="navbar"
          role="nevigation"
          aria-label="main navigation"
          style={{ backgroundColor: "#F8F7F1" }}
        >
          <div className="navbar-brand mr-6 ml-6">
            <a className="navbar-item" href="/Home">
              <h1>.LOGO</h1>
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a
                className="navbar-item mr-5 ml-5"
                style={{ color: "#9A0000" }}
                href="/Shop"
              >
                Shop
              </a>
            </div>
            <Cart />
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />}>
            <Route path="/Shop/Face" element={<Face />} />
            <Route path="/Shop/Eyes" element={<Eyes />} />
            <Route path="/Shop/Lips" element={<Lips />} />
            <Route path="/Shop/Cheeks" element={<Cheeks />} />
            <Route path="/Shop/Paletts" element={<Paletts />} />
            <Route path="/Shop/Vegan" element={<Vegan />} />
            <Route path="/Shop/Brushes" element={<Brushes />} />
            <Route path="/Shop/Nail" element={<Nail />} />

            <Route
              path="/Shop/:link/:productId/:skuId"
              element={<ProductDetail />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
