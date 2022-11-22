import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setCartItemsNumber } from "../actions/faceProductAction";

function Products({ productType, link }) {
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemsNumber = useSelector((state) => state.cartItemsNumber);
  const dispatch = useDispatch();
  const category = link.slice("1");

  console.log(productType);
  const addToCart = (e, product) => {
    dispatch(setCartItems([product]));
    console.log(cartItems, cartItemsNumber);
  };
  return (
    <div>
      <div
        className="section is-small is-flex-direction-column"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          paddingLeft: "8%",
          paddingRight: "8%",
        }}
      >
        <p className="title">Shop Our {category} Products</p>
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "20px",
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
                textAlign: "center",
              }}
            >
              <div className="card-image" style={{ height: "80%" }}>
                <figure className="image ">
                  <img key={product.id} src={product.image450}></img>
                </figure>
              </div>
              <div className="card-content">
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
                className="button mt-4"
                onClick={(e) => addToCart(e.target.value, product)}
                style={{ backgroundColor: "black", color: "#f7f0f7" }}
              >
                Add To Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
