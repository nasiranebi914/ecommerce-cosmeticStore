import React from "react";
import Shop from "./Shop";
import Eyes from "./Eyes";
import Lips from "./Lips";
import Face from "./Face";
import Cheeks from "./Cheeks";
import Brushes from "./Brushes";
import Nail from "./Nail";
import Paletts from "./Paletts";
import Vegan from "./Vegan";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
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
          style={{ backgroundColor: "#EAE5D6" }}
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
            <div className="navbar-end ml-5">
              <a className="navbar-item" style={{ color: "#9A0000" }}>
                Cart
              </a>
            </div>
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

            <Route path="/Shop/Face/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
