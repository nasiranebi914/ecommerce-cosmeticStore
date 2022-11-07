import { ActionTypes } from "./actionTypes";

export const setFaceProducts = (faceProducts) => {
  return {
    type: ActionTypes.SET_FACE_PRODUCTS,
    payload: faceProducts,
  };
};
export const setLipsProducts = (lipsProducts) => {
  return {
    type: ActionTypes.SET_LIPS_PRODUCTS,
    payload: lipsProducts,
  };
};
export const setEyesProducts = (eyesProducts) => {
  return {
    type: ActionTypes.SET_EYES_PRODUCTS,
    payload: eyesProducts,
  };
};
export const setCheeksProducts = (cheeksProducts) => {
  return {
    type: ActionTypes.SET_CHEEKS_PRODUCTS,
    payload: cheeksProducts,
  };
};
export const setPalettsProducts = (palettsProducts) => {
  return {
    type: ActionTypes.SET_PALETTS_PRODUCTS,
    payload: palettsProducts,
  };
};
export const setVeganProducts = (veganProducts) => {
  return {
    type: ActionTypes.SET_VEGAN_PRODUCTS,
    payload: veganProducts,
  };
};
export const setBrushesProducts = (brushesProducts) => {
  return {
    type: ActionTypes.SET_BRUSHES_PRODUCTS,
    payload: brushesProducts,
  };
};
export const setNailProducts = (nailProducts) => {
  return {
    type: ActionTypes.SET_NAIL_PRODUCTS,
    payload: nailProducts,
  };
};
export const setCartItemsNumber = (cartItemsNumber) => {
  return {
    type: ActionTypes.SET_CART_ITEMS_NUMBERS,
    payload: cartItemsNumber,
  };
};
export const setCartItems = (cartItems) => {
  return {
    type: ActionTypes.SET_CART_ITEMS,
    payload: cartItems,
  };
};
