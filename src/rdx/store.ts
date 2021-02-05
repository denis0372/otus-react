import { configureStore } from "@reduxjs/toolkit"; 
import { reducer } from './reducer'; 
import thunkMiddleware from "redux-thunk";
import { conditionControlMiddleware } from "@/components/Conditions/middleware";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { loginSaga } from '@/components/Login/saga'

const sagaMiddleware = createSagaMiddleware(); 

const middleware = [thunkMiddleware, sagaMiddleware, conditionControlMiddleware];

export const store = configureStore({
    reducer,
    middleware,
}); 

function* rootSaga() {
    yield fork(loginSaga);
}

sagaMiddleware.run(rootSaga); 