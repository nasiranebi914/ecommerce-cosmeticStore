import React from "react";
import ShopAll from "./ShopAll";
import Eyes from "./Eyes";
import Lips from "./Lips";
import Face from "./Face";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
                href="/ShopAll"
              >
                Shop All
              </a>
              <a
                className="navbar-item mr-5 ml-5"
                style={{ color: "#9A0000" }}
                href="/Face"
              >
                Face
              </a>
              <a
                className="navbar-item mr-5 ml-5"
                style={{ color: "#9A0000" }}
                href="/Eyes"
              >
                Eyes
              </a>
              <a
                className="navbar-item mr-5 ml-5"
                style={{ color: "#9A0000" }}
                href="/Lips"
              >
                Lips
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
          <Route path="/ShopAll" element={<ShopAll />} />
          <Route path="/Face" element={<Face />} />
          <Route path="/Eyes" element={<Eyes />} />
          <Route path="/Lips" element={<Lips />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
