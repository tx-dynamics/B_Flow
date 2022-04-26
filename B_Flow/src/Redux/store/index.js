import {createStore, compose , applyMiddleware}  from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";
import configureStore from "@reduxjs/toolkit"

const store = configureStore(reducers, {} , compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
