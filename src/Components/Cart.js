import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteCartItem } from "../actions/faceProductAction";
import { RiShoppingBasketLine, RiDeleteBinLine } from "react-icons/ri";
export default function Cart() {
  const [isShown, setIsShown] = useState(false);
  const [alert, setAlert] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  //const cartItemsNumber = useSelector((state) => state.cartItemsNumber);

  const dispatch = useDispatch();
  const showCart = (e) => {
    setIsShown(!isShown);
  };
  const showAlert = (e) => {
    setAlert(!alert);
  };

  function deleteCartItem(key) {
    dispatch(setDeleteCartItem(key));
  }
  function checkOut() {
    if (cartItems.length === 0 || cartItems === null) {
      setIsShown(!isShown);
      setAlert(!alert);
      //window.alert("No items in the basket!");
    }
    console.log(cartItems);
  }
  return (
    <div>
      <div className="navbar-end ml-5">
        <a
          className="navbar-item mr-6"
          style={{ color: "#9A0000" }}
          onClick={(e) => showCart(e)}
        >
          <RiShoppingBasketLine className="is-size-3" />
        </a>
      </div>
      {alert && (
        <article className="modal is-active" id="js-modal-trigger">
          <div className="modal-background"></div>
          <div className="modal-card " style={{ height: "40%", width: "20%" }}>
            <header className="modal-card-head has-background-danger">
              <button
                className="delete"
                aria-label="delete"
                onClick={(e) => {
                  showAlert(e);
                }}
              ></button>
            </header>

            <div className="modal-card-body is-size-5">
              No items in the basket!
            </div>
            <footer className="modal-card-foot has-background-danger"></footer>
          </div>
        </article>
      )}
      {isShown && (
        <div className="modal is-active" id="js-modal-trigger">
          <div className="modal-background"></div>
          <div className="modal-card" style={{ height: "600px" }}>
            <header className="modal-card-head has-background-danger-light is-flex-direction-row">
              <p className="modal-card-title">My Basket</p>
              <button
                className="delete"
                aria-label="close"
                onClick={(e) => showCart(e)}
              ></button>
            </header>
            <section className="modal-card-body">
              {Object.entries(cartItems).map(([key, value], i) => {
                return (
                  <div
                    key={i}
                    className="is-flex is-justify-content-space-between is-align-items-center p-4"
                  >
                    <img src={value.currentSku.skuImages.image62} alt=""></img>
                    <p style={{ width: "40%" }}>{value.displayName}</p>
                    <p style={{ width: "15%" }}>{value.currentSku.listPrice}</p>
                    <button
                      className="button is-danger is-outlined"
                      onClick={(e) => {
                        deleteCartItem(key);
                      }}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                );
              })}
            </section>

            <footer className="modal-card-foot has-background-danger-light is-justify-content-space-between">
              {/* <p>Total Price:</p> */}
              {/* <p>Total Items: {cartItemsNumber}</p> */}
              <button
                className="button is-danger is-outlined"
                onClick={(e) => {
                  checkOut();
                }}
              >
                Go To Checkout
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
