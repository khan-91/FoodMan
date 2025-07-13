import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";


const  MyStore = configureStore({
        reducer:Reducer 
    });
export default MyStore;