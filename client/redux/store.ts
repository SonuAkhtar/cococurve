import { configureStore } from "@reduxjs/toolkit";
import deliveryReducer from "./deliverySlice";

export default configureStore({
  reducer: {
    delivery: deliveryReducer,
  },
});
