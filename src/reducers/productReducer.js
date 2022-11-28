import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  faceProducts: [],
  lipsProducts: [],
  eyesProducts: [],
  cheeksProducts: [],
  palettsProducts: [],
  veganProducts: [],
  brushesProducts: [],
  nailProducts: [],
  cartItems: [],
  cartItemsNumber: 0,
  heartItems: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FACE_PRODUCTS:
      return { ...state, faceProducts: payload };
    case ActionTypes.SET_LIPS_PRODUCTS:
      return { ...state, lipsProducts: payload };
    case ActionTypes.SET_EYES_PRODUCTS:
      return { ...state, eyesProducts: payload };
    case ActionTypes.SET_CHEEKS_PRODUCTS:
      return { ...state, cheeksProducts: payload };
    case ActionTypes.SET_PALETTS_PRODUCTS:
      return { ...state, palettsProducts: payload };
    case ActionTypes.SET_VEGAN_PRODUCTS:
      return { ...state, veganProducts: payload };
    case ActionTypes.SET_BRUSHES_PRODUCTS:
      return { ...state, brushesProducts: payload };
    case ActionTypes.SET_NAIL_PRODUCTS:
      return { ...state, nailProducts: payload };
    case ActionTypes.SET_CART_ITEMS_NUMBERS:
      return { ...state };
    case ActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.concat(payload),
        cartItemsNumber: state.cartItemsNumber + 1,
      };
    case ActionTypes.SET_HEART_ITEMS:
      return {
        ...state,
        heartItems: state.heartItems.concat(payload),
      };
    case ActionTypes.SET_DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.displayName !== state.cartItems[payload].displayName;
        }),
        cartItemsNumber: state.cartItemsNumber - 1,
      };
    case ActionTypes.SET_CART_ITEMS_NUMBERS:
      return { ...state };
    case ActionTypes.SET_UNHEART_ITEM:
      return {
        ...state,
        heartItems: state.heartItems.filter((item) => {
          return item.displayName !== state.heartItems[payload].displayName;
        }),
      };
    default:
      return state;
  }
};
