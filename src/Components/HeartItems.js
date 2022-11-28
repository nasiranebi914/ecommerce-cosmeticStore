import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setUnheartItem } from "../actions/faceProductAction";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";

export default function HeartItems() {
    const [isShown, setIsShown] = useState(false);
    const heartItems = useSelector((state) => state.heartItems);
    const cartItems = useSelector((state) => state.cartItems);

    const dispatch = useDispatch();
    const showHeartItems = (e) => {
        setIsShown(!isShown);
    };
    function checkOut() {
        if (heartItems.length === 0 || heartItems === null) {
            setIsShown(!isShown);
        }
    }
    const addToCart = (e, product) => {
        dispatch(setCartItems([product]));
        console.log(cartItems);
    };
    function unHeartItem(key) {
        dispatch(setUnheartItem(key));
    }
    return (
        <div>
            <div className="navbar-end ml-5">
                <a
                    className="navbar-item mr-6"
                    style={{ color: "#3c3b3a" }}
                    onClick={(e) => showHeartItems(e)}
                >
                    <RiHeartLine className="is-size-3" />
                </a>
            </div>
            {isShown && (
                <div className="modal is-active" id="js-modal-trigger">
                    <div className="modal-background"></div>
                    <div className="modal-card" style={{ height: "600px" }}>
                        <header className="modal-card-head has-background-danger-light is-flex-direction-row">
                            <p className="modal-card-title">Heart Items</p>
                            <button
                                className="delete"
                                aria-label="close"
                                onClick={(e) => showHeartItems(e)}
                            ></button>
                        </header>
                        <section className="modal-card-body">
                            {Object.entries(heartItems).map(([key, value], i) => {
                                return (
                                    <div
                                        key={i}
                                        className="is-flex is-justify-content-space-evenly is-align-items-center p-4"
                                    >
                                        <img src={value.currentSku.skuImages.image62} alt=""></img>
                                        <p style={{ width: "40%" }}>{value.displayName}</p>
                                        <p style={{ width: "15%" }}>{value.currentSku.listPrice}</p>

                                        <button className="button"
                                            onClick={(e) => addToCart(e.target.value, value)}
                                            style={{ backgroundColor: "black", color: "#f7f0f7" }}>Add To Bag</button>
                                        <button
                                            className="button is-danger is-outlined ml-2"
                                            onClick={(e) => {
                                                unHeartItem(key);
                                            }}
                                        >
                                            <RiHeartLine />
                                        </button>
                                    </div>

                                );
                            })}
                        </section>

                        <footer className="modal-card-foot has-background-danger-light is-justify-content-space-between">
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}
