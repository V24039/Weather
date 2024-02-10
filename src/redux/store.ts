import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { weatherReducer } from "./weatherSlice";
import { weatherSaga } from "./weatherSaga";

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = configureStore({
  reducer: {
    weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(weatherSaga);
