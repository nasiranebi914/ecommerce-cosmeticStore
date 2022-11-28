import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setHeartItems } from "../actions/faceProductAction";
import { RiHeartLine } from "react-icons/ri";

function Products({ productType, link }) {
  const cartItems = useSelector((state) => state.cartItems);
  const heartItems = useSelector((state) => state.heartItems);
  const cartItemsNumber = useSelector((state) => state.cartItemsNumber);
  const dispatch = useDispatch();
  const category = link.slice(1, -1);

  const addToCart = (e, product) => {
    dispatch(setCartItems([product]));
    console.log(cartItems, cartItemsNumber);
  };
  const addToHeartItems = (e, product) => {
    dispatch(setHeartItems([product]));
    console.log(heartItems);
  };
  return (
    <div>
      <p className="subtitle is-2 p-6">Shop Our {category} Products</p>
      <div
        className=""
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          paddingLeft: "8%",
          paddingRight: "8%",
        }}
      >

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
              <a
                className="heartItem is-size-4"
                style={{ color: "#3c3b3a" }}
                onClick={(e) => addToHeartItems(e.target.value, product)}
              ><RiHeartLine />
              </a>
              <div className="card-image" style={{ height: "80%" }}>
                <figure className="image">
                  <img key={product.id} src={product.image450}></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  {/* <Link
                    to={`${link}${product.productId}/${product.currentSku.skuId}`}
                    style={{ color: "#1F150A" }}
                  >
                    {product.displayName}
                  </Link> */}
                  {product.displayName}
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
