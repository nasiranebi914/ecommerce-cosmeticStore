import React, { useState } from "react";
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
import HeartItems from "./Components/HeartItems"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="container.is-fullhd" >
      <Router>
        <div
          className="is-flex is-justify-content-space-between is-align-items-center"
          style={{ backgroundColor: "#aea49b" }}
        >
          <div>
            <a
              className="is-size-4 ml-6"
              href="/Home"
              style={{ color: "#3c3b3a" }}
            >
              .L E P H O R A
            </a>
          </div>
          <div className='is-flex'>
            <HeartItems />
            <Cart />
          </div>
        </div>
        <nav
          className="navbar mb-4"
          role="nevigation"
          aria-label="main navigation"
          style={{ backgroundColor: "#22221e" }}
        >
          <div
            id="navbarBasicExample"
            className="navbar-menu is-flex is-justify-content-space-evenly"
          >
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Face"
            >
              Face
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Eyes"
            >
              Eyes
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Lips"
            >
              Lips
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Cheeks"
            >
              Cheeks
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Paletts"
            >
              Paletts
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Vegan"
            >
              Vegan
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Brushes"
            >
              Brushes
            </Link>
            <Link
              className="navbar-item mr-5 ml-5"
              style={{ color: "#EEEEEE" }}
              to="/Nails"
            >
              Nails
            </Link>
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
          <Route
            path="/:link/:productId/:skuId"
            element={<ProductDetail />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
