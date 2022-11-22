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
    <div className="container.is-fullhd" style={{ backgroundColor: "#f7f0f7" }}>
      <Router>
        <div
          className="is-flex is-justify-content-space-between is-align-items-center"
          style={{ backgroundColor: "#f7dae0" }}
        >
          <div>
            <a
              className="is-size-4 ml-6"
              href="/Home"
              style={{ color: "#9A0000" }}
            >
              .L E P H O R A
            </a>
          </div>
          <Cart />
        </div>
        <nav
          className="navbar mb-4"
          role="nevigation"
          aria-label="main navigation"
          style={{ backgroundColor: "#0c0503" }}
        >
          <div
            id="navbarBasicExample"
            className="navbar-menu is-flex is-justify-content-space-evenly"
          >
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Face"
            >
              Face
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Eyes"
            >
              Eyes
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Lips"
            >
              Lips
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Cheeks"
            >
              Cheeks
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Paletts"
            >
              Paletts
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Vegan"
            >
              Vegan
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Brushes"
            >
              Brushes
            </a>
            <a
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              href="/Nails"
            >
              Nails
            </a>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="/Face" element={<Face />} />
          <Route path="/Eyes" element={<Eyes />} />
          <Route path="/Lips" element={<Lips />} />
          <Route path="/Cheeks" element={<Cheeks />} />
          <Route path="/Paletts" element={<Paletts />} />
          <Route path="/Vegan" element={<Vegan />} />
          <Route path="/Brushes" element={<Brushes />} />
          <Route path="/Nails" element={<Nail />} />
          {/* <Route path="/Shop" element={<Shop />}>
            <Route
              path="/Shop/:link/:productId/:skuId"
              element={<ProductDetail />}
            />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
