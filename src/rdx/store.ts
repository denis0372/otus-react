import { configureStore } from "@reduxjs/toolkit"; 
import { reducer } from './reducer'; 
import thunkMiddleware from "redux-thunk";
import { conditionControlMiddleware } from "./middleware";


const middleware = [thunkMiddleware, conditionControlMiddleware];

export const store = configureStore({
    reducer,
    middleware,
}); 