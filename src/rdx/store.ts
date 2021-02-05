import { configureStore } from "@reduxjs/toolkit"; 
import { reducer } from './reducer'; 
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { loginSaga } from '@/components/Login/saga'
import { conditionsSaga } from "components/Conditions/saga";

const sagaMiddleware = createSagaMiddleware(); 

const middleware = [thunkMiddleware, sagaMiddleware];

export const store = configureStore({
    reducer,
    middleware,
}); 

function* rootSaga() {
    yield fork(loginSaga);
    yield fork(conditionsSaga);
}

sagaMiddleware.run(rootSaga); 