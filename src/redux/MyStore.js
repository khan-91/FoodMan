import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import logger from "redux-logger";

const MyStore = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});
export default MyStore;