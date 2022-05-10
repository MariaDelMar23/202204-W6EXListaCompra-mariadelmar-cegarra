import { configureStore } from "@reduxjs/toolkit";
import groceriesReducer from "../features/groceriesSlice";

const store = configureStore({
  reducer: {
    groceries: groceriesReducer,
  },
});

export default store;
