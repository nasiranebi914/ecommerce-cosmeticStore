import React from "react";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";

function Shop() {
  return (
    <div className="section has-background-white">
      <div className="columns is-mobile">
        <div className="column is-one-quarter mr-5">
          <div className="menu ">
            <div className="menu-list">
              <ul>
                <li className="mb-3 ">
                  <Link to={"/Shop/Face"}>Face</Link>
                </li>
                <li>
                  <Link to={"/Shop/Eyes"}>Eyes</Link>
                </li>
                <li>
                  <Link to={"/Shop/Lips"}>Lips</Link>
                </li>
                <li>
                  <Link to={"/Shop/Cheeks"}>Cheeks</Link>
                </li>
                <li>
                  <Link to={"/Shop/Paletts"}>Paletts</Link>
                </li>
                <li>
                  <Link to={"/Shop/Vegan"}>Vegan</Link>
                </li>
                <li>
                  <Link to={"/Shop/Brushes"}>Brushes</Link>
                </li>
                <li>
                  <Link to={"/Shop/Nail"}>Nail</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Shop;
