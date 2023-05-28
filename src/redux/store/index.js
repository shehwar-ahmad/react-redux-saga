import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/reducers/Counter";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { counterReducer },
  middleware: [saga],
});
