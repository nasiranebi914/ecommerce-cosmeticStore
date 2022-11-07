import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../actions/faceProductAction";

function Products({ productType, link }) {
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemsNumber = useSelector((state) => state.cartItemsNumber);
  const dispatch = useDispatch();

  const addToCart = (e, product) => {
    dispatch(setCartItems([product]));
    console.log(cartItems, cartItemsNumber);
  };
  return (
    <div>
      <div
        className="column"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          display: "flex",
        }}
      >
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "13px",
          }}
        >
          {productType.map((product, i) => (
            <div
              className="card"
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div className="card-image" style={{ height: "300px" }}>
                <figure className="image ">
                  <img key={product.id} src={product.image450}></img>
                </figure>
              </div>
              <div className="card-content " style={{ height: "100px" }}>
                <div className="content">
                  <Link
                    to={`${link}${product.productId}/${product.currentSku.skuId}`}
                    style={{ color: "#1F150A" }}
                  >
                    {product.displayName}
                  </Link>
                </div>
              </div>
              <div className="ml-5" style={{ color: "#1F150A" }}>
                {product.currentSku.listPrice}
              </div>
              <button
                className="button is-danger is-outlined mt-4 "
                onClick={(e) => addToCart(e.target.value, product)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
