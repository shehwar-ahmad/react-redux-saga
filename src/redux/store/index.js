import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/reducers/Counter";

export const store = configureStore({
  reducer: { counterReducer },
});
