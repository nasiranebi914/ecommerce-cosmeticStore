import { configureStore } from "@reduxjs/toolkit";
import { faceProductReducer } from "./reducers/faceProductReducer";

export default configureStore({
  reducer: faceProductReducer,
});
