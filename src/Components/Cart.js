import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const [isShown, setIsShown] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const showCart = (e) => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <div className="navbar-end ml-5">
        <a
          className="navbar-item"
          style={{ color: "#9A0000" }}
          onClick={(e) => showCart(e)}
        >
          Cart
        </a>
      </div>
      {isShown && (
        <div className="modal is-active" id="js-modal-trigger">
          <div className="modal-card">
            <header className="modal-head is-flex-direction-row">
              <p>Cart Items</p>
              <button
                className="delete"
                aria-label="close"
                onClick={(e) => showCart(e)}
              ></button>
            </header>

            <section className="modal-card-body">
              {Object.entries(cartItems).map(([key, value], i) => {
                return <div>{value.displayName}</div>;
              })}
            </section>

            <footer className="modal-card-foot">Footer</footer>
          </div>
        </div>
      )}
    </div>
  );
}
